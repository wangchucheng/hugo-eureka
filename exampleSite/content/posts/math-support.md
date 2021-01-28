---
title: Math Support
description:
toc: true
authors:
  - example-author
tags:
categories:
series:
date: '2020-11-20T22:52:56+08:00'
lastmod: '2020-11-20T22:52:56+08:00'
featuredImage:
draft: false
---

Eureka supports the rendering of mathematical formulas by using KaTeX.

<!--more-->


You can type inline equation like $E=mc^2$.

And also displayed equation like:

<div>
\[ \int u \frac{dv}{dx}\, dx=uv-\int \frac{du}{dx}v\,dx \]
</div>


Matrix:

<div>
\[ \begin{pmatrix} a&b\\c&d \end{pmatrix} \quad
\begin{bmatrix} a&b\\c&d \end{bmatrix} \quad
\begin{Bmatrix} a&b\\c&d \end{Bmatrix} \quad
\begin{vmatrix} a&b\\c&d \end{vmatrix} \]
</div>

Aligned equation:

<div>
\[\begin{aligned}
x ={}& a+b+c+{} \\
&d+e+f+g
\end{aligned}\]
</div>

And many other kinds of formulas.
