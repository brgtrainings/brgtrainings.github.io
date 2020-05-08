---
layout: devtool
title: GitHub
page_name: devtools
permalink: /devtools/github/
---

# GitHub

Git is an __open source distributed version control system__ created in 2005 by Linus Torvalds and others from the Linux
development community. Git can work with many types of projects, but it’s most commonly used for software source code.

This page will help you to get start with Git and guide you to use in your project.

{% include util/note.html
    note="The content in this page is very basic. It only give you an idea of what Git is and how one can use it in project."
%}

### Version Control

Version control is a system that keeps track of changes to a file or group of files over time. When you have a history
of these changes, it lets you find specific versions later, compare changes between versions, recover files you may have
deleted, or revert files to previous versions.

It helps developer to find out:

- Which changes were made?
- Who made the changes?
- When were the changes made?
- Why were changes needed?

### Distributed Version Control

A distributed system means that different users maintain their own repositories of a project, instead of working
from one central repository. Users automatically have full file tracking abilities and the project’s complete
version history without needing access to a central server or network.

## Install Git

Every operating system has its own way of installing softwares. The recommended way is to install via system's package
manager.

### Install Git on Linux

Following is the way to install Git on Ubuntu 18:

```shell
sudo apt-get install git
```

Check the instructions to install Git on other Linux version [here](https://git-scm.com/download/linux){:target="_blank"}.

### Install Git on Windows

The easiest way to install Git in Windows is through its official download page. Click [here](https://git-scm.com/download/win){:target="_blank"} to start downloading Git installer binary. Post download, run the binary to install it.

### Installing on macOS

The recommended way to install Git on macOS is through its popular package manager `homebrew`:

```shell
$ brew install git
```

