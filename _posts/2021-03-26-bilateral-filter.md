---
category: computer-vision
date: 2021-03-18
description: "Bilateral filter algorithm"
layout: post
permalink: bilateral-filter/
title: Bilateral Filter
---

## Nội dung cơ bản của thuật toán

Sử dụng hàm Gaussian cho color domain (độ sáng của ảnh) và space domain (vị trí điểm ảnh)
![](/images/bilateral-filter.png)

Như vậy thuật toán đảm bảo được 2 yếu tố:
- Làm mờ ảnh (lọc nhiễu) 
- Bảo toàn edge trong ảnh

## References
- [A Gentle Introduction
to Bilateral Filtering
and its Applications](http://people.csail.mit.edu/sparis/bf_course/slides/03_definition_bf.pdf)