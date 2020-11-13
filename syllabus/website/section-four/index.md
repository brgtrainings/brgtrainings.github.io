---
layout: course
course: website
title: jQuery Basics
date: 12th Nov, 2020 1:00:00
type: section
description: Section Four - jQuery Basics
permalink: /website/section-four/
disable_toc: true
---

# Welcome to jQuery Basics

{% include util/note.html
    note="In this section, we will try to get familiar with jQuery basics which assists JavaScript and help us in writing behavior faster and efficiently."
%}

#### Have a wonderful journey in learning jQuery.

<div class="section-index">
  <hr class="panel-line">

  <div class="container-fluid mt-4">
    <div class="row">
      <div class="col-md-12">
        <h3 class="mt-1">Go to topics</h3>
      </div>
    </div>
    <div class="row">
    {% for section_hash in site.data.website %}
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
