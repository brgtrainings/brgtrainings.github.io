---
layout: course
title: Ruby Basics
permalink: /ruby/
page_name: ruby
navbar_class: ruby-course
---

# :pray: Welcome to Ruby Basics

This course has been designed to get the basic understanding of Ruby language. After completing this course you should be able to understand and write Ruby programs.

{% include util/note.html
    note="This course has been designed by <strong>BRG</strong> based on his work experience in the IT Industry, research and findings with the intention of using it for his interactive online or classroom trainings. <br>Feel free to use it as a reference course for your self-learning." class="h3"
%}

The course has been divided into difference sections with some intention in each section.

Important Points to remember:

- Code snippets can be copied by selecting the code inside the gray area.
- The code examples has been tried in specific OS/Ruby version (`macOS/Ubuntu 18.04` and `Ruby 2.7.1`). In most of the cases, you will have the same output.
- Check the `Learning Notations` section below to see important notations used.
- The course can be properly viewable in mobile and tablet.
- This can be considered as the comprehensive course.

{% include util/note.html
    note="The content of the syllabus is still in building stage. However, you can still begin your learning."
    type="warning"
%}

{% include util/note.html
          note="Use <strong>Desktop</strong> for the best learning experience as you can practice the code snippet along with." type="important" %}

## Learning Notations

{% include util/note.html
          note="<strong>Info: </strong> Indicates some information." %}

{% include util/note.html
          note="<strong>Warning: </strong> Indicates warning." type="warning" %}

{% include util/note.html
          note="<strong>Recommended: </strong> Indicates recommendation." type="recommend" %}

{% include util/note.html
          note="<strong>Important: </strong> Indicates important point or phrase." type="important" %}

{% include util/note.html
          note="<strong>Caution: </strong> Indicates caution." type="caution" %}

## Sections

<div class="section-index">
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
