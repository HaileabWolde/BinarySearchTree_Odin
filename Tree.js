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
    deleteRec(node, value){
        // Implement delete logic here
        // This is a placeholder for the delete method
        let current = node;
        let prev = null;
        while(current !== null && current.data !== value){
            prev = current;
            if(value < current.data){
                current = current.left;
            } else {
                current = current.right;
            }
        }
        if(current === null){
            return node; // Value not found
        }
        // Node with only one child or no child
        if(current.left === null){
            if(prev === null){
                return current.right; // Deleting root node
            }
            if(prev.left === current){
                prev.left = current.right;
            } else {
                prev.right = current.right;
            }
        } else if(current.right === null){
            if(prev === null){
                return current.left; // Deleting root node
            }
            if(prev.left === current){
                prev.left = current.left;
            } else {
                prev.right = current.left;
            }
        } else{
            // Node with two children: Get the inorder successor (smallest in the right subtree)
            let successorParent = current;
            let successor = current.right;
            while(successor.left !== null){
                successorParent = successor;
                successor = successor.left;
            }
            // Copy the inorder successor's value to this node
            current.data = successor.data;
            // Delete the inorder successor
            if(successorParent !== current){
                successorParent.left = successor.right;
            } else {
                successorParent.right = successor.right;
            }
        }
        return node;
    }
    insert(value){
        this.root = this.insertRec(this.root, value);
    }
    delete(value){
        // Implement delete logic here
        // This is a placeholder for the delete method
        this.root = this.deleteRec(this.root, value);
    }
    find(value){
        let current = this.root;
        while(current !== null){
            if(value === current.data){
                return current;
            } else if(value < current.data){
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return null; // Value not found
    }
   
}
export default Tree;