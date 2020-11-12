---
layout: course
title: Section One
date: 15th April, 2020 1:00:00
course: python
type: section
description: Section Two - learning building blocks
permalink: /python/section-two/
prev_section: /python/section-one/
disable_toc: true
---

### Congratulations on the completion of section one.

# Welcome to Section Two (learning building blocks)

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
