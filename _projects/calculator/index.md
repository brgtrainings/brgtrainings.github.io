---
layout: tutorial_series
projects: true
learning_type: projects
tutorial_name: calculator
title: Calculator Project in HTML, CSS and JavaScript
date: 26th Oct, 2020 1:00:00
description: Calculator Project in HTML, CSS and JavaScript
permalink: /projects/calculator/
redirect_from: /projects/calculator/overview
thumbnail: projects/calculator/part2_5.png
disable_sidebar: true
disable_toc: true
---

In this tutorial series, we are trying to build a calculator project in HTML, CSS and JavaScript.

<div class="section-index">
  <hr class="panel-line">

  <div class="container-fluid">
    <div class="row">
      {% for section_hash in site.data.projects.calculator %}
        {% for section in section_hash.links %}
          <div class="col-md-6">
            <a href="{{ site.url }}/{{ site.baseurl }}{{ section.url }}" class="text-secondary">
              <div class="card shadow mb-3">
                <div class="card-body">
                  <h5 class="card-title font-weight-bold">{{ section.title }}</h5>
                  {% if section.description %}
                    <p class="card-text">{{ section.description }}</p>
                  {% endif %}
                </div>
              </div>
            </a>
          </div>
        {% endfor %}
      {% endfor %}
    </div>
  </div>
</div>
