---
category: computer-vision
date: 2021-03-18
description: "watershed algorithm"
layout: post
permalink: water-shed/
title: Thuật toán Watershed ứng dụng trong xử lý ảnh
---


# Các khái niệm
Mỗi một điểm trên ảnh được chia làm 3 loại sau:
![](/images/khai-niem-co-ban.png)

- regional minimum: điểm đáy của hình nón
- catchment basin: vùng từ điểm đáy hình nón đến `watershed line`
- watershed lines: điểm phân cách giữa các `catchment basin` 

Thuật toán sẽ đi xác định 3 loại điểm này.

#  Các bước
1. Xác định `regional minimum`
2. Bắt đầu từ các `regional minimum`, đổ nước dần dần vào `catchment basin`
3. Khi nước dâng lên ở `catchment basin`, đến một mức nào đó các vùng `catchment basin` này bắt đầu chồng lấn lên nhau. Đây chình là `watershed lines` cần xác định
 
# Reference
- [cecas.clemson.edu ece847 lecture04-segmentation.ppt](https://cecas.clemson.edu/~stb/ece847/internal/lectures/lecture04-segmentation.ppt)
- [tau.ac.il turkel watershed_Segmentation.ppt](http://www.math.tau.ac.il/~turkel/notes/watershed_Segmentation.ppt)