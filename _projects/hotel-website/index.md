---
layout: course
# projects: true
title: Section One
date: 31st Aug, 2020 1:00:00
course: c
type: section
description: Section One - getting familiar with language
permalink: /c/section-one/
disable_toc: true
---

# Welcome to Section One

{% include util/note.html
    note="In this phase, we will try to get familiar with the language."
%}

#### Have a wonderful journey in learning C.

<div class="section-index">
  <hr class="panel-line">

  <div class="container-fluid mt-4">
    <div class="row">
      <div class="col-md-12">
        <h3 class="mt-1">Go to topics</h3>
      </div>
    </div>
    <div class="row">
    {% for section_hash in site.data.c %}
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
