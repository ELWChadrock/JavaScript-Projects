function addition_Function() {
    var addition =2+2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}
addition_Function();

function subtraction_Function() {
    var subtraction = 7-4;
    document.getElementById("Math2").innerHTML = " 7 - 4 = "+ subtraction;
}
subtraction_Function();

function multiplication() {
    var simple_Math = 6*8;
    document.getElementById("Math3").innerHTML = "6 x 8 = " + simple_Math;
}
multiplication();

function division() {
    var simple_Math = 48/6;
    document.getElementById("Math4").innerHTML = "48 / 6 = " + simple_Math;
}
division();

function more_Math() {
    var simple_Math = (1+2) * 10 / 2-5;
    document.getElementById("Math5").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}

more_Math();

function modulus_Operator() {
    var simple_Math= 25% 6;
    document.getElementById("Math6").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}
modulus_Operator();

function negation_Operator() {
    var x= 10;
    x--;
    document.getElementById("Math7").innerHTML = -x;
}
negation_Operator();

window.alert(Math.random() * 100);
window.alert(Math.pow(8,4));