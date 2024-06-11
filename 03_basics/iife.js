// Immediately Invoked Function Expressions (IIFE)

(function chai() {
    // named IIFE
    console.log(`DB CONNECTED`);
})();

    // ()-> first parenthesis for function definition and () -> second parenthesis for function execution


((name) => {
    // UNnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
})("Amit")