/* Question Link: https://leetcode.com/problems/design-event-manager/
   The following solution was submitted during the contest period. 
   It may not be incorrect but it didn't pass all the test cases as this unoptimized solution was exceeding time limit.
*/


/**
 * @param {number[][]} events
 */

// initial list of events
// each event has a unique eventId and a priority

// EventManager(int[][] events) intializes the manager with the given events, where 
// events[i] = (eventId, priority)

// void updatePriority(int eventId, int newPriority) Updates the priority of the active event with id eventId to newPriority

// int pollHighest() removes and returns the eventId of the active event with the highest priority. If multiple active events have the
// same priority, return the smallest eventId among them. If there are no active events, return -1

// an event is called active if it has not been removed by pollHighest()

// thought process
// so we need to identify when we will do event manageer, updatePriority and pollhighest
// for eventmanager the elemnet inside events will be 2D array
// for update priority the element will be 1D array
// for poll highest the element will be empty array

// we can use a map inside the event manager class that tracks the event as key and value as priority

// poll highest will remove the active event according to the following:
// for single active event, it will return eventId with the highest priority and then remove the eventid
// for multiple active events have the same priority, return the smallest eventId among them and then remove this eventid
// if there are no active events, return -1

// so first we find the max priority, then return the smallest active event with that priority after removing it from map

// for update priority, we just fetch the event id via its key in the map and then update the value which is the priority

var EventManager = function (events) {
    this.map = new Map();

    for (let i = 0; i < events.length; i++) {
        let key = events[i][0];
        let value = events[i][1];

        this.map.set(key, value);
    }

};

/** 
 * @param {number} eventId 
 * @param {number} newPriority
 * @return {void}
 */
EventManager.prototype.updatePriority = function (eventId, newPriority) {
    if (this.map.has(eventId)) {
        this.map.set(eventId, newPriority);
    }
};

/**
 * @return {number}
 */
EventManager.prototype.pollHighest = function () {
    if (this.map.size === 0) {
        return -1;
    }

    let maxValue = -Infinity;
    let minKey = Infinity;

    for (const [key, value] of this.map) {
        if (value > maxValue) {
            maxValue = value;
            minKey = key;
        } else if (value === maxValue && key < minKey) {
            minKey = key;
        }
    }

    this.map.delete(minKey);

    return minKey;
};

/** 
 * Your EventManager object will be instantiated and called as such:
 * var obj = new EventManager(events)
 * obj.updatePriority(eventId,newPriority)
 * var param_2 = obj.pollHighest()
 */