---
layout: post
title:  "How I Discovered the Sum of Squares Formula Over Dinner"
date:   2025-07-15 11:32:15 -0400
categories: Math
---

{% include mathjax.html %}

How I Discovered the Sum of Squares Formula Over Dinner
---

It started with a casual dinner at a restaurant with my parents and sister. As always, I brought with me my notebook, two pens, and a brain that refuses to stop thinking, A few moments after sitting down, a curious question struck me and followed me home. I worked on it at the dinner table, in the car, and in my room well into that night. What's the sum of the first $n$ perfect squares? I'd never seen the formula before, let alone any derivation. Most textbook derivations rely on advanced algebraic identities or clever manipulations I didn't know at the time. But that day, I found a way that was intuitive and deeply satisfying. What follows is one of my proudest little mathematical discoveries from high school.

Problem at hand:

> Can we find a closed-form formula for the sum of the first $n$ perfect squares?

Note that I will not focus on presenting a formal mathematical proof here, rather I'll simplify my derivation as much as possible, to ensure any audience with a basic mathematical acumen can understand it.

To start, recall (or, as I did, discover after about an hour of playing around) that the sum of the first $N$ odd natural numbers is $N^2$. If you've never heard of this before, it's a good idea to verify it yourself, since the entire derivation stems from this fact.

For instance:
$$1^2+2^2+3^2=1+4+9=(1)+(1+3)+(1+3+5)$$
We note that the number $1$ appears in the sum three times, $3$ appears twice, and $5$ appears only once. The pattern is obvious here because each perfect square is simply the previous perfect square plus the next odd natural number.

Thus, we deduce that:
$$\begin{align*}\sum_{i=1}^{N} i^2 = \sum_{i=1}^{N} (2i - 1)(N + 1 - i	)\\\implies \sum_{i=1}^{N} i^2 = \left( \sum_{i=1}^{N} (2i - 1) \right) N - \sum_{i=1}^{N-1} i(2i + 1)\end{align*}
$$

We know that $\left( \sum_{i=1}^{N} (2i - 1) \right) = N^2$ because the sum of the first $N$ odd natural numbers is $N^2$ (a fact we discussed earlier in this post).

Then,
$$
\begin{align*} \sum_{i=1}^{N} i^2 &= N^3 - \sum_{i=1}^{N-1} i(2i + 1) \\  &=N^3-2\sum_{i=1}^{N} i^2 - \sum_{i=1}^{N} i + 2N^2 + N\\\implies 3\sum_{i=1}^{N} i^2 &=N^3-\sum_{i=1}^{N} i+N(2N+1)\end{align*}
$$

[Recall that](https://en.wikipedia.org/wiki/1_+_2_+_3_+_4_+_%E2%8B%AF) $\sum_{i=1}^{N} i = \frac{N(N+1)}{2}$:
$$
\begin{align*}
3\sum_{i=1}^{N} i^2 &= N^3 - \frac{N(N+1)}{2} + N(2N+1) \\
&= N^3 + 2N^2 + N - \frac{N(N+1)}{2} \\
&= \frac{2N^3 + 4N^2 + 2N - N(N+1)}{2} \\
&= \frac{2N^3 + 4N^2 + 2N - N^2 - N}{2} \\
&= \frac{2N^3 + 3N^2 + N}{2}
\end{align*}
$$

Dividing both sides by 3 gives us the final result:
$$
\sum_{i=1}^{N} i^2 = \frac{2N^3 + 3N^2 + N}{6} = \frac{N(N+1)(2N+1)}{6}
$$

And there it is, the beautiful closed-form formula for the sum of the first $N$ perfect squares, derived without ever having seen it before. Just a notebook, two pens, and an unusually persistent brain over dinner :)

I'd recommend every high schooler to give this a try, and if you know someone who would benefit from this exercise, tell them to derive the formula without seeing it. I firmly believe anyone can solve anything (without guidance) with enough time and curiosity. Perhaps you can discover a more intuitive method to solve this problem :D
