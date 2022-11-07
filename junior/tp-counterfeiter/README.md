# The counterfeiter

This toy problem is designed to train your HTML and CSS skills! Use the website you received, and make a copy of their home page, as accurate as you can.

You need to make your own layout, and obviously can’t copy the HTML or CSS structure from the original website, but you can use the Chrome Developer Tools to inspect the page and look up properties where needed.

You know you’re doing well when people have a hard time figuring out which one is the original!

Don’t send a pull request. Before the allocated time is over, simply send a screenshot of your final result in a private message to the instructor.

## Getting started

To install the required dependencies run `npm i`.

Use the `/public` folder to save all your public assets:

- `index.html` - Includes your HTML structure, and the imports for any other required resources (e.g. scripts and CSS).
- `style.css` - This is where your CSS rules go.
- `/images` - Is the folder for any image files.

Once you’re all set, run the `gulp` command from the project folder: this will open the browser on `index.html`, and automagically reload the page any time you modify HTML, CSS, JS, or image files (if you want to disable automatic syncing, you can do it from the control panel at `http://localhost:3001/sync-options`).

Consider you might receive this exercise more than once throughout the program, so before starting to code create a separate [Git branch](https://www.atlassian.com/git/tutorials/using-branches) for your current website.

Feel free to use a CSS framework and save it as a dependency with `npm`, or import it through a CDN.

Make sure to make small, incremental, and descriptive commits along the way. Before committing check your syntax with `gulp lint`.

## Extra credits

Use a CSS pre-processor and take advantage of the useful features it offers, like variables, modularity, auto-prefixing, etc.
