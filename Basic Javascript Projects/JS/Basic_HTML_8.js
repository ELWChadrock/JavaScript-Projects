function full_Sentence() {
    var part_1 ="Oh hi ";
    var part_2 ="I did a ";
    var part_3 ="thing cause ";
    var part_4 ="I thought it was ";
    var part_5 ="fancy.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4, part_5);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() {
    var Sentence = "Look at this cool little sentence I made.";
    var Section = Sentence.slice(5,10);
    document.getElementById("Slice").innerHTML = Section;
}

function testFunction() {
    var str= "Oh no"
    var res= str.toUpperCase();
    document.getElementById("Test").innerHTML = res;
}

function searchFunction() {
    var str = "No";
    var Find = str.search("super");
    document.getElementById("search").innerHTML = Find;
}

function string_Method() {
    var X =42;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() {
    var X = 459756.45865189156384;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

function to_Fixed() {
    var num = 7.36987456
    var n = num.toFixed(3);
    document.getElementById("fixed").innerHTML = n;
}

function value_Of() {
    var str ="Gottem";
    var res = str.valueOf();
    document.getElementById("boy").innerHTML = res;
}