import Tree from "./Tree.js";
const arr = [1, 2, 3, 4, 5];
const modArr = [...new Set(arr)].sort();
const tree = new Tree(modArr);
console.log(tree.isBalanced());
/*console.log(tree.depth(4));*/
/*tree.height(3);*/
/*tree.levelOrderEach((node)=> console.log(node.data));*/
/*tree.preOrderEach((node)=> console.log(node.data));*/
/*tree.inOrderEach((node)=> console.log(node.data));*/
/*tree.postOrderEach((node)=> console.log(node.data));*/