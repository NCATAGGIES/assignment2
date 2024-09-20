function calculate() {

    const goodResults = []; // Array to keep track of valid results
    document.write("<table id='main'>");
    document.write("<tr><th>x</th><th>Op</th><th>y</th><th>Result</th></tr>");
    
    while (true) {
        let x = prompt("Enter the first number (x):");
        if (x === null) break; // Exit if Cancel is clicked

        let y = prompt("Enter the second number (y):");
        if (y === null) break; // Exit if Cancel is clicked

        let operator = prompt("Enter an arithmetic operator (+, -, *, /, %):");
        if (operator === null) break; // Exit if Cancel is clicked

        let result;
        x = parseFloat(x);
        y = parseFloat(y);

        if (isNaN(x) || isNaN(y)) {
            result = "Error: Non-numeric input";
        } else {
            switch (operator) {
                case '+':
                    result = x + y;
                    break;
                case '-':
                    result = x - y;
                    break;
                case '*':
                    result = x * y;
                    break;
                case '/':
                    result = y !== 0 ? x / y : "Error: Division by zero";
                    break;
                case '%':
                    result = y !== 0 ? x % y : "Error: Division by zero";
                    break;
                default:
                    result = "Error: Invalid operator";
            }
        }
        document.write("<tr><td>" + x + "</td><td>" + operator + "</td><td>" + y + "</td><td>" + result + "</td></tr>");
        
        // Store valid results
        if (typeof result === 'number') {
            goodResults.push(result);
        }
    }
    
    
    
    
    
    document.write("</table>");

    summary(goodResults);

}

function summary(myArray) {
 

    document.write("<table id='summary'>");
    document.write("<tr><th colspan=4>Summary</th></tr>");
    document.write("<tr><th>Min</th><th>Max</th><th>Avg</th><th>Total</th></tr>");
    

 

    if (myArray.length === 0) {
        document.write("<tr><td colspan=4>No valid data to display</td></tr>");
    } else {
        const total = myArray.reduce((acc, val) => acc + val, 0);
        const min = Math.min(...myArray);
        const max = Math.max(...myArray);
        const avg = total / myArray.length;
        document.write("<tr><td>"+min+"</td><td>"+max+"</td><td>"+avg+"</td><td>"+total+"</td></tr>");
    
       
    }
    document.write("</table>");
    
}
calculate()