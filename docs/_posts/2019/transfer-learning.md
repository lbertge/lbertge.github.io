---
title: Transfer Learning Project Log
date: June 06, 2019
layout: Post
tags: [rl]
---

This is a log for a project I'm working on.

## What is a trajectory?
From [here](https://spinningup.openai.com/en/latest/spinningup/rl_intro.html?highlight=trajectory), we can define a trajectory as
a sequence $\tau = (s_0, a_0, s_1, a_1 ...)$, where $s_0$ denotes the first state of the world. Each state transition is determined by the state at time t $s_t$, and the action $a_t$ taken by the model, and can be deterministic or stochastic.

How does that translate into code? In a gym environment, we may have an API of the following form:

```py
# from https://github.com/openai/baselines/blob/master/baselines/common/policies.py
actions,  values, state, neglogp = model.step(obs, **kwargs)
```

from the source of the `step` method, it looks like the values (estimate), state, and negative log likelihood are output by the model to estimate the outcome of the agent taking the specified action.

The model is basically a policy network, which governs the actions taken by an agent, and it takes in the state at time $s_t$. Thus, it should be fair to say that the state really equals the `obs` variable in the code.

With the model saved, we take a crack at using OpenAI's baselines repo to examine the shape of the states/actions for the environment:

```py {5, 9}
# handcrafted snippet from main.py
import baselines.run as r
model, env = r.train(args, extra_args)
print(model, env)
print(env.action_space, env.observation_space)
...
obs = env.reset()
actions, _, _, _ = model.step(obs)
print(actions.shape, obs.shape)

> <baselines.ppo2.model.Model object at 0x...> <baselines.common.vec_env.vec_frame_stack.VecFrameStack object at 0x...>
> Discrete(4) Box(210, 160, 12)
> (8, ) (8, 210, 160, 12)
```

There's some information that is useful to understanding what's going on. The `action_space` for this environment is of type `Discrete(4)`, so that means there's only four distinct moves to take, and each move is discrete, i.e., all-or-nothing. The `observation_space` is a `Box` with dimensions (210, 160, 12), so observations must follow that exact shape. The size of the dimensions suggests that the observation space are video frames, with length, width, and channel(?) requirements.

::: tip info
Some more digging revealed that the observation_space is shape (210, 160, 12) because of a 4-frame stacking. A call to [VecFrameStack](https://github.com/openai/baselines/blob/master/baselines/run.py#L103) shows that the env feeds a stack of four consecutive frames (since the environment does not have frameskip). At each env step, the stack shifts the frames in the array [backward](https://github.com/openai/baselines/blob/master/baselines/common/vec_env/vec_frame_stack.py#L23), and updates the last frame, so at all times the stack maintains a rolling snapshot of the frames. 
:::

At first glance, the spaces as defined by the environment doesn't quite match up with the space objects themselves. The actions vector is of size 8, and the observation space has a fourth dimension, 8, too. 

We'll need to dig a little into the implementation to understand the discrepancy. Following the code takes us to the `build_env()` function in the same module. It makes a call to `make_vec_env` and passes in `nenv = args.num_env or multiprocessing.cpu_count()` as a parameter. Thus, the program creates an environment, one for each available cpu core, and the model interfaces with each of those environments. If we follow the `make_vec_env` call, we see that it spawns the parallel envs as [subprocesses](https://github.com/openai/baselines/blob/master/baselines/common/cmd_util.py#L57), as evidenced by the comment on the class [`SubprocVecEnv`](https://github.com/openai/baselines/blob/master/baselines/common/vec_env/subproc_vec_env.py#L36):
>   VecEnv that runs multiple environments in parallel in subproceses and communicates with them via pipes.
    Recommended to use when num_envs > 1 and step() can be a bottleneck.

To summarize, what we really have is that the model simultaneously takes in observations from 8 copies of the same environment, and produces actions for each of them (0, 1, 2, or 3 for each). The purpose of doing so is to decrease training time, with the model able to take in much more data in batches. 

Each env's results are then aggregated to produce metrics such as eplenmean (mean episode length) and eprewmean (mean episode reward). Each env has a `Monitor` class attached which records the model's performance on that environment for a given episode. It logs the reward, length, and time elapsed(from `time.time()`), abbreviated as `r,l,t` respectively. The log data can be found by examining the stdout of the program, which starts with the line `Logging to`...

A possible roadblock I enccountered was the fact that I may not have enough space to generate all the data. At each step, the state is of size $210 \times 160 \times 12$ = 400KB, so 1000 steps is 400MB, and 10,000 trajectories is 4TB. I will probably need to find a way to store it all, or possibly reduce the amount of data required.

## Next steps
Have to look into storage requirements, read the Transformer paper.

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">