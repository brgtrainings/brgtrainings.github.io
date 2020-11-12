---
layout: syllabus_page
course: python
title: Getting Started
date: 29th April, 2020 1:00:00
parent: /python/section-one/
tags:
  - installation
  - python
description: Getting started with Python
permalink: /python/section-one/getting-started/
next_link: /python/section-one/intro
credits:
  - "Python 3 Installation & Setup Guide, https://realpython.com/installing-python/"
comments: true
---

# Getting Started

To get Python into your system, you need to first install it and there are several ways and/or tools to do it. This
page describes how to install Python in Linux, macOS or Windows. There are many ways to install Python in each
operating systems. I have listed following ways which I would recommend.

{% include util/note.html
    note="All examples are tested in Python 3.7.7."
%}

## Install Python in Linux

In most of the cases, Python will come installed in your Linux operating system. However, it might be possible that
it won't be the latest version(`Python 3`). You can check the version of the Python installed in your system
by running following command in your `terminal`:

```shell
python --version
# output: Python 2.7.16
python2 --version
# output: Python 2.7.16
python3 --version
# output: Python 3.7.7
```

The version with format Python `2.x.x` is old while the format Python `3.x.x` is latest.

{% include util/note.html
    note="It is always recommended to use the latest version of Python."
%}

Every Linux version of Operating systems has their own package manager and installing Python is also different.
Like in Ubuntu you have `apt`(Advanced Package Tool) package manager, `yum`(Yellowdog Updater Modified) in CentOS
or Red Hat Linux etc.

Following is how you can install Python in Ubuntu, one of popular Linux desktop environment.

```shell
sudo apt-get update
sudo apt-get install python3.7
```

{% include util/note.html
    note="Ubuntu 17.10, Ubuntu 18.04 (and above) come with Python 3.6 by default."
%}

You should be able to start Python with the command `python3` which start the
Python interactive shell:

```shell
python3
Python 3.7.7 (default, Mar 10 2020, 15:43:33)
[Clang 11.0.0 (clang-1100.0.33.17)] on darwin
Type "help", "copyright", "credits" or "license" for more information.
>>>
```

You can type `exit()` and press Enter to get out of Python shell.

Consider Linux section from [`Python 3 Installation & Setup Guide`](https://realpython.com/installing-python/#linux){:target="_blank"} for more details.

## Install Python in Windows

The easiest way to install Python in Windows is through Python installer. For this, visit the
[python.org website download page.](https://www.python.org/downloads/windows/){:target="_blank"} and download
the `Windows x86 executable installer` and run it.

{% include util/note.html
    note="Python 3.7.7 cannot be used on Windows XP or earlier."
%}

Consider Windows section from [`Python 3 Installation & Setup Guide`](https://realpython.com/installing-python/#windows){:target="_blank"} for more details.

## Install Python in macOS

The recommended way to install Python in macOS is through [`Homebrew package manager`](https://brew.sh/){:target="_blank"}.

Install the Python through homebrew by running following command:

```shell
brew install python3
```

__NOTE:__ If your system doesn't have "homebrew" installed, visit its official website [https://brew.sh/](https://brew.sh/){:target="_blank"} and install it.
