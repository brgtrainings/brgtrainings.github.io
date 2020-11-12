---
layout: syllabus_page
course: python
title: Data Types
date: 4th May, 2020 02:00:00
parent: /python/section-two/
tags:
 - datatypes
 - list
 - string
 - boolean
 - tuple
 - set
 - dictionary
description: Data Types in Python language
permalink: /python/section-two/datatypes/
prev_link: /python/section-two/
next_link: /python/section-two/variables-constants/
comments: true
---

# Data Types in Python

{% include util/highlight.html
    text="Data types represents different types of data like text, string, numbers etc.
          It also represents a kind of value which determines what operations can be performed on that data."
%}

Python has several data types and since almost everything is an object in Python,
data types are actually classes and variables are instance (object) of these classes.

Python has the following standard or built-in data types:

## Numeric

A numeric datatype represents data with numeric value.

Python identifies three types of numbers:

- `Integer`: Positive or negative numbers (without fraction)
- `Float`: Any real number with a floating point representation
- `Complex number`: A number with a real and imaginary component represented as `x + yj`.

```shell
>>> print(10)
10
>>> print(10.5)
10.5
>>> print(10 + 5j)
(10+5j)
>>> type(10)
<class 'int'>
>>> type(10.5)
<class 'float'>
>>> type(10+5j)
<class 'complex'>
```

__NOTE:__ `type()` function is used to know the class of a variable.

{% include util/note.html
    note="In Python 3, there is effectively no limit on long an integer value can be. However, it is constrained by the amount of memory a system has but beyond that an integer can be as long as you need it to be."
%}

#### Basic Operations

We can perform many basic operations with numbers like addition, subtraction, multiplication, division etc.

```shell
>>> 10 + 5
15
>>> 10 - 5
5
>>> 10 * 5
50
>>> 10 / 5
2.0
>>> int(10 / 5)
2
```

__NOTE__: Python by default gives floating point result on division. You need to convert explicitly into
integer if you want integer division value.

## Boolean

Data that represents values `True` or `False` are Boolean datatype. Notice that in Python, capital `T` and `F`
are used instead of common small caps `true` or `false` as in other programming language and Python will
throw an error for it.

## Sequence Type

A sequence is an ordered collection of similar or different data types.
Python has the following built-in sequence data types:

### String

  A string value is a collection of one or more characters put in single, double or triple quotes.

  ```shell
  >>> print("Hello Python")
  Hello Python
  >>> print('Hello Python')
  Hello Python
  >>> print("""Hello Python""")
  Hello Python
  >>> print("""
  ... This is a multi-line string
  ... and I can add as many lines.
  ... It is perfect for writing
  ... documentation in the file.
  ... """)

  This is a multi-line string
  and I can add as many lines.
  It is perfect for writing
  documentation in the file.

  ```

### List

  A list object is an __*ordered*__ collection of one or more data items, not necessarily of the same type,
  put in square brackets. The list is mutable object in Python as we can change its value.

  ```shell
  >>> languages = ['C', 'C++', 'Python', 'Ruby']
  >>> print(languages)
  ['C', 'C++', 'Python', 'Ruby']
  >>> datatypes = [10, 10.5, 'String', True, [1, 2, 3]]
  >>> print(datatypes)
  [10, 10.5, 'String', True, [1, 2, 3]]

  # changing value in languages list
  >>> languages[0]
  'C'
  >>> languages[0] = 'Java'
  >>> print(languages)
  ['Java', 'C++', 'Python', 'Ruby']
  ```

### Tuple

  A Tuple object is an __*ordered*__ collection of one or more data items, not necessarily of the same
  type, put in parentheses. The tuple is immutable object in Python since we can not change its value once defined.

  ```shell
  >>> languages = ('C', 'C++', 'Python', 'Ruby')
  >>> print(languages)
  ('C', 'C++', 'Python', 'Ruby')

  # changing value in languages tuple
  >>> languages[0]
  'C'
  >>> languages[0] = 'Java'
  Traceback (most recent call last):
    File "<stdin>", line 1, in <module>
  TypeError: 'tuple' object does not support item assignment
  ```

### Set

  A set is an __*unordered*__ collection of objects in Python. Every element in set is unique (no duplicates) and
  immutable (cannot be changed). However, a set itself is mutable i.e we can add or remove items to or from it.

  The Python set is implemented as similar to the set in Mathematics.
  A set object has suitable methods to perform mathematical set operations like union, intersection, difference, etc.

  A set object contains one or more items, not necessarily of the same type, which are separated by comma and
  enclosed in curly brackets `{...}`.

  ```shell
  >>> set = { 'C', 1972, 'Bell Labs', 'Dennis Ritchie' }
  >>> set
  {'Dennis Ritchie', 1972, 'C', 'Bell Labs'} # order of items changed

  >>> numbers = { 1, 5, 2, 5, 3, 5, 4, 5 }
  >>> numbers
  {1, 2, 3, 4, 5} # no duplicates

  >>> numbers.add('100')
  >>> numbers
  {1, 2, 3, 4, 5, '100'}
  >>> numbers.clear()
  >>> numbers
  set()
  ```

## Dictionary

A dictionary object is an __*unordered*__ collection of data.
In Python, dictionaries are defined within braces `{...}` with each item being a pair in the form `key:value`.
Key and value can be of any type.

For example: `{ 1: "C", 2: "C++", 3: "Ruby", 4: "Python", 5: "Java" }`

It is generally used when we have a huge amount of data. Dictionaries are optimized for retrieving data.
We need to know the key to retrieve any value from dictionary.

```shell
>>> langs = { 1: 'C', 2: 'C++', 3: 'Python', 4: 'Ruby', 5: 'Java' }
>>> langs
{1: 'C', 2: 'C++', 3: 'Python', 4: 'Ruby', 5: 'Java'}
>>> type(langs)
<class 'dict'>
>>> print("2nd Language I know is", langs[2])
2nd Language I know is C++
>>> print("6th Language I know is", langs[6])
# Error KeyError: 6
```

{% include util/note.html
    note="We will see every datatype in detail in later sections."
    type="important"
%}
