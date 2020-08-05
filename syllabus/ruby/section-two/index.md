---
layout: course
title: Section Two
date: 20th April, 2020 1:00:00
type: section
description: Section Two - learning building blocks
permalink: /ruby/section-two/
navbar_class: ruby-course
---

### Congratulations on the completion of section one.

# Welcome to Section Two { learning building blocks }

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
