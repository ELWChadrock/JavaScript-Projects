var Y = 15;
function Add_numbers_1() {
    document.write(45 + Y + "<br>");
}
function Add_numbers_2() {
    document.write(Y + 2500);
}
Add_numbers_1();
Add_numbers_2();

function get_Date() {
    if (new Date().getHours() < 12) {
        document.getElementById("Greeting").innerHTML = "Hey bud how's it going";
    }
}

if (3 > 2) {
    document.write("Bro do you even math?")
}

function JRPG_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Answer = "You're an old player";
    }
    else {
        Answer = "You shouldn't be playing this";
    }
    document.getElementById("How_old_are_you?").innerHTML = Answer;
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18){
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}
    console.log(X = 4);
    console.log(X === 5);
    console.log(V === 4);
