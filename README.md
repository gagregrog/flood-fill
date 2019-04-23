# Flood Fill

## Getting Started

After cloning the repository, change into the directory and install the dependencies with `npm install`.

Once the dependencies have been installed, start the project with `npm start`.

Open [http://localhost:3000](http://localhost:3000) to view the page in the browser.

The page will reload if you make edits.

You will also see any lint errors in the console.

## The Problem

Upon running the project and navigating to the url above, you will see a colorful grid of rectangles.

Currently nothing happens when you click on a rectangle, however we would like to add interactivity.

When you click on a rectangle, we want it and any adjacent rectangles that are the same color to turn black, as shown below.

![Flood Fill](./demo.gif)

## Your Task

Your task is to implement the _Flood_ _Fill_ algorithm that will color the rectangles.

Open up the file `src/lib/solution.js` and write your solution as the _default_ _export_.

Your function should follow the signature provided in `solution.js`, which is `(board, clickedItem) => updatedBoard`.

You can expect `board` to be a 2-D array of items. 

Each item is an object with a `color` property, as well as `x`, and `y` properties denoting their position.

For example, a 2x3 grid might look like this:

```
const board = [
  [ { color: '#baddad', x: 0, y: 0 }, { color: '#ff7721', x: 1, y: 0 }, { color: '#adaaaa', x: 2, y: 0 } ],
  [ { color: '#adaaaa', x: 0, y: 1 }, { color: '#ff7721', x: 1, y: 1 }, { color: '#ff7721', x: 2, y: 1 } ],
]
```

The array you return should be of the same dimensions as the `board` you receive, and each item should contain the same properties as the original item, with an updated `color`.

If an item is part of the flood fill, you should return `null` for its `color`.
