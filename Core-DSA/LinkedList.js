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
    
    print(){
        let current = this.head;
        let result = [];
        while(current){
            result.push(current.value);
            current = current.next;
        }
        console.log(result.join(" -> "));
    }
}

const list = new LinkedList();
list.append(10);
list.append(20);
list.append(5);
list.print();
