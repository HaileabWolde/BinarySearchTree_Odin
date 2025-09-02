import Tree from "./Tree.js";
const arr = [1, 2, 3, 4];
const modArr = [...new Set(arr)].sort();
const tree = new Tree(modArr);
tree.insert(5);
tree.insert(3);
tree.levelOrderEach((node)=> console.log(node.data));
