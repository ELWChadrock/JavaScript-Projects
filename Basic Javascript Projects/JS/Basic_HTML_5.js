document.write(typeof "Word");
document.write(typeof 4);
function my_Function() {
    document.getElementById("Test").innherHTML=0/0;
    document.getElementById("Test").innerHTML = isNaN ('False');
    document.getElementById("Test2").innerHTML = isNaN ('0');
    console.log(2+2);
    document.write("10" + 5);
    document.write(10 > 1);
    console.log(10 > 2);
    document.write(10 < 2);
    document.write (5 > 20 && 20 > 10);
    A = "Jim";
    B = "Jim";
    document.write(A === B);
    X = "24";
    Y = 24;
    document.write(X === Y);
}
function Numbers() {
    document.write(-4E555);
    document.write(5E458); 
    document.write(10 == 10);
    document.write(3 == 11);
    X = 20;
    Y = 20;
    A = "John"
    B = "Frank"
    document.write(X === Y);
    document.write(A === B);
    document.write(10 > 20 || 20 > 5);
}

function not_Function() {
    document.getElementById("Not").innerHTML = !(5>15);
    document.getElementById("Not2").innerHTML = !(20>15);
}