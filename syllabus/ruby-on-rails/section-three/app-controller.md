---
layout: syllabus_page
title: Creating app controller
date: 27th Sept, 2020 02:00:00
course: ruby-on-rails
parent: /ruby-on-rails/section-three/
tags:
 - controller
description: Creating app controller
permalink: /ruby-on-rails/section-three/app-controller/
prev_link: /ruby-on-rails/section-three/app-model/
next_link: /ruby-on-rails/section-three/app-view/
disable_toc: true
comments: true
---

# Creating Idea controller in Rails

Let's fix the error we got in the previous page for `uninitialized constant IdeasController`:

```shell
Routing Error

uninitialized constant IdeasController Did you mean? Ideastore
Rails.root: /Users/coolbrg/me/codesnippets/ror/ideastore

Application Trace | Framework Trace | Full Trace

Routes

Routes match in priority from top to bottom
...
```

## Fixing error for controller

Let's try to understand error here.

The error says that our application doesn't have constant (or class in this case) with name `IdeasController`.
Let's fix this by creating a controller with file name `ideas_controller.rb` under `app/controllers` folder.

```ruby
# app/controller/ideas_controller.rb
class IdeasController < ApplicationController
end
```

Now, the above error should be fixed but we will different error.

```shell
Unknown action

The action 'show' could not be found for IdeasController
```

This error says that we don't have action (or method in terms of programming) inside `IdeasController`.

Updated the `IdeasController` with method `show` as:

```ruby
# app/controller/ideas_controller.rb
class IdeasController < ApplicationController
  def show
  end
end
```

## Template error

The error related to controller has gone and we are now getting following error which is related to view:

```shell
No template for interactive request

IdeasController#show is missing a template for request formats: text/html

NOTE!

Unless told otherwise, Rails expects an action to render a template with the same name,
contained in a folder named after its controller. If this controller is an API responding with 204 (No Content),
which does not require a template, then this error will occur when trying to access it via browser,
since we expect an HTML template to be rendered for such requests. If that's the case, carry on.
```
