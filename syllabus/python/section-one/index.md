---
layout: course
title: Section One
date: 15th April, 2020 1:00:00
course: python
type: section
description: Section One - getting familiar with language
permalink: /python/section-one/
disable_toc: true
---

# Welcome to Section One (getting familiar with language)

__Hello!__

Say _Hi_ to Python.

In this section, you will be getting yourself familiar with the Python language.

Python is an interpreted, high-level, general-purpose programming language. Created by `Guido van Rossum` and first
released in 1991, Python's design philosophy emphasizes code readability with its notable use of significant
whitespace. Python is dynamically typed and garbage-collected language and supports multiple programming paradigms, including structured(particularly, procedural), object-oriented, and functional programming.
[(source)](https://en.wikipedia.org/wiki/Python_%28programming_language%29){:target="_blank"}

We will know more about Python in the following sub-sections.

#### Have a wonderful journey in learning Python.

<div class="section-index">
  <hr class="panel-line">

  <div class="container-fluid">
    <div class="row">
    {% for section_hash in site.data.python %}
      {% for section in section_hash.links %}
        {% for sub_section in section.children %}
          {% assign section_link = page.permalink | replace_first: "/", "" %}
          {% if sub_section.url contains section_link %}
            <div class="col-md-6">
              {% include course/topic-card.html
                          topic=sub_section index=forloop.index %}
            </div>
          {% endif %}
        {% endfor %}
      {% endfor %}
    {% endfor %}
    </div>
  </div>
</div>
