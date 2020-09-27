---
layout: syllabus_page
title: Creating app view
date: 27th Sept, 2020 02:00:00
course: ruby-on-rails
parent: /ruby-on-rails/section-three/
tags:
 - view
description: Creating app view
permalink: /ruby-on-rails/section-three/app-view/
prev_link: /ruby-on-rails/section-three/app-controller/
next_link: /ruby-on-rails/section-three/design-ui/
disable_toc: true
comments: true
---

# Creating view for showing an Idea

In the previous page, we got the template error as:

```shell
No template for interactive request

IdeasController#show is missing a template for request formats: text/html

...
```

It means that we are missing the view file which is an ERB template inside `app/views/ideas` folder.

Fix the above error by creating a file `show.html.erb` inside `app/views/ideas` folder.

```erb
<h1>Showing Idea</h1>
```

Now, the text `Showing Idea` as heading size will be appeared.

## Displaying Idea content

To display the content of Idea, we need to pass the idea data from controller to view. This can be done by creating an instance variable inside `IdeasController#show` method which then available inside `show.html.erb` file.

```ruby
class IdeasController < ApplicationController
  def show
    @idea = Idea.find(params[:id])
  end
end
```

__NOTE:__ The `params` is a Hash object which stores the data sent by the users. It stores both the query string and POST parameters. The `params[:id]` return `1` in our case since our URL is `/ideas/1`.

Also, update `show.html.erb` as:

```html
<h1>Showing Idea</h1>

<p>
  <strong>Title: </strong> @idea.title
</p>
<p>
  <strong>Description: </strong> @idea.description
</p>
```

Now, reload your browser, you should see following:

{% include image.html img="courses/ror/idea-show-1.png" class="shadow" %}

## Understanding ERB Template

In this section, we will try to understand little about ERB template.

'ERB' Refers to Embedded Ruby. It's file that ends with an `.html.erb` or `.erb` extension.

Everything we write inside an ERB template is HTML along with special tags containing Ruby statements. These tags are then processed by template engine and replace it with evaluated Ruby code inside it.

There are mainly two kind of ERG tags used in Rails.

### <% ... %> : Execution Tag

This tag `<% ... %>` when used will only perform the execution of the Ruby code only.

Example:

```erb
<% (1..5).each do |i| %>
  <h6>hello</h6>
<% end %>
```

will print `hello` 5 times.

However, if you want to also print index number then we need to use _Expression Tag_.

### <%= ... %> : Expression Tag

This tag indicates that there will be an expression inside it. The evaluated result of the code inside this tag will be replaced with the tag itself.

Example:

```erb
<% (1..5).each do |i| %>
  <h6> hello, <%= i %> </h6>
<% end %>
```

This should print `hello` along with its index number.

{% include util/note.html note="You can try above code by putting in 'show.html.erb' file." %}
