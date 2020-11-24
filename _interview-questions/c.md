---
layout: tutorial
tutorial: true
title: C Interview Questions
date: 24th Nov, 2020 1:00:00
description: C Interview Questions
permalink: /interview-questions/c/
thumbnail: interview-questions/c.png
comments: true
---

<table class="table table-striped table-bordered">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Question</th>
    </tr>
  </thead>
  <tbody>
    {% for qns in site.data.interview-questions.c %}
      <tr>
        <th scope="row">{{ forloop.index }}</th>
        <td>{{ qns }}</td>
      </tr>
    {% endfor %}
  </tbody>
</table>
