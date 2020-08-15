---
layout: tutorial_series
tutorial: true
series: true
title: Git for Students
date: 15th April, 2020 1:00:00
type: section
description: Section One - getting familiar with language
permalink: /tutorials/git-for-students/
navbar_class: ruby-course
---

# Git for Students

{% include util/notice.html
    primary="In this phase, we will try to get familiar with the language."
%}

__Hello!__

Say _Hi_ to Ruby.

In this section, you will be getting yourself familiar with the Ruby language.

Ruby is a dynamic, object-oriented, general-purpose and open-source programming language. It is a very
simple, friendly and easy to use programming language.

#### Have a wonderful journey in learning Ruby.

<div class="section-index">
  <hr class="panel-line">

  {% for section_hash in site.data.tutorials.git-for-students %}
    {% for section in section_hash.links %}
      <div class="entry">
        <h5>
          <a href="/{{ site.baseurl }}{{ section.url }}">{{ section.title }}</a>
        </h5>
      </div>
    {% endfor %}
  {% endfor %}
</div>
