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




//🌳 1. Heap Insert (Heapify Up)


// class isMinHeap{
//     constructor(){
//         this.heap=[]
//     }

//     insert(val){
//         this.heap.push(val)
//         this.heapifyUp()
//     }

//     heapifyUp(){
//         let i=this.heap.length-1

//         while(i>0){
//             let parent=Math.floor((i-1)/2)

//             if(this.heap[parent]>this.heap[i]){
//                 [this.heap[parent],this.heap[i]]=[this.heap[i],this.heap[parent]]
//                 i=parent
//             }else break
//         }
//     }
// }

// let h=new isMinHeap()
// h.insert(30)
// h.insert(10)
// h.insert(20)

// console.log(h.heap)



//🌳 2. Delete Root (Extract Min)
// class MinHeap {
//   constructor(){
//     this.heap = []
//   }

//   insert(val){
//     this.heap.push(val)
//     this.heapifyUp()
//   }

//   heapifyUp(){
//     let i = this.heap.length - 1
//     while(i > 0){
//       let p = Math.floor((i-1)/2)
//       if(this.heap[p] > this.heap[i]){
//         [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]]
//         i = p
//       } else break
//     }
//   }

//   extractMin(){
//     if(this.heap.length === 0) return null
//     if(this.heap.length === 1) return this.heap.pop()

//     let min = this.heap[0]
//     this.heap[0] = this.heap.pop()

//     this.heapifyDown()

//     return min
//   }

//   heapifyDown(){
//     let i = 0
//     let n = this.heap.length

//     while(true){
//       let left = 2*i + 1
//       let right = 2*i + 2
//       let smallest = i

//       if(left < n && this.heap[left] < this.heap[smallest]){
//         smallest = left
//       }

//       if(right < n && this.heap[right] < this.heap[smallest]){
//         smallest = right
//       }

//       if(smallest !== i){
//         [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]]
//         i = smallest
//       } else break
//     }
//   }
// }


// let h = new MinHeap()
// h.insert(30)
// h.insert(10)
// h.insert(20)

// console.log(h.extractMin()) 
// console.log(h.heap) 




//🌳 Insert into Heap (Min Heap)
// class MinHeap{
//     constructor(){
//         this.heap=[]
//     }


// insert(val){
//     this.heap.push(val)

//     let i=this.heap.length-1

//     while(i>0){
//         let parent=Math.floor((i-1)/2)

//         if(this.heap[parent]>this.heap[i]){
//             [this.heap[parent],this.heap[i]] = [this.heap[i],this.heap[parent]]
//             i=parent
//         } else break
//     }
// }
// }

// let h=new MinHeap()
// h.insert(30)
// h.insert(10)
// h.insert(20)

// console.log(h.heap)
    




//1. Min Heap (Full Implementation)
class MinHeap {
  constructor() {
    this.heap = [];
  }

  parent(i) { return Math.floor((i - 1) / 2); }
  left(i) { return 2 * i + 1; }
  right(i) { return 2 * i + 2; }

  insert(val) {
    this.heap.push(val);
    this.heapifyUp();
  }

  heapifyUp() {
    let i = this.heap.length - 1;

    while (i > 0 && this.heap[i] < this.heap[this.parent(i)]) {
      [this.heap[i], this.heap[this.parent(i)]] =
        [this.heap[this.parent(i)], this.heap[i]];
      i = this.parent(i);
    }
  }

  extractMin() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    let root = this.heap[0];
    this.heap[0] = this.heap.pop();

    this.heapifyDown(0);
    return root;
  }

  heapifyDown(i) {
    let smallest = i;
    let left = this.left(i);
    let right = this.right(i);

    if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
      smallest = left;
    }

    if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
      smallest = right;
    }

    if (smallest !== i) {
      [this.heap[i], this.heap[smallest]] =
        [this.heap[smallest], this.heap[i]];
      this.heapifyDown(smallest);
    }
  }

  peek() {
    return this.heap[0] ?? null;
  }

  size() {
    return this.heap.length;
  }

  print() {
    console.log(this.heap);
  }
}

//  Test
let minH = new MinHeap();

minH.insert(10);
minH.insert(5);
minH.insert(20);
minH.insert(2);

minH.print(); 

console.log("Extract:", minH.extractMin()); // 2
minH.print(); 





//2. Max Heap (Interview Variation)
class MaxHeap{
    constructor(){
        this.heap=[]
    }

    parent(i) {return Math.floor((i-1)/2);}
    left(i) {return 2 * i + 1;}
    right(i) {return 2 * i + 2;}

    insert(val){
        this.heap.push(val)
        this.heapifyUp();
    }

    heapifyUp(){
        let i = this.heap.length-1;

        while(i>0 && this.heap[i]>this.heap[this.parent(i)]) {
            [this.heap[i],this.heap[this.parent(i)]] = 
            [this.heap[this.parent(i)],this.heap[i]];
            i=this.parent(i)
        }
    }

    extractMax(){
        if(this.heap.length===0) return null

        if(this.heap.length===1) return this.heap.pop()

            let root=this.heap[0]
            this.heap[0]=this.heap.pop()

            this.heapifyDown(0)

             return root;
    }

    heapifyDown(i){
        let largest=i
        let left=this.left(i)
        let right=this.right(i)

        if(left<this.heap.length && this.heap[left] > this.heap[largest]) {
            largest=left;
        }

        if(right < this.heap.length && this.heap[right] > this.heap[largest]) {
            largest=right;
        }

        if(largest !==i) {
            [this.heap[i],this.heap[largest]] = 
            [this.heap[largest],this.heap[i]];
            this.heapifyDown(largest);
        }
    }
}






//Heap Sort
function heapSort(arr) {
  let heap = new MinHeap();

  for (let num of arr) {
    heap.insert(num);
  }

  let result = [];
  while (heap.size()) {
    result.push(heap.extractMin());
  }

  return result;
}

//  Test
console.log(heapSort([5, 3, 8, 1])); 