---
category: web
date: 2021-01-28
description: "5 lines of code go a long way in making your test names much more readable."
image: https://www.mugshotbot.com/m?theme=two_up&mode=light&color=green&pattern=diagonal_lines&image=d33ff6b7&url=https://masilotti.com/xctest-name-readability/
layout: post
permalink: xctest-name-readability/
title: How to use masilotti theme
xcode: 12
gist: https://gist.github.com/tuyenld/79ada5f9e0ffdec990aad2db0becbadd
---


## Notification box

{% include tldr.html box="CODE" tldr="This is TLDR notification" %}

[See more](https://v1.tailwindcss.com/components/alerts)

Titled

<div role="alert">
  <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
    Danger
  </div>
  <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
    <p>Something not ideal might be happening.</p>
  </div>
</div>

<p class="text rounded-lg bg-blue-200 bg-opacity-25 text-blue-700 px-8 py-4 my-4">
  You can now wait for elements in UI Testing with a single line.
</p>

Notification with images
<p class="text rounded-lg bg-blue-200 bg-opacity-25 text-blue-700 px-8 pt-4 pb-8 my-4">
  Starting with Xcode 12, test failures automatically appear at the calling line!

  <img src="/images/helper-failure-xcode-12.png" class="w-full rounded-lg mt-8 mb-0 lg:mb-0">
</p>

## Images

Image scrollable
<div class="h-64 overflow-y-scroll">
  <img src="/images/xwing.app.png" alt="Screenshot of https://xwing.app" class="align-top my-0 lg:my-0" />
</div>
<div class="block text-center mt-4">Screenshot of the landing page, <a href="https://xwing.app">https://xwing.app</a>.</div>


Images with text caption

<div class="max-w-sm mx-auto">
  <img src="/images/two-unit-tests-zero-integration-tests.png" alt="Two unit tests, zero integration tests" class="rounded-lg shadow-lg mb-0 lg:mb-0"/>
  <p class="text-center text-sm text-gray-500">Two unit tests, zero integration tests</p>
</div>

Items with timelines

{% include timelines/mugshot-bot.html %}


To use this, you have to add `gist` to YAML Front Matter
for example
```
layout: post
gist: https://gist.github.com/tuyenld/79ada5f9e0ffdec990aad2db0becbadd
```
{% include gist.html %}


Here is an advertisement :)

{% include mentoring-cta.html %}


Here is some series
{% include series.html %}

## Icons

🤠
🙏

## Slide

Feel free to follow along with the slides.

<div class="embed-responsive aspect-ratio-16/9">
  <iframe class="embed-responsive-item" src="https://docs.google.com/presentation/d/e/2PACX-1vRynAGN6pexj9XgECGEDU_tp8iENwB6ZrM22q5c9njXULmfnMT6-CPFrAl29Yma6CM4Cfp_BHWiD5lr/embed?start=false&loop=false&delayms=5000" frameborder="0" width="960" height="425" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style="overflow: hidden;"></iframe>
</div>
