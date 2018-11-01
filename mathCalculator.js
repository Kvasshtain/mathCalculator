function isExpressionValid(mathsimbols) {
    if(mathsimbols[mathsimbols.length - 1] !== "=") {
        return false;
    };

    if(typeof(+mathsimbols[mathsimbols.length - 2]) !== "number") {
        return false;
    };

    return true;
}

function getExpressionSign(mathsimbols, result) {
    if (mathsimbols[0] === "-"){
        result = -mathsimbols[1];
    };

    if(mathsimbols[0] === "+"){
        result = +mathsimbols[1];
    };

    if(mathsimbols[0] === ""){
        result = +mathsimbols[1];
    };

    return result;
}

function getResult(mathsimbols, result) {
    for(var i = 2; i < mathsimbols.length - 2; i+=2) {
        switch(mathsimbols[i]) {
            case '+':{
                result += +mathsimbols[i+1];
                break;
            }
            case '-':{
                result -= +mathsimbols[i+1];
                break;
            }
            case '*':{
                result *= +mathsimbols[i+1];
                break;
            }
            case '/':{
                result /= +mathsimbols[i+1];
                break;
            }
            case '=':{
                break;
            }
            default:{
                result = NaN;
                break;
            }
        }
    }

    return result;
}

function calculate(str) {
    var result = 0,
        mathregex = /\s*(\d+\.?\d*)\s*/,
        mathsimbols = str.split(mathregex),
        i,
        j;

    if(!isExpressionValid(mathsimbols)) {
        return NaN;
    }

    result = getExpressionSign(mathsimbols, result)

    result = getResult(mathsimbols, result);

    return result.toFixed(2);
}

window.onload = function () {
    var input = document.getElementById("Input"),
        output = document.getElementById("Output");
    document.getElementById("Process").onclick = function() {
        output.value = calculate(input.value);
    };
}