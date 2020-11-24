---
layout: tutorial
tutorial: true
page_id: interviews
title: Ruby Interview Questions
date: 24th Nov, 2020 1:00:00
description: Ruby Interview Questions
permalink: /interview-questions/ruby/
thumbnail: interview-questions/ruby.png
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
    {% for interview in site.data.interview-questions.ruby %}
      <tr>
        <th scope="row">forloop.index</th>
        <td>interview.qns</td>
      </tr>
    {% endfor %}
  </tbody>
</table>
