//🌳 1. Check if a Binary Tree is Complete

class Node{
    constructor(val){
        this.val=val
        this.left=null
        this.right=null
    }
}

function isComplete(root){
    let queue=[root]
    let seenNull=false

    while(queue.length){
        let node=queue.shift()

        if(!node){
            seenNull=true
        }else{
            if(seenNull)return false

            queue.push(node.left)
            queue.push(node.right)
        }
    }

    return true
}

let root=new Node(1)
root.left=new Node(2)
root.right=new Node(3)

console.log(isComplete(root))



//🌳 2. Min Heap Check
function isMinHeap(arr){
    let n=arr.length

    for(let i=0;i<=Math.floor(n/2)-1;i++){
        let left=2*i+1
        let right=2*i+2

        if(left<n && arr[i]>arr[left]) return false
        if(right<n && arr[i]>arr[right]) return false
    }

    return true
}

console.log(isMinHeap([10,20,30,40]))




//🌳 3. Max Heap Check
function isMaxHeap(arr){
    let n=arr.length

    for(let i=0;i<=Math.floor(n/2)-1;i++){
        let left=2*i+1
        let right=2*i+2

        if(left < n && arr[i]<arr[left]) return false
        if(right < n && arr[i]<arr[right]) return false
    }

    return true
}

console.log(isMaxHeap([50,30,20,10]))





//🌳 4. Convert Heap Tree → Array
function heapToArray(root){
    let res=[]
    let queue=[root]

    while(queue.length){
        let node=queue.shift()
        res.push(node.val)

        if(node.left) queue.push(node.left)
        if(node.right) queue.push(node.right)
    }

    return res
}



//🌳 5. Convert Array → Heap Tree
function buildTree(arr,i=0){
    if(i>=arr.length) return null

    let node={val:arr[i],left:null,right:null}

    node.left=buildTree(arr,2*i+1)
    node.right=buildTree(arr,2*i+2)

    return node
}
console.log(buildTree([10,20,30,40,50]))




//🌳 6. Get Parent / Children (Core Question)

function relations(arr,i){
    return {
        value:arr[i],
        parent:arr[Math.floor((i-1)/2)],
        left:arr[2*i+1],
        right:arr[2*i+2]
    }
}

console.log(relations([10,20,30,40,50],1))