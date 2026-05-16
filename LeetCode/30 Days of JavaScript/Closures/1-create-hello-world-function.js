/**
 * Link: https://leetcode.com/problems/create-hello-world-function/description/?envType=study-plan-v2&envId=30-days-of-javascript
 * @return {Function}
 */
var createHelloWorld = function () {
    return function (...args) {
        return "Hello World";
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */

/*
 * Notes:

   (1) First, let's visualize two functions: 

       var createHelloWorld = function(){

       }
       
       var anotherFunction = function(...args){
           return "Hello World";
       }
       
    (2) Let's now combine these two functions step by step:
        
        (a) 
            var createHelloWorld = function() {
                return var anotherFunction = function(...args){
                    return "Hello World";
                }
            };

            This will throw an error because we cannot place a var declaration inside a return statement.
            A return statement will expect an expression and not a statement.

        (b) After removing "var" right next to return,

            // code starts
            var createHelloWorld = function () {
                return anotherFunction = function (...args) {
                    return "Hello World";
                }
            };

            console.log(createHelloWorld()());
            console.log(anotherFunction()); // It will return value since anotherFunction has accidentally become a global variable

            // code ends

            In non-strict mode, this solution may accidentally create a global variable called anotherFunction. 
            In this scenario, when we use an undeclared variable for storing functions, this variable becomes
            available in the global scope. This can lead to unwanted variable overrides or security issues.

            To combat these sort of mistakes, we can use strict mode because once this is on, assigning a value to an undeclared
            variable throws a ReferenceError. In strict mode, we must declare variables using var or let or const.

        (c) Using anonymous function for inner function

            var createHelloWorld = function () {
                return function (...args) {
                    return "Hello World";
                }
            };

            If we do not want to use an anonymous function for the inner function, and want to name the inner function, we can do the following:

            var createHelloWorld = function() {
                return function anotherFunction(...args){
                    return "Hello World";
                }
            };

        (d) Rest parameter: The JavaScript rest parameter syntax (...) allows a function to accept an indefinite number of arguments as an array.
            Here, we have a rest parameter in the inner function but we are not using it in our solution. 
        
        (e) Final solution:

            var createHelloWorld = function () {
                return function (...args) {
                    return "Hello World";
                }
            };

*/