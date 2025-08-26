import Node from "./Node.js";
const sortedarray = (arr, start, end) => {
    if (start > end) {
        return null;
    }
    const mid = Math.floor((start + end) / 2);
    const node = new Node(arr[mid]);
    node.left = sortedarray(arr, start, mid - 1);
    node.right = sortedarray(arr, mid + 1, end);
    return node;
}
export default sortedarray;