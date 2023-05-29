                    // Function to Enter Number.
function appendNumber(num) {
    document.getElementById("result").value += num;
}

                    // Function to Perform Operator. 
function appendOperator(op) {
    document.getElementById("result").value += op;
}

                    // Function to Remove 1 Letter.
function deleteResult() {
    document.getElementById('result').value = result.value.toString().slice(0,-1);
}

                    // Function to Clear Screen.
function clearResult() {
    document.getElementById("result").value = result.value.toString().slice(0,0);
}

                    // Function to Calculate Square Root.
function sqrRoot() {
    document.getElementById("result").value = Math.sqrt(result.value).toFixed(4);
}

                    // Function to Calculate Log.
function calculateLog() {
    document.getElementById("result").value = Math.log10(result.value).toFixed(4);
}

                    // Function to Calculate Ln.
function calculateLn() {
    document.getElementById("result").value = Math.log(result.value).toFixed(4);
}

                    // Functions to Calculate Trigonometric Values. 
function calSin() {
    document.getElementById("result").value = Math.sin(result.value).toFixed(4);
}
function calCos() {
    document.getElementById("result").value = Math.cos(result.value).toFixed(4);
}
function calTan() {
    document.getElementById("result").value = Math.tan(result.value).toFixed(4);
}

                    // Functions to Calculate Inverse Trigonometric Values.
function calSinInverse() {
    document.getElementById("result").value = Math.asin(result.value).toFixed(4);
}
function calCosInverse() {
    document.getElementById("result").value = Math.acos(result.value).toFixed(4);
}
function calTanInverse() {
    document.getElementById("result").value = Math.atan(result.value).toFixed(4);
}

                   // Functions to Calculate Power Values. 
function powerOfX() {
    let base = parseFloat(document.getElementById("result").value);
    let exponent = prompt("Enter the exponent:");

    if (exponent !== null && !isNaN(base) && !isNaN(exponent)) {
        let result = Math.pow(base, exponent);
        document.getElementById("result").value = result;
    } else {
        document.getElementById("result").value = "Masti kr rya";
    }
}

                    // Functions to Calculate Percentage.
function calculatePercentage() {
    let result = document.getElementById("result").value;

    try {
        let answer = eval(result + "/100");
        document.getElementById("result").value = answer;
    } catch (error) {
        console.log("error : " + error);
        document.getElementById("result").value = "Masti kr rya";
    }
}

                    // // Functions to Perform Toggle Mode.
function toggleDarkMode() {
    const body = document.querySelector('body');
    body.classList.toggle('dark');
                        
    const darkButton = document.getElementById('toggle-button');
    if (body.classList.contains('dark')) {
        darkButton.textContent = 'Light';
    } else {
        darkButton.textContent = 'Dark';
    }
}

                    // Functions to Calculate Result (Eval).
function calculate() {
    let result = document.getElementById("result").value;
    
    try {
        let answer = eval(result);
        document.getElementById("result").value = answer;
    } catch (error) {
        console.log("error : " + error);
        document.getElementById("result").value = "Masti kr rya";
    }

}  