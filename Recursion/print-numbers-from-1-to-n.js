var printNumbersFrom1ToN = function (n) {
    if (n > 0) {
        printNumbersFrom1ToN(n - 1);
        console.log(n);
    }
}

printNumbersFrom1ToN(5);

/* 
    Visualizing what's happening

   (1) What happens in recursion is, for every recursive call, there's an entry for that function in the call stack
   (2) Until the top function in the call stack, fully executes, the preceding functions in the call stack are paused
   (3) Here's the visualization

   Let's say we call printNumbersFrom1ToN(3). Here's how each recursive call is injected in the call stack

    printNumbersFrom1ToN(3); // it calls printNumbersFrom1ToN(2)
        printNumbersFrom1ToN(2);  // it calls printNumbersFrom1ToN(1)
            printNumbersFrom1ToN(1); // it calls printNumbersFrom1ToN(0) 
                printNumbersFrom1ToN(0) doesn't call any function as we have reached the base case

            Since our stopping condition is n > 0, we stop recursive calls and now will start unwinding the call stack.

            Let's visualize the call stack as an array where the last el is what is on top of the call stack
             [printNumbersFrom1ToN(3), printNumbersFrom1ToN(2),  printNumbersFrom1ToN(1), printNumbersFrom1ToN(0) ]

            Top of the stack     printNumbersFrom1ToN(0)
                                 printNumbersFrom1ToN(1)
                                 printNumbersFrom1ToN(2)
            Bottom of the stack  printNumbersFrom1ToN(3)

    Now, the function at the top of the call stack will return first and then the preceding functions will run one by one as the stack unwinds following LIFO (Last In First Out).

    Now, printNumbersFrom1ToN(1) console logs "1" and then this function returns to printNumbersFrom1ToN(2).

        Now, printNumbersFrom1ToN(2) continues executing the next lines since the recursive call for printNumbersFrom1ToN(1) has ended.
        It console logs "2" and then this function returns to printNumbersFrom1ToN(3).

            Now, printNumbersFrom1ToN(3) continues executing the next lines since the recursive call for printNumbersFrom1ToN(2) has ended, and finally console logs "3".

    Each console.log(n) happens after the recursive call completes, which is why numbers are printed in ascending order.


*/