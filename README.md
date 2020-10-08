# FlashCards Solo Project

## Project Description

In this project, I wrote a program to simulate a set of flashcards that can be reviewed on the command line. When a user runs the program, they will see a question along with a few multiple choice options. Once they answer the question, they will be given immediate feedback if that question is correct or incorrect. At the end of the round, the user can see their overall percentage correct! 

- [Project Brief and Rubric](https://frontend.turing.io/projects/flash-cards.html)

## Learning Goals

Complete 3 iterations that build the flashcard game by:

- Building out functionality to a partially constructed object-oriented application
- Creating a robust testing suite using TDD
- Writing modular, resuable code that follows SRP and implements ES6 classes
- Creating multiple class files that work together to run the application
- Utilizing `eslint` to ensure consistency in code 

## Functionality

- Display Welcome Message and first flashcard (the flashcard includes the question and 3 possible answers) on the command line when the game is started
- User pick their answer and press 'enter' to confirm their answer
- The game provides feedback once an answer is submitted indicating if the answer is correct or incorrect
- Once all the questions are answered a message is displayed indicating the percentage of answers the user got correct

![gif of website functionality]()

## Programming Languages Used

- JavaScript

## Planning

Utilized a project board that can be found [HERE](https://github.com/alyssabull/flashcards-starter/projects/1).

### Challenges

- Writing tests
  - Creating separate data for use in test files
  - Ensuring tests include multiple sad paths
  - Inclusion of `beforeEach()` to DRY up code

### Wins

- Writing multiple class files that work together to run the application
- Creating and updating a github project board throughout each iteration
- Refactoring tests and code consistently during and after each iteration
- Using `eslint` to write consistent, clean code

## Set Up Instructions

1. Fork [this repository](https://github.com/alyssabull/flashcards-starter) and clone it down to your local machine.
2. Move into that directory: `cd flashcards-starter`.
3. Run `node index.js` to run the app!

## Contributors

* [Alyssa Bull](https://github.com/alyssabull)

* [Will Mitchell](https://github.com/wvmitchell) - Instructor/Project Manager
* [Bob Gu](http://github.com/bobgu) - Instructor/Project Manager
