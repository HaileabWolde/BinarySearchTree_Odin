import Tree from "./Tree.js";
const arr = [1, 2, 3, 4];
const modArr = [...new Set(arr)].sort();
const tree = new Tree(modArr);
tree.insert(5);
tree.delete(3);

console.log(tree.find(3));
