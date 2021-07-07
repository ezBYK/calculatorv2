
var num1 = document.getElementById('num1').value;
var num2 = document.getElementById('num2').value;

function sum() {

    var num1 = parseInt(num1);
    var num2 = parseInt(num2);
    var sum = num1 + num2;
    return "bonjour" + " " + sum;
}
document.getElementById("lblResult").innerHTML = sum();

function division() {

    var num1 = document.getElementById('div1').value;
    var num2 = document.getElementById('div2').value;
    var num1 = parseInt(num1);
    var num2 = parseInt(num2);
    var sum = num1 / num2;
    var lbl = document.getElementById('lblresult');
    lbl.innerHTML = sum;
}

function multiplication() {

    var num1 = document.getElementById('mult1').value;
    var num2 = document.getElementById('mult2').value;
    var num1 = parseInt(num1);
    var num2 = parseInt(num2);
    var sum = num1 * num2;
    var lbl = document.getElementById('lblresult');
    lbl.innerHTML = sum;
}

function soustraction() {

    var num1 = document.getElementById('sous1').value;
    var num2 = document.getElementById('sous2').value;
    var num1 = parseInt(num1);
    var num2 = parseInt(num2);
    var sum = num1 - num2;
    var lbl = document.getElementById('lblresult');
    lbl.innerHTML = sum;

}
