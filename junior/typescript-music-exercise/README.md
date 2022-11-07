# TypeScript music exercise

For these exercises you will explore some of the features of TypeScript. You’ll learn how to annotate functions, work with objects and make your code more safe.

## Getting started

Reading and interpreting the documentation for different technologies is a valuable skill that takes time to develop. At this stage of the course, you should resist the temptation to look at video tutorials online and use the [documentation](https://www.typescriptlang.org/docs/) to help you.

There are four exercise files inside the `/exercises` folder. Work through them in order, following the instructions in each file. Generally you will need to define types and write functions using those types.

Use the red squiggly lines in VSCode to help you fix all of the type errors while you are developing. The use of the `any` type is not allowed.

You will need to compile the TypeScript code in order to run it. Take a look at the `tsconfig.json` file. Notice the `include` and the `outDir` properties. This configuration will allow you to type `tsc` in the console and output the JavaScript exercise files in a directory called `build`.

Refer to the [compiler options](https://www.typescriptlang.org/docs/handbook/compiler-options.html) section of the documentation to figure out how to compile each file individually. Once a file is compiled, you can run it as you would run any other JavaScript file.

## Testing

To test your functions we have provided some test scripts. To test the first exercise you can run `npm run test:1`, for the second exercise `npm run test:2`, etc.

To run every test script just run `npm test` as normal.

Because the test files are also written in TypeScript, if there are any type errors then they will not run. This means if you have written the first function, but not the others, the whole test file will still fail. To get around this while you are still developing in the file, you can comment out the tests that you aren’t ready to run yet. Note: do not use `test.skip` or `test.only` as TypeScript will try to compile the skipped tests.

## Extra credits

- Build a basic server using Express, TypeScript and a database of your choice, that exposes at least the following endpoints:
  - `GET /bands`: returns an array of bands
  - `POST /band`: creates a new record in the database with a band
  - `GET /soloartists`: returns an array of solo artists
  - `POST /soloartist`: creates a new record in the database with a solo artist
- Take any of your previous projects where you worked with a server and refactor it to TypeScript
