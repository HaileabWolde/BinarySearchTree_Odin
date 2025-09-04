🌳 My Binary Search Tree (BST) README
What’s a Binary Search Tree? 🤔
Picture a Binary Search Tree (BST) as a super cool way to organize your data into a tree of nodes. Each node has two sides:

Left side: Holds values smaller than the node.
Right side: Holds values bigger than the node.

It’s like a treasure map where every step narrows down your search, making it fast to find, add, or remove stuff!
What’s a Balanced BST? ⚖️
A Balanced Binary Search Tree is a BST that stays chill and even. The left and right sides of any node are almost the same height (differing by no more than 1). This balance keeps the tree nice and short, so operations stay speedy.
How Do We Build a Balanced BST? 🛠️
Let’s talk about the buildTree(array) function—the secret sauce to creating a balanced BST! You’ll need a sorted array to start, and we’ll use recursion to make it happen.
The Plan

Start with a sorted array: This ensures our tree follows the BST rule (left < parent < right).
Find the middle: The middle element becomes the root of the tree or subtree, keeping things balanced.
Divide and conquer:

Left side: Recursively build a subtree from the start of the array to just before the middle.
Right side: Recursively build a subtree from just after the middle to the end.


Keep going: Repeat until every piece of the array is a node in the tree.