---
title: The Transformer
date: June 7, 2019
layout: Post
tags: [ml, papers]
---

## Model Architecture

There's the encoder and the decoder.
The encoder is a function that maps symbol represntations to a latent(?) vector:
$$ (x_1, \dots, x_n) \rightarrow (z_1, \dots, z_n)$$
The decoder does the reverse:
$$ (z_1, \dots, z_n) \rightarrow (y_1, \dots, y_n)$$

### Stacks
The encoder has a stack of 6 identical layers. 
Each layer has two sub-layers: A multi-head attention(?) layer, and a fully connected (FC) network.
There is residual connection (?) around each sub-layer, and layer normalization (?).
All sub-layers produce outputs with dimension $d=512$.

The decoder has a stack of 6 identical layers.
Each layer has three layers: a multi-head layer, an FC layer, and _another_ multi-head over the encoder's output. Residual connections, layer norm, are as before in the encoder.

> The decoder is specifically modified so that positions in the sub-layer cannot attend to subsequent positions.

### Attention
Attention is a function which maps a query, and key-value pairs, to an output. The output is a weighted sum of the values, and the weights is computed with a special (compatibility) function of the query and the key.

For the transformer, a specific attention is used, called "Scaled Dot-Product Attention". $d_k$ refers to the dimensionality of the keys, and of the queries, and $d_v$ for values.
$$Attention(Q,K,V) = softmax(\frac{QK^T}{\sqrt{d_k}})V$$

### Multi-Head Attention
The model uses $h=8$ scaled-dot product attention functions. For each $h$, a learned linear projection maps queries, keys, and values to vectors of size $d_k, d_k, d_v = 64$ dimensions, respectively. On each set of projected queries, keys, and values, the attention function is applied to produce $h$ different vectors of size $d_v$. These are concatenated and then projected.

$$ \textnormal{MultiHead}(Q,K,V) = \textnormal{Concat}(h_1,\dots, h_h)W^O$$
where $h_i = \textnormal{Attention}(QW_i^Q,KW_i^K,VW_i^K)$ 

### How is Attention Used?
* Queries are taken from the previous decoder layer, and memory keys/values come from the encoder. Thus, every position in the decoder can attend to all positions in the input sequence.
* Self attention layers in the encoder take keys, values, and queries from the previous encoder layer. Again, each position in the encoder can attend to all positions in the previous layer of the encoder.
* Self attention layers in the decoder also allow each position to attend to all positions in the decoder.

### FC network
A FC network, taking the output of the encoder/decoder as as input. It applies a linear transformation $W_1$, with ReLU activation layer, and a second transofmration $W_2$.
$$ \textnormal{FFN}(x) = \textnormal{max}(0, xW_1 + b_1)W_2 + b_2 $$

### Positional Encoding
There's no recurrence and convolution in the network, so in order to capture relative/absolute positions in the sequence, the model includes "positional encodings". These encodings are input embeddings at the beginning of both the encoder/decoder. 
The positional encoding for a given position $pos$ and dimension $i$ is given as follows:
$$
PE_{(pos,2i)} = sin(pos/10000^{2i/d_model})\\
PE_{(pos,2i+1)} = cos(pos/10000^{2i/d_model})
$$

Each dimension is a sinusoid, with the wavelengths forming a geometric progression from $2\pi$ to $10000 \cdot 2\pi$. The idea is that the model could attend to relative positions.

## Why Self Attention?
* Less total computation complexity per layer
* Increased parallelized computations
* Trying to learn-range dependencies is the crux of sequence transduction tasks. Forward and backward signals have to traverse the network, so the shorter the paths between a pair of positions, the easier to learn long-range dependencies.

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">