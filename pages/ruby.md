---
layout: course
title: Ruby Basics
permalink: /ruby/
page_name: ruby
navbar_class: ruby-course
---

# :pray: Welcome to Ruby Basics

This course has been designed to get the basic understanding of Ruby language. After completing this course you should be able to understand and write Ruby programs.

{% include util/notice.html
    primary="The content of the syllabus is still in building stage."
    secondary="However, you can still begin your learning."
%}

<div class="section-index">
  <hr class="panel-line">

  <div class="container-fluid">
    <div class="card-columns">
    {% for section_hash in site.data.ruby %}
      {% for section in section_hash.links %}
        {% include course/topic-card.html
            topic=section index=forloop.index %}
      {% endfor %}
    {% endfor %}
    </div>
  </div>
</div>
