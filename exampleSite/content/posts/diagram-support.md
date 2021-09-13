---
title: Diagram Support
description:
toc: true
authors:
  - example-author
tags:
categories:
series:
date: '2021-03-31T13:11:22+08:00'
lastmod: '2021-03-31T13:11:22+08:00'
featuredImage:
draft: false
---

Eureka supports the rendering of diagrams by using Mermaid.

<!--more-->


Please include the Mermaid diagram as below. Every mermaid chart/graph/diagram definition, has to have separate `<div>` tags.

In order to render the HTML code in the Markdown file correctly, please make sure that `markup.goldmark.renderer.unsafe` in `config.yaml` is true.

Here is one mermaid diagram:

<div class="mermaid">
  graph TD
  A[Client] --> B[Load Balancer]
  B --> C[Server1]
  B --> D[Server2]
</div>

And here is another:

<div class="mermaid">
  graph TD
  A[Client] -->|tcp_123| B(Load Balancer)
  B -->|tcp_456| C[Server1]
  B -->|tcp_456| D[Server2]
</div>