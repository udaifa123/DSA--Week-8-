//🌳 Insert into Heap (Min Heap)
// class MinHeap{
//     constructor(){
//         this.heap=[]
//     }

//     insert(val){
//         this.heap.push(val)

//         let i=this.heap.length-1

//         while(i>0){
//             let parent=Math.floor((i-1)/2)

//             if(this.heap[parent]>this.heap[i]) {
//                 [this.heap[parent],this.heap[i]] = [this.heap[i],this.heap[parent]]
//                 i=parent
//             }else break
//         }
//     }
// }

// let h=new MinHeap()
// h.insert(30)
// h.insert(10)
// h.insert(20)

// console.log(h.heap)




//🌳 Delete from Heap (Min Heap)
// class MinHeap{
//     constructor(){
//         this.heap=[]
//     }

//     extractMin(){
//         if(this.heap.length===0) return null
//         if(this.heap.length===1) return this.heap.pop()

//             let min=this.heap[0]
//             this.heap[0]=this.heap.pop()

//             let i=0
//             let n=this.heap.length

//             while(true){
//                 let left= 2 * i + 1
//                 let right=2 * i + 2
//                 let smallest = i

//                 if(left < n && this.heap[left] < this.heap[smallest]) {
//                     smallest=left
//                 }

//                 if(right < n && this.heap[right] < this.heap[smallest]){
//                     smallest=right
//                 }

//                 if(smallest !==i){
//                     [this.heap[i],this.heap[smallest]] = [this.heap[smallest],this.heap[i]]
//                     i=smallest
//                 }else break
//             }
//         return min
//     }
// }

// let h=new MinHeap()
// h.heap=[10,20,30]

// console.log(h.extractMin())
// console.log(h.heap)




//🌳 Heapify Up
// function heapifyUp(heap){
//     let i=heap.length-1

//     while(i>0){
//         let parent=Math.floor((i-1)/2)

//         if(heap[parent]>heap[i]) {
//             [heap[parent],heap[i]] = [heap[i],heap[parent]]
//             i=parent
//         }else break
//     }
// }

// let heap=[30,20]
// heap.push(10)

// heapifyUp(heap)

// console.log(heap)




//🌳 Heapify Down
function heapifyDown(heap){
    let i = 0
    let n = heap.length

    while(true){
        let left= 2 * i + 1
        let right= 2 * i + 2
        let smallest = i

        if(left < n && heap[left]<heap[smallest]){
            smallest=left
        }

        if(right < n && heap[right]<heap[smallest]){
            smallest=right
        }

        if(smallest !== i){
            [heap[i],heap[smallest]] = [heap[smallest],heap[i]]
            i=smallest
        }else break
    }
}

let heap=[30,20,10]
heapifyDown(heap)

console.log(heap)