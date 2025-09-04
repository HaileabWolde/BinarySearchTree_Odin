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
            if(prev.left === current){ // If the current node is on the left side 

                prev.left = current.right;
            } else {                    // If the current node i son the right side
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
    levelOrderEach(callback){
        if(!this.root){
            return null;
        }
        if(callback.typeof != 'function'){
            console.log("please provide callback function");
        }
        let queue = [this.root];// put the whole tree on the quee
        while(queue.length > 0){ // while the queue exist 
            let current = queue.shift(); // take one from the queue or array
            callback(current); // display the node data
           if(current.left) queue.push(current.left); //push left node 
           if(current.right) queue.push(current.right); // push the right node
        }
    }
    preOrderEach_Rec(callback, Node){
        let current = Node;
        if(current === null) return;
        callback(current);
        current.left = this.preOrderEach_Rec(callback, current.left);
        current.right = this.preOrderEach_Rec(callback, current.right);
    }
    preOrderEach(callback) {// display on the base of root, left, right
        if(!this.root){
            return null;
        }
        this.preOrderEach_Rec(callback, this.root)
    }
    inOrderEach_rec(callback, Node){// display on the base of left, root, right
        let current = Node;
        if(current === null) return;
        this.inOrderEach_rec(callback, Node.left)
        callback(current)
        this.inOrderEach_rec(callback, Node.right);
    }
    inOrderEach(callback){
        if(!this.root){
            return null;

        }
        this.inOrderEach_rec(callback, this.root)
    }
    postOrderEach_rec(callback, Node){
        let current = Node;
         if(current === null) return;
        this.postOrderEach_rec(callback, Node.left)
        this.postOrderEach_rec(callback, Node.right)
         callback(current)
    }
    postOrderEach(callback){
        if(!this.root){
            return null;

        }
        this.postOrderEach_rec(callback, this.root)
    }
    height(value) {
    let node = this.find(value);
    if (node === null) {
        return null;
    }
    return this.heightRec(node);
}

heightRec(node) {
    if (node === null) {
        return -1;
    }
    let leftHeight = this.heightRec(node.left);
    let rightHeight = this.heightRec(node.right);
   
    return Math.max(leftHeight, rightHeight) + 1;
}
depth(value){
    let depth = 0;
    let node = this.find(value);
    if(!node){
        return null;
    }
    let current = this.root;
    if(current.data === value){
        return 0;
    }
    while(current != null){
        if(current.data === value){
            return depth;
        }
        else if(value < current.data){
            current = current.left
        }
        else{
            current = current.right
        }
        depth++;
    }
}
 isBalanced(root = this.root) {
      if(root === null) return true;

      let diff = Math.abs(this.height(root.left) - this.height(root.right));

      if(diff > 1) return false;

      return this.isBalanced(root.left) && this.isBalanced(root.right);
    }
}
export default Tree;