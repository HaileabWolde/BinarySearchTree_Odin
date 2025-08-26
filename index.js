import Tree from "./Tree.js";
const arr = [1, 2, 3, 4, 5, 6, 7, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const modfarr = [...new Set(arr)].sort();
console.log(modfarr);
const tree = new Tree(arr);
