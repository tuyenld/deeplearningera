# Use in development
```bash
# https://github.com/TartanLlama/actions-eleventy
npm install 
npm start -- --port 4000
```

# Example contents

```md

---
title: "Stop Comparing Yourself to Others #SelfLove"
date: 2020-02-11T17:30
thumb: "comparing-yourself.jpg"
tags: 
    - motive
    - animal
    - sample
---

thumb: "https://i.imgur.com/AAVR2qH.jpg"
description: "The end of procrastination is the art of letting go"


## YouTube Videos
https://www.youtube.com/watch?v=SaCheA6Njc4

{% ytb 'SaCheA6Njc4' %}

## Don't render shortcode

{% raw %}
See more in typography.md
{% endraw %}
```