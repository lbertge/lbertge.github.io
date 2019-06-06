# The complexities of a toy problem

[[toc]]

## Don't make neural nets for everything

Let's take a look at a [toy problem](https://blog.openai.com/requests-for-research-2/).

> ⭐ Train an LSTM to solve the XOR problem: that is, given a sequence of bits, determine its parity. The LSTM should consume the sequence, one bit at a time, and then output the correct answer at the sequence’s end. Test the two approaches below:
>
> Generate a dataset of random 100,000 binary strings of length 50. Train the LSTM; what performance do you get?
>
> Generate a dataset of random 100,000 binary strings, where the length of each string is independently and randomly chosen between 1 and 50. Train the LSTM. Does it succeed? What explains the difference?

First of all, let's establish that this is a trivial problem, so we remind ourselves that machine learning is not a cure-all solution:
```python
import numpy as np
def xor(string):
    return np.sum(string) % 2

xor([1, 0, 1]) # 0
```

## 

$$x + y = z$$

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>
