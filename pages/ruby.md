---
layout: course
title: Ruby Basics
permalink: /ruby/
page_name: ruby
navbar_class: ruby-course
---

# Ruby Basics

Welcome to the {{ site.title }} learning platform! Here you can quickly jump to a particular section.

{% include util/notice.html
    primary="The content of the syllabus is still in building stage."
    secondary="However, you can still begin your learning."
%}

<div class="section-index">
  <hr class="panel-line">
  {% for section_hash in site.data.ruby %}
    {% for section in section_hash.links %}
      <div class="entry">
        <h5>
          <a href="{{ site.url }}/{{ site.baseurl }}{{ section.url }}">{{ section.title }}</a>
        </h5>
      </div>
    {% endfor %}
  {% endfor %}
</div>
