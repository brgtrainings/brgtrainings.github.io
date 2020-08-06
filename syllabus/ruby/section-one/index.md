---
layout: course
title: Section One
date: 15th April, 2020 1:00:00
type: section
description: Section One - getting familiar with language
permalink: /ruby/section-one/
navbar_class: ruby-course
---

# Welcome to Section One

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

  {% for section_hash in site.data.ruby %}
    {% for section in section_hash.links %}
      {% for sub_section in section.children %}
        {% assign section_link = page.permalink | replace_first: "/", "" %}
        {% if sub_section.url contains section_link %}
          <div class="entry">
            <h5>
              <a href="{{ site.url }}/{{ site.baseurl }}{{ sub_section.url }}">{{ sub_section.title }}</a>
            </h5>
          </div>
        {% endif %}
      {% endfor %}
    {% endfor %}
  {% endfor %}
</div>
