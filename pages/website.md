---
layout: course
course: website
title: Website Development
permalink: /website/
page_name: website
disable_sidebar: true
disable_toc: true
---

{% include util/note.html
    note="The content of the syllabus is still in building stage. However, you can still begin your learning."
    type="important"
%}

# :pray: Welcome to Website Development course

This course has been designed to help prepare students learn with __Zero Knowledge__ of __Website Development__ to beginner level of __Professional Website Development__.

{% include util/highlight.html
    text="This course has been designed with the intention of being used in an interactive online or classroom teaching session. <br>Feel free to use it for your self-learning purpose." class="h5"
%}

The course has been divided into different sections with a goal in each section.

## What is Website

A __website__ is a collection of web pages and related content that is identified by a common domain name and published on at least one web server. An examples are [brgtrainings.com(this website)](https://brgtrainings.com), [wikipedia.org](https://wikipedia.org){:target="_blank"} or others. [(source)](https://en.wikipedia.org/wiki/Website){:target="_blank"}

Based on the accessibility, there are two types of websites:

- __Public Website__: A website which is available to anyone and one can view it by typing its URL in the browser. For example, [brgtrainings.com](https://brgtrainings.com) is a public website since you are able to access it.

{% include util/note.html
    note="All the publicly accessible websites collectively help built the <strong>World Wide Web (www)</strong>."
%}

- __Private Website__: A website which can be only accessed on a private network and they are usually a companie's internal website for their employees only.

__RESOURCE:__ [Wikipedia page on Website.](https://en.wikipedia.org/wiki/Website){:target="_blank"}

## What makes a website professional

A professional website mostly belongs to some profession or business. It can be your own personal website only.

{% include util/note.html note="The main objective of such website is to promote something like services, product or your identity." %}

In order to achieve good image to your website visitors, it has to be designed properly.
In fact, it sets the first to how people see and understand your business.

There are many characteristics which makes the website __professional__.
Following are few important characteristics:

- __Domain name__: The domain name is used to identify you online and act as your digital address.
- __Nice and clean design__: The layout and the design of a website decide how it looks and drive the feelings of those who see it. It includes the best use of the _colors, typography, branding, contents_ etc.
- __User experience__: It is one the most important factor which refers to the experience your visitors have when they come across your site.
- __Quality Contents__: They say, _"content is king."_ The content you provide to your visitor is going to decide whether someone stays or leaves. It should have to be neat and tidy, free of grammar and punctual errors, well formatted and relevant to the business you have them.
- __Responsive behavior__: In today's time, the website need to be responsive. It means, it should be properly visible in most of the popular devices (_mobile, tablet or desktop_) a general user use.
- __Page Speed__: It determines how fast your website get loaded in visitor's device. If it takes times then surely the visitor will gonna leave the website.
- __Search engines compatible__: The website should able to be easily find by search engines as most of the users find anything in search engines. The way to improve your website in such context is through _Search Engine Optimization(SEO)_ techniques.

## How to get best benefits out of this course

- Code snippets can be copied by selecting the code inside the gray area.
- The code examples has been tested well and you should have similar output as well.
- Check the `Learning Notations` section below to see important notations used.
- The course can be properly viewable in mobile and tablet.
- This can be considered as the comprehensive course.

{% include util/note.html
          note="Use <strong>Desktop</strong> for the best learning experience as you can practice the code snippet along with." type="important" %}

## Learning Notations

{% include util/note.html
          note="<strong>Info: </strong> Indicates some information." %}

{% include util/note.html
          note="<strong>Warning: </strong> Indicates warning." type="warning" %}

{% include util/note.html
          note="<strong>Recommended: </strong> Indicates recommendation." type="recommend" %}

{% include util/note.html
          note="<strong>Important: </strong> Indicates important point or phrase." type="important" %}

{% include util/note.html
          note="<strong>Caution: </strong> Indicates caution." type="caution" %}

## Sections

<div class="section-index">
  <div class="container-fluid">
    <div class="row">
    {% for section_hash in site.data.website %}
      {% for section in section_hash.links %}
        <div class="col-md-6">
          {% include course/topic-card.html topic=section index=forloop.index %}
        </div>
      {% endfor %}
    {% endfor %}
    </div>
  </div>
</div>
