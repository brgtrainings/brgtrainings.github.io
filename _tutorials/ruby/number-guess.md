---
layout: tutorial
tutorial: true
title: Number Guessing game in Ruby
date: 20th August, 2020 02:00:00
tags:
 - ruby
 - beginner
 - game
description: Number Guessing game in Ruby
permalink: /tutorials/number-guess-ruby/
comments: true
---

## Overview

In this tutorial, we are building a simple number guessing game where computer will choose any random
number between 1 to 100.

Then, we need to ask user to guess the correct number. Maximum allowed guessing is 10.

If the user failed to enter the correct number then display the hints as following:

- _"Your guess was low, enter a higher number."_ when guessed number is less than correct number.
- _"Your guess was high, enter a lower number."_ when guessed number is greater than correct number.

## Demo

```bash
$ ruby number_guess.rb
Hey, may I know your first name? brg

Guess a number from 1 to 100: 50
Brg, your guess was high, enter a lower number. You have 9 guesses left.

Guess a number from 1 to 100: 30
Brg, your guess was low, enter a higher number. You have 8 guesses left.

Guess a number from 1 to 100: 40
Brg, your guess was high, enter a lower number. You have 7 guesses left.

Guess a number from 1 to 100: 35
Brg, your guess was high, enter a lower number. You have 6 guesses left.

Guess a number from 1 to 100: 31
Good job, Brg! You guessed the number in 5 tries.
```

## Prerequisites

- Enthusiasm and passion to Learn
- Basic knowledge of Ruby language
  - Variables
  - Loop
  - Conditional Operators
  - Getting input from User

## Steps to build the game

Follow the steps below to build the `Number Guessing` game in Ruby.

- Before even asking user, let's generate a random number `random_num`.

  ```ruby
  random_num = rand(100)
  ```

- Let's create a variable to track number of guess a user can make.

  ```ruby
  num_of_guesses = 0
  ```

- Let's ask user his or her name.

  ```ruby
  print("Hey, may I know your first name? ")
  # puts will add new line so print should be used
  name = gets.chomp          # remove the extra new line character
  name = name.capitalize()   # make the first letter capital
  ```

- Until the number of guess is less than maximum allowed guess i.e `10`, repeat guessing number,
  compare it with actual number and print the hint accordingly. If you found guess number is equal
  to actual number then break out of loop.

  ```ruby
  while num_of_guesses < 10
    print("\nGuess a number from 1 to 100: ")
    guess_num = gets.to_i
    # gets return as string datatype, hence we need to convert to integer

    num_of_guesses = num_of_guesses + 1
    # you can write above as num_of_guesses += 1
    guesses_left = (10 - num_of_guesses)

    if guess_num < random_num
      puts("#{name}, your guess was low, enter a higher number. You have #{guesses_left} guesses left.")
    elsif guess_num > random_num
      puts("#{name}, your guess was high, enter a lower number. You have #{guesses_left} guesses left.")
    end

    break if guess_num == random_num
  end
  ```

- Now, print the final message and number of guess taken.

  ```ruby
  if guess_num == random_num
    puts("Good job, #{name}! You guessed the number in #{num_of_guesses} tries.")
  else
    puts("#{name}, you failed to guess correctly. Actual number is #{random_num}.")
  end
  ```
