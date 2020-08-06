---
layout: syllabus_page
title: Hello World
date: 21th April, 2020 02:00:00
parent: /ruby/section-one/
tags:
 - hello world
description: Hello World program in Ruby
permalink: /ruby/section-one/hello-world/
prev_link: /ruby/section-one/features/
next_link: /ruby/section-one/irb/
navbar_class: ruby-course
comments: true
---

# Hello World Program

Writing a `Hello World` program in Ruby is as simple as writing a single line in
a file as

```ruby
puts 'Hello World'
```

## Do it yourself

Create a file name as `hello.rb` in your favorite editor or through command line editor like `vim`.

Although, you can give any name to file. I have used `hello`.
By convention, Ruby source files have `.rb` file extension.

Then, type following line in the file:

```ruby
puts 'Hello World' # or puts "Hello World"
```

Run the program in the terminal or shell as:

```shell
ruby hello.rb
```

{% include util/show-output.html id="rubyhelloworld" caption="Output" %}
{% include util/output.html id="rubyhelloworld" output="Hello World" lang="ruby" %}

##### Congrats! You just wrote your first program in Ruby.

{% include quiz.html file='hello-world-quiz' %}

## Key points to understand

- File extension of Ruby program is `.rb`
- To print strings into the standard output (i.e terminal), you can use `puts`,
  a portmanteau of "put string".
- `#` is used as comment operator
- Single and double quotes can be used to define String.