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

# Welcome to Section Two

{% include util/highlight.html
    text="In this phase, we will try to learn the basic building blocks of the language." type="success" class="h3"
%}


<div class="section-index">
  <hr class="panel-line">

  <div class="container-fluid">
    <div class="card-columns">
      {% for section_hash in site.data.ruby %}
        {% for section in section_hash.links %}
          {% for sub_section in section.children %}
            {% assign section_link = page.permalink | replace_first: "/", "" %}
            {% if sub_section.url contains section_link %}
              <!-- <div class="col-lg-4 col-md-6"> -->
                {% include course/topic-card.html
                            topic=sub_section index=forloop.index %}
              <!-- </div> -->
            {% endif %}
          {% endfor %}
        {% endfor %}
      {% endfor %}
    </div>
  </div>
</div>
