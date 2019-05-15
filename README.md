# Flood Fill

## The Problem

Upon running the project, you will see a colorful grid of rectangles.

Currently, nothing happens when you click on a rectangle, but we would like to include interactivity.

When you click on a rectangle, we want it and any adjacent rectangles of the same color to turn black, as shown below:

![Flood Fill](./demo.gif)

## Requirements

- nodeJS
  - If you do not have node installed, you will need to install it.
    - [Quick and dirty with homebrew](https://www.dyclassroom.com/howto-mac/how-to-install-nodejs-and-npm-on-mac-using-homebrew)
    - [Properly with NVM](https://github.com/nvm-sh/nvm#git-install)

## *Optional* *Requirements* ¯\\_(ツ)_/¯

- python3
  - If you want to write your solution in python, you may need to install it.
    - [Quick and dirty with homebrew](https://programwithus.com/learn-to-code/install-python3-mac/)
    - [Properly with pyenv](https://github.com/pyenv/pyenv#installation)

- python virtual environment
  - If you're developing in python with external libraries, you should be using a virtual environment.
    - [virtualenv && virtualenvwrapper](https://docs.python-guide.org/dev/virtualenvs/#virtualenvwrapper)

## Getting Started

Ensure your computer meets the technical requirements above, then clone this repository.

After cloning the repository, change into the directory and install the dependencies with `npm install`.

Once the dependencies have been installed, you can start the project.

  - If you will be providing your algorithm solution in JavaScript, run `npm start`.

  - If you will be providing your algorithm solution in python, run `npm run start-py`.

  - If you will be solving the react portion only, run `npm run start-alg`. This will start the project with the algorithm already implemented.

Open [http://localhost:3000](http://localhost:3000) to view the page in the browser.

The page will reload as you make edits to the JavaScript files.

You will see any linting errors in the browser console.

#### Python Setup

If you will be providing your solution in python, you will also need to install the python dependencies.

From a new terminal tab, ensure you have activated your virtual environment, then run `npm run setup-py`.

Once the dependencies have been installed, run `npm run start-api`.

## Algorithm Challenge

To complete this task, implement the _Flood_ _Fill_ algorithm that will color the rectangles.

If your solution will be written in JavaScript, open up `src/lib/solution.js` and implement your solution inside the _default_ _export_.

If your solution will be written in python, open up `python/solution.py` and implement your solution inside the named function.

Your function should follow the signature provided, which is `(board, clickedItem) => updatedBoard`.

You can expect `board` to be a 2-D array of items. 

Each item is an object with a `color` property, as well as `x`, and `y` properties denoting their position in the 2-D array.

For example, a 2x3 grid might look like this:

```
board = [
  [ { 'color': '#baddad', 'x': 0, 'y': 0 }, { 'color': '#ff7721', 'x': 1, 'y': 0 }, { 'color': '#adaaaa', 'x': 2, 'y': 0 } ],
  [ { 'color': '#adaaaa', 'x': 0, 'y': 1 }, { 'color': '#ff7721', 'x': 1, 'y': 1 }, { 'color': '#ff7721', 'x': 2, 'y': 1 } ],
]
```

The `updatedBoard` you return should be of the same dimensions as the `board` you receive, and each item should contain the same properties as the original item, with an updated `color` property.

If an item is part of the flood fill, you should return `null`/`None` for its `color` to indicate that it has been filled.

The `clickedItem` that is passed to the function will be of the same *shape* as the other items on the board, but will include the color and coordinates of the clicked item.

You may use any resources at your disposal, and should feel free to ask questions.

You are encouraged to explain your thinking as you work through a solution.

## Frontend Challenge

Your task is to implement a custom header as follows:

![Header](./flood-header.gif)

Head to the folder `src/components/solution`, where you will find a few files.

You will have two main components to implement: `Score.js` and `Timer.js`, and one optional component, `Header.js`.

You should feel free to architect and style your components however you see fit, and may use any resources at your disposal.

### Task 1: Implement a Scorecard

Open up `src/components/solution/Score.js` and implement a Scorecard component.

The scorecard should keep track of the highest number of rectangles filled with a single click.

When a rectangle is clicked, the number of rectangles filled will be automatically calculated. 

Its value can be *consumed* from the `BoardContext` which is a named export from `src/context/BoardContext.js`. 

The context provides an object with key `lastFill` which will be the number filled on the previous click.

The provided object will also contain the key `numLeft` indicating the number of rectangles remaining. This should also be displayed.

### Task 2: Implement a Timer

Open up `src/components/solution/Timer.js` and implement a Timer component.

Your component should start timing when the page loads, and continue timing until the board has been completely filled.

It should display the elapsed time in minutes:seconds:milliseconds.

### Task 3: Put it all Together (Optional)

By default, your components will be rendered to the header automatically.

If you would like more control over the rendering, you can implement your own custom header by importing your components into `src/components/solution/Header.js`.

