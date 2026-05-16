/**
 * Link: https://leetcode.com/problems/to-be-or-not-to-be/?envType=study-plan-v2&envId=30-days-of-javascript
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe: function(val2){
            if(val === val2){
                return true;
            }
            throw new Error("Not Equal");
        },
        notToBe: function(val2){
            if(val !== val2){
                return true;
            }
            throw new Error("Equal");
        }
    }
};

/*
    Notes:

    (1) Let's first talk about JS objects: JS objects have properties as keys, and their values can be of any 
        data-type including objects. In JS, functions are first-class objects, because they can be passed to other 
        functions, returned from functions, and assigned to variables and properties. They can also have properties 
        and methods just like any other object. What distinguishes them from other objects is that functions 
        can be invoked.
        
        For example:
        {
            functionNameKey : function(){
                        
                              }
        }
        
    (2) The question is asking us to return an object with two functions. So, we have to create an object and then
        the object will have two properties which will be the function names and the values would be the 
        functions. These functions become closures and they can access the variables in the outer scope.

        {
            toBe: function(val1){
                    
                    },
            notToBe: function(val2){
            
            }
        
        }
        
    (3) The two closures will have access to the local variable "val" in the parent function. So, inside the closures,
        we just have to compare the values between the parent function's "val" and the arguments passed to the closures.

        var expect = function(val){
            return {
                toBe: function(val1){
                    if(val === val1) return true;
                },
                notToBe: function(val2){
                    if(val !== val2) return true;
                }
            }
        }
        

    (4) We can return a custom error message using throw statement which throws a user-defined exception.

            throw new Error();

    (5) Final solution:

        var expect = function(val) {
            return {
                toBe: function(val1){
                    if(val === val1) return true;
                    throw new Error("Not Equal");
                },
                notToBe: function(val2){
                    if(val !== val2) return true;
                    throw new Error("Equal");
                }
            }
        };

    (6) Now, let's talk about how we can call the toBe() and notToBe() functions

            expect(5).toBe(5); // true
            expect(5).notToBe(5); // throws "Equal"
         
        Here, we are calling the expect() function which is returning an object. This object has two properties
        which are these two functions:
            (1) toBe 
            (2) notToBe

        In JS, we access object properties using dot "." notation. So, if we want to access the toBe property, we have to use
        expect().toBe but we need to execute the toBe function so we also have to add the parentheses next to toBe. 
        So, we use 
            
            expect().toBe()

        The same explanation applies for the notToBe() function

            expect().notToBe();
*/