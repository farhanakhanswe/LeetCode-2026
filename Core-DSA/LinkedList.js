class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(value){
        this.head = null;
        this.size = 0;
    }

    append(value){
        const newNode = new Node(value);
        
        if(!this.head){
            this.head = newNode;
        }else{
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = newNode;
        }
    
        this.size++;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }
    
    print(){
        let current = this.head;
        let result = [];
        while(current){
            result.push(current.value);
            current = current.next;
        }
        console.log(result.join(" -> "));
    }

    delete(value) {
    if (!this.head) return;
        
    if (this.head.value === value) {
        this.head = this.head.next;
        this.size--;
        return;
    }

    let current = this.head;

    while (current.next && current.next.value !== value) {
        current = current.next;
    }

    // If value was found
    if (current.next) {
        current.next = current.next.next;
        this.size--;
    }
}
}

const list = new LinkedList();
list.append(10);
list.append(20);
list.prepend(30);
list.append(5);
list.print();
list.delete(20);
list.print();
