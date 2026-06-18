//1. Kth Largest Element

// function kthLargest(arr,k){
//     let heap=[]

//     for(let num of arr){
//         heap.push(num)
//         heap.sort((a,b)=>a-b)

//         if(heap.length>k){
//             heap.shift()
//         }
//     }
//     return heap[0]
// }
// console.log(kthLargest([3,2,1,5,6,4],2))



//2. Kth Smallest Element

// function kthSmallest(arr,k){
//     arr.sort((a,b)=>a-b)
//     return arr[k-1]
// }

// console.log(kthSmallest([7,10,4,3,20,14],3))





// //3. Top K Frequent Elements
// function topKFrequent(arr,k){
//     let map={}

//     for(let num of arr){
//         map[num] = (map[num] || 0)+1
//     }

//     let res=Object.keys(map)
//     .sort((a,b)=>map[b]-map[a])

//     return res.slice(0,k)
// }

// console.log(topKFrequent([1,1,1,2,2,3],2))





// //Sliding Window (Heap Idea)
// function maxInWindow(arr,k){
//     let res=[]

//     for(let i=0;i<=arr.length-k;i++){
//         let window=arr.slice(i,i+k)
//         res.push(Math.max(...window))
//     }

//     return res
// }
// console.log(maxInWindow([1,3,-1,-3,5,3,6,7],3))



//Top K Frequent Elements
// function topKFrequent(arr,k){
//     let map={}

//     //count frequency
//     for(let num of arr){
//         map[num]=(map[num] || 0)+1
//     }

//     //sort by frequemcy
//     let result=Object.keys(map)
//     .sort((a,b)=>map[b]-map[a])

//     return result.slice(0,k)
// }

// console.log(topKFrequent([1,1,1,2,2,3],2))



// // /💻 Simple Code
// function topKFrequent(arr,k){
//     let count={}

//     //count
//     for(let num of arr){
//         count[num]=(count[num] ||0)+1
//     }

//     //convertmto array
//     let entries=Object.entries(count)

//     //sort by frequency
//     entries.sort((a,b)=>b[1]-a[1])

//     //take to k
//     return entries.slice(0,k).map(e=>Number(e[0]))
// }

// console.log(topKFrequent([1,1,1,2,2,3],2))




//Kth Largest Element
// function kthLargest(arr,k){
//     arr.sort((a,b)=>b-a)
//     return arrr[k-1]
// }
// console.log(kthLargest([3,2,1,5,6,4],2))




//Kth Smallest Element
// function kthSmallest(arr,k){
//     arr.sort((a,b)=>a-b)
//     return arr[k-1]
// }
// console.log(kthSmallest([7,10,4,3,20,15],3))




//1. Kth Largest Element (Heap)
class MinHeap {
  constructor() {
    this.heap = [];
  }

  parent(i) { return Math.floor((i - 1) / 2); }

  insert(val) {
    this.heap.push(val);
    let i = this.heap.length - 1;

    while (i > 0) {
      let p = this.parent(i);
      if (this.heap[p] <= this.heap[i]) break;

      [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]];
      i = p;
    }
  }

  extractMin() {
    if (this.heap.length === 1) return this.heap.pop();

    let root = this.heap[0];
    this.heap[0] = this.heap.pop();

    let i = 0;
    while (true) {
      let left = 2 * i + 1;
      let right = 2 * i + 2;
      let smallest = i;

      if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
        smallest = left;
      }

      if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
        smallest = right;
      }

      if (smallest === i) break;

      [this.heap[i], this.heap[smallest]] =
        [this.heap[smallest], this.heap[i]];

      i = smallest;
    }

    return root;
  }
}

// ✅ Kth Largest
function kthLargest(arr, k) {
  let heap = new MinHeap();

  for (let num of arr) {
    heap.insert(num);

    if (heap.heap.length > k) {
      heap.extractMin();
    }
  }

  return heap.heap[0];
}

//  Test
console.log(kthLargest([3,2,1,5,6,4], 2));





//2. Kth Smallest
function kthSmallest(arr, k) {
  let heap = new MinHeap();

  for (let num of arr) {
    heap.insert(num);
  }

  for (let i = 1; i < k; i++) {
    heap.extractMin();
  }

  return heap.heap[0];
}

//  Test
console.log(kthSmallest([7,10,4,3,20,15], 3));





//3. Top K Frequent Elements
function topKFrequent(nums, k) {
  let freq = {};

  // count frequency
  for (let num of nums) {
    freq[num] = (freq[num] || 0) + 1;
  }

  // convert to array
  let arr = Object.entries(freq);

  // sort by frequency
  arr.sort((a, b) => b[1] - a[1]);

  let result = [];

  for (let i = 0; i < k; i++) {
    result.push(Number(arr[i][0]));
  }

  return result;
}

// Test
console.log(topKFrequent([1,1,1,2,2,3], 2)); 





//4. Top K Largest (Heap)
function topK(arr, k) {
  let heap = new MinHeap();

  for (let num of arr) {
    heap.insert(num);

    if (heap.heap.length > k) {
      heap.extractMin();
    }
  }

  return heap.heap;
}

//Test
console.log(topK([3,2,1,5,6,4], 2)); 