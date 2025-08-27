import Node from "./Node.js";
import buildarray from "./buildarray.js";
class Tree{
    constructor(arr){
       this.root = buildarray(arr);
    }
     insertRec(node, value){
       // If tree is empty or we've reached a null node, create new node
        if (node === null) {
            return new Node(value);
        }

        // Recurse left or right based on value
        if (value < node.data) {
            node.left = this.insertRec(node.left, value);
        } else if (value > node.data) {
            node.right = this.insertRec(node.right, value);
        }
        // If value equals node.value, skip (no duplicates) or handle as needed
        return node;
    }
    insert(value){
        this.root = this.insertRec(this.root, value);
    }
   
}
export default Tree;