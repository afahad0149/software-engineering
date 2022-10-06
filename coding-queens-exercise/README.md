# Coding queens

It’s about time for a serious algorithmic challenge! You’ll need to find an answer to the following question, without looking for any solution online:

*Given a chessboard of `n` size, in how many different ways can you place `n` queens such that none of them attack each other?*

Start analyzing a simpler version of the problem:

1. Given a chessboard of `n` size, how can you place `n` rooks such that none of them attack each other?
2. Given a chessboard of `n` size, in how many different ways can you place `n` rooks such that none of them attack each other?

Once you have figured these answers out, go back to the original question and complete the exercise. Finally write your algorithm’s space (i.e. memory) and time (i.e. computations) complexity in the comments.

## Notes

During your work as a software engineer there can be situations where you’re facing a complex problem which requires particular effort and time to be solved.

When this happens, at different points during such journey you‘re likely to feel frustrated, annoyed, uncapable, or hitting a wall.

You might also spend a long time entertaining a certain solution, only to discover that in the end it’s not viable.

When dealing with these challenges, most people can easily become pessimistic, feel overwhelmed, or simply decide to give up.

A good programmer instead is able to:

- Keep a positive, constructive, and collaborative mindset.
- Come up with new approaches, without becoming too attached to the ideas they were previously cultivating.
- Break down big problems into smaller, more mangeable ones.

This exercise is intentionally designed to challenge you in all these areas.

Make sure you have a conceptual solution in mind before starting to code. For this purpose, it’s very helpful to iterate ideas drawing things on paper or on a whiteboard.

Start by analyzing the simplest possible cases, and once you have a viable solution progressively increase the complexity to see if it keeps working or needs to be re-evaluated.

Then start to code, switching back and forth with your notes to review your assumptions.

## Getting started

To install the required dependencies run `npm install` .

Your algorithms are stored as separate files in the `scripts` folder.

## Extra credits

- Implement a solution that leverages [bitwise](https://en.wikipedia.org/wiki/Bitwise_operation) operations.
- Profile the memory usage and execution time of the bitwise version against the regular one.
- Write a function that generates a maze, and randomizes a start and end point within it. Then implement the [Dijkstra](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm) or [A*](https://en.wikipedia.org/wiki/A*_search_algorithm) algorithm to find the shortest path connecting the two points.
- Pick any challenges you find interesting on [Project Euler](https://projecteuler.net/). For each working solution you implement, indicate the algorithm’s space and time complexity.
