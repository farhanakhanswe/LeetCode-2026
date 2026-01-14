<?php

/* Question Link: https://leetcode.com/problems/design-linked-list/ */

class MyLinkedList {
    /**
     */
     
    private $head;
    private $size;
    
    function __construct() {
        $this->head = null;
        $this->size = 0;
    }
  
    /**
     * @param Integer $index
     * @return Integer
     */
    function get($index) {
        if($index < 0 || $index >= $this->size){
            return -1;
        }
        
        $curr = $this->head;
        for($i = 0; $i < $index; $i++){
            $curr = $curr['next'];
        }
        
        return $curr['val'];
    }
  
    /**
     * @param Integer $val
     * @return NULL
     */
    function addAtHead($val) {
        $this->head = [
            'val' => $val,
            'next' => $this->head
        ];
        $this->size++;
    }
  
    /**
     * @param Integer $val
     * @return NULL
     */
    function addAtTail($val) {
        $node = [
            'val' => $val,
            'next' => null
        ];
        
        if($this->head === null){
            $this->head = $node;
        }else{
            $curr =& $this->head;
            while($curr['next'] !== null){
                $curr =& $curr['next'];
            }
            $curr['next'] = $node;
        }
        
        $this->size++;
    }
  
    /**
     * @param Integer $index
     * @param Integer $val
     * @return NULL
     */
    function addAtIndex($index, $val) {
        if($index < 0 || $index > $this->size){
            return;
        }
        
        if($index === 0){
            $this->addAtHead($val);
            return;
        }
        
        $curr =& $this->head;
        for($i = 0; $i < $index - 1; $i++){
            $curr =& $curr['next'];
        }
        
        $curr['next'] = [
            'val' => $val,
            'next' => $curr['next']
        ];
        
        $this->size++;
    }
  
    /**
     * @param Integer $index
     * @return NULL
     */
    function deleteAtIndex($index) {
        if($index < 0 || $index >= $this->size){
            return;
        }
        
        if($index == 0){
            $this->head = $this->head['next'];
        }else{
            $curr =& $this->head;
            for($i = 0; $i < $index -1; $i++){
                $curr =& $curr['next'];
            }
            $curr['next'] = $curr['next']['next'];
        }
        
        $this->size--;
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * $obj = MyLinkedList();
 * $ret_1 = $obj->get($index);
 * $obj->addAtHead($val);
 * $obj->addAtTail($val);
 * $obj->addAtIndex($index, $val);
 * $obj->deleteAtIndex($index);
 */
