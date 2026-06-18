//Max Priority Queue
// class MaxPQ{
//     constructor(){
//         this.heap=[]
//     }

//     insert(task,priority){
//         this.heap.push({task,priority})
//         this.heap.sort((a,b)=>b.priority-a.priority)
//     }

//     execute(){
//         return this.heap.shift()
//     }
// }

// let pq=new MaxPQ()

// pq.insert("A",2)
// pq.insert("B",5)
// pq.insert("C",1)

// console.log(pq.execute())
// console.log(pq.execute())



//Emergency Queue Systems (Priority Queue)
// class EmergencyQueue{
//     constructor(){
//         this.queue=[]
//     }

//     add(name,priority){
//         this.queue.push({name,priority})
//         this.queue.sort((a,b)=>b.priority-a.priority)
//     }

//     treat(){
//         return this.queue.shift()
//     }
// }

// let eq=new EmergencyQueue()

// eq.add("A",1)
// eq.add("B",5)
// eq.add("C",3)

// console.log(eq.treat())
// console.log(eq.treat())



//1. Simple Priority Queue (Array – Easy)

//👉 Highest priority = small number = high priority

// class PriorityQueue{
//     constructor(){
//         this.queue=[]
//     }

//     //.✅Add task with priority
//     enqueue(value,priority){
//         let newItem={value,priority}

//         this.queue.push(newItem)

//         // sort based on priority
//         this.queue.sort((a,b)=>a.priority-b.priority)
//     }

//     // ✅ Remove highest priority
//     dequeue(){
//         if(this.queue.length === 0) return null

//         return this.queue.shift()
//     }

//       // ✅ View front
//       peek(){
//         return this.queue[0] || null
//       }

//       print(){
//         console.log(this.queue)
//       }
// }

// let pq=new PriorityQueue()

// pq.enqueue("Low Task",3)
// pq.enqueue("High Task",1)
// pq.enqueue("Medium Task",2)

// pq.print()

// console.log(pq.dequeue())




//2. Priority Queue using Min Heap
// class MinPriorityQueue{
//     constructor(){
//         this.heap=[]
//     }

//     parent(i) {return Math.floor((i-1)/2);}
//     left(i) {return 2 * i + 1;}
//     right(i) {return 2* i + 2;}

//     enqueue(value,priority) {
//         let node={value,priority}
//         this.heap.push(node)
//         this.heapifyUp()
//     }

//     heapifyUp(){
//         let i=this.heap.length-1

//         while(i>0){
//                 let p=this.parent(i)

//                 if(this.heap[p].priority<=this.heap[i].priority)break

//                 [this.heap[p],this.heap[i]]=
//                 [this.heap[i],this.heap[p]]

//                 i=p
//         }
//     }

//     dequeue(){
//         if(this.heap.length === 0) return null

//         let root=this.heap[0]
//         this.heap[0] = this.heap.pop()

//         this.heapifyDown(0)

//         return root
//     }

//     heapifyDown(i){
//         let smallest=i
//         let left=this.left(i)
//         let right=this.right(i)

//         if(left<this.heap.length && 
//             this.heap[left].priority < this.heap[smallest].priority) {
//                 smallest=left
//             }

//             if(right<this.heap.length && 
//                 this.heap[right].priority<this.heap[smallest].priority) {
//                     smallest=right
//                 }

//                 if(smallest !==i){
//                   [this.heap[i],this.heap[smallest]]=
//                   [this.heap[smallest],this.heap[i]]
//                   this.heapifyDown(smallest)
//                 }
//     }
// }

// let pq2=new MinPriorityQueue()

// pq2.enqueue("Task A",3)
// pq2.enqueue("Task B",1)
// pq2.enqueue("Task C",2)

// console.log(pq2.dequeue())




//3. Max Priority Queue (High number = high priority)
class MaxPriorityQueue{
    constructor(){
        this.heap=[]
    }

    parent(i) {return Math.floor((i-1)/2);}

    enqueue(value,priority) {
        this.heap.push({value,priority})

        let i=this.heap.length-1

        while(i>0){
            let p=this.parent(i)

            if(this.heap[p].priority>=this.heap[i].priority) break

            [this.heap[p],this.heap[i]]=
            [this.heap[i],this.heap[p]]

            i=p
        }
    }

    dequeue() {
        if(this.heap.length === 0) return null

        let root=this.heap[0]
        this.heap[0]=this.heap.pop()

        let i=0

        while(true) {
            let  left = 2 * i + 1;
            let right = 2 * i + 2;
            let largest=i

            if(left<this.heap.length && 
                this.heap[left].priority>this.heap[largest].priority) {
                    largest=left
                }

                if(right<this.heap.length && 
                    this.heap[right].priority>this.heap[largest].priority) {
                        largest=right
                    }

                    if(largest === i) break

                    [this.heap[i],this.heap[largest]]=
                    [this.heap[largest],this.heap[i]]

                    i=largest
        }

        return root
    }
}




//Task Scheduling
class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(value, priority) {
    let newItem = { value, priority };

    this.queue.push(newItem);

    // sort based on priority (small number = high priority)
    this.queue.sort((a, b) => a.priority - b.priority);
  }

  dequeue() {
    if (this.queue.length === 0) return null;

    return this.queue.shift();
  }

  peek() {
    return this.queue[0] || null;
  }
}


let pq = new PriorityQueue();

pq.enqueue("Send Email", 2);
pq.enqueue("Fix Bug", 1);
pq.enqueue("Deploy", 3);

console.log(pq.dequeue());