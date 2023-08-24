class TreeNode{
    constructor(value){
        this.value = value;
        this.left = null ;
        this.right = null;
    }

}


function BinaryTree(arr , start= 0, end){

    arr = [...new Set(arr)].sort((a,b) => a-b);

    if (start>end) return null;

    let mid = Math.floor((start + end)/2);

    let root = new TreeNode(arr[mid]);

    root.left = BinaryTree(arr , start , mid-1);
    root.right = BinaryTree(arr , mid+1 , end);

    return root; 
}

const sortedArray = [1,2,3,4,5,6,7];
const root = BinaryTree (sortedArray , 0 ,sortedArray.length -1 );