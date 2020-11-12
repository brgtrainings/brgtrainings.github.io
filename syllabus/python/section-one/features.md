---
layout: syllabus_page
course: python
title: Features of Python
date: 30th April, 2020 06:00:00
parent: /python/section-one/
tags:
 - features
description: Features of Python Language
permalink: /python/section-one/features/
prev_link: /python/section-one/history/
next_link: /python/section-one/hello-world/
comments: true
---

# Features of Python

There are many features of Python. However, following are prominent features which make it one of
the good general-purpose programming language.

## Simple and easy to Learn

Python is very easy to learn as compared to other language like C, C++, C#, Java, JavaScript etc.
It is very easy to code in python language and anybody can learn python basic in few hours or days.
The code looks like simple english language and doesn't look as cryptic as in C, Java or others.
It is also developer-friendly language since just by looking at it you will be able to know what
it is supposed to do.

## Expressive

Python is more expressive than other languages like C, C++, Java etc. It helps you give your focus on the solution
rather than investing the mind on the Syntax by providing you with a myriad of constructs.
This expressiveness nature help it to be more understandable and readable.

In general, the "expressiveness" of a language come down to how clearly the language constructs can
"express" the developer's intentions.

Or in another aspect it can be conveyed as the ability to say only what you want done:

```shell
bad_event = events.find(&:bad)
```

rather than how you want it done:

```shell
i = 0
bad_event = nil
while i < events.size && bad_event.nil?
  event = events[i]
  if event.bad?
    bad_event = event
  end
  i += 1
end
```

## Interpreted

If you’re familiar with any languages like C++ or Java, you must first compile it, and then run it. But in Python,
there is no need to compile it. Internally, its source code is converted into an immediate form called bytecode.
So, all you need to do is to run your Python code without worrying about linking to libraries, and a few other
things.

By interpreted, we mean the source code is executed line by line, and not all at once. Because of this, it is
easier to debug your code. Also, interpreting makes it just slightly slower than Java, but that does not matter
compared to the benefits it has to offer.

## Object Oriented Language

Python is known as Object Oriented programming language because it can model the real world. Python basically
focuses on an object and combines functions and data. Oppositely a language which is more procedure-oriented
revolves around the function that is coded and reused.

In Python programming, both Procedure-oriented and Object-oriented language is supported. This is one more key
feature of Python. Unlike Java, it also underpins various inheritance.
A class is an abstract data type and holds no values. Class is a blueprint, for such objects.

## Dynamically Typed Language

Python is dynamically-typed language. That means the type (for example- int, double, long etc) for a variable is
decided at run time not in advance. Because of this feature we don’t need to specify the type of variable.

```python
name = 'Python'
# variable name is given datatype as String by Python Interpreter

name = 100
# variable name datatype is changed to Integer by Python Interpreter
```

In above example, you can easily understand how datatype of variable `name` can be switched easily
since during compile time dataype is not checked.

[Click here](https://en.wikipedia.org/wiki/Dynamic_programming_language){:target="_blank"} to understand
more about `Dynamic Typing`.

## Free and Open Source

Python programming language can be downloaded freely and one can easily install and use it. It is an open source,
language which means the source code is available publicly. You can check the source of Python(CPython) in [GitHub](https://github.com/python/cpython){:target="_blank"}. With this source, you can build the language in your own
machine and use it or update the source code to add your own features and even send your code to the project
owners/maintainers for review. And, if they like your code, they can even add into Python.

## Extensible

If needed, you can write some of your Python code in other languages like C++. This makes Python an extensible
language, meaning that it can be extended to other languages.

## Embeddable

We just saw that we can put code in other languages in our Python source code. However, it is also possible to put
our Python code in a source code in a different language like C++. This allows us to integrate scripting
capabilities into our program of the other language.

## Portable

Let’s assume you’ve written a Python code for your Windows machine. Now, if you want to run it on a Mac, you don’t
need to make changes to it for the same. In other words, you can take one code and run it on any machine, there is
no need to write different code for different machines. This makes Python a portable language. However, you must
avoid any system-dependent features in this case.

## Large Standard Library

Python has a large standard library which provides rich set of modules and functions so you do not have to write
your own code for every single thing. There are many libraries present in Python for such as regular expressions,
unit-testing, web browsers etc. By making use of these built-in libraries, development will become faster.
Also, using the third party libraries in Python application is also easy.

## GUI Programming support

A software is not user-friendly until its GUI is made. A user can easily interact with the software with a GUI.
Python offers various libraries for making Graphical user interface for your applications. For this, you can use
Tkinter, wxPython or JPython. These toolkits allow you for easy and fast development of GUI.
