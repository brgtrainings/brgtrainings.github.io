---
layout: syllabus_page
title: Introduction
date: 30th April, 2020 02:00:00
course: python
parent: /python/section-one/
tags:
 - zenofpython
 - guido
description: Introduction of Python Language
permalink: /python/section-one/intro/
prev_link: /python/section-one/getting-started
next_link: /python/section-one/history
comments: true
---

# Introduction

{% include util/quote-with-pic.html
    quote="Python is an experiment in how much freedom programmers need. Too much freedom and nobody can read another's code; too little and expressiveness is endangered."
    quote_by="Guido van Rossum"
    pic="profiles/python.png"
%}

Python is an interpreted, high-level, general-purpose programming language. Created by Guido van Rossum and first released in 1991, Python's design philosophy emphasizes code readability with its notable use of significant whitespace. Its language constructs and object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects.

Python is dynamically typed and garbage-collected. It supports multiple programming paradigms, including structured (particularly, procedural), object-oriented, and functional programming. Python is often described as a "batteries included" language due to its comprehensive standard library.
[(source)](https://en.wikipedia.org/wiki/Python_%28programming_language%29){:target="_blank"}

Let’s understand above important keywords in brief.

### Interpreted

An interpreted language is a type of programming language for which most of its implementations execute
instructions directly and freely, without previously compiling a program into machine-language instructions. The
interpreter executes the program directly, translating each statement into a sequence of one or more subroutines,
and then into another language (often machine code).

### High Level

High-level language refers to the higher level of abstraction from machine language. Rather than dealing with
registers, memory addresses and call stacks, high-level languages deal with variables, arrays, objects, complex
arithmetic or boolean expressions, subroutines and functions, loops, threads, locks, and other abstract computer
science concepts, with a focus on usability over optimal program efficiency.

### General Purpose

Designed to be used for writing software in the widest variety of application domains. Conversely, a
domain-specific programming language is one designed to be used within a specific application domain.

### Dynamically Typed

Python is dynamically-typed language. That means the type (for example- int, double, long etc) for a variable is
decided at run time not in advance. Because of this feature we don’t need to specify the type of variable.

More brief detail can be found in {% include util/rel-link.html title="Feature's section." link="toc/section-one/features#dynamically-typed-language" %}

#### Garbage Collected

In computer science, garbage collection (GC) is a form of automatic memory management. The garbage collector, or
just collector, attempts to reclaim garbage, or memory occupied by objects that are no longer in use by the
program.

Standard CPython's garbage collector has two components, the reference counting collector and the generational garbage collector, known as gc module.

The reference counting algorithm is incredibly efficient and straightforward, but it cannot detect reference cycles. That is why Python has a supplemental algorithm called generational cyclic GC, that specifically deals with reference cycles.

The reference counting module is fundamental to Python and can't be disabled, whereas the cyclic GC is optional and can be invoked manually.

Read in detail about it in the [Artem's Python Garbage collector article.](https://rushter.com/blog/python-garbage-collector/){:target="_blank"}

## Philosophy of Python

The language's core philosophy is summarized in the document [`The Zen of Python (PEP 20)`](https://en.wikipedia.org/wiki/Zen_of_Python){:target="_blank"} which are as below:

- Beautiful is better than ugly.
- Explicit is better than implicit.
- Simple is better than complex.
- Complex is better than complicated.
- Flat is better than nested.
- Sparse is better than dense.
- Readability counts.
- Special cases aren't special enough to break the rules.
- Although practicality beats purity.
- Errors should never pass silently.
- Unless explicitly silenced.
- In the face of ambiguity, refuse the temptation to guess.
- There should be one—and preferably only one—obvious way to do it.
- Although that way may not be obvious at first unless you're Dutch.
- Now is better than never.
- Although never is often better than right now.
- If the implementation is hard to explain, it's a bad idea.
- If the implementation is easy to explain, it may be a good idea.
- Namespaces are one honking great idea — let's do more of those!

This list is also included in the [python.org.](https://www.python.org/dev/peps/pep-0020/){:target="_blank"}
