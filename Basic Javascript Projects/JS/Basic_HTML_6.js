function ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function New_and_This() {
    var subtraction = 5-4;
    var abstract = "Oh no";
    document.write("Hello there");
}

function Person (first, last, age, height) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.height = height;
}
var Tim = new Person("Tim", "Timman", 35, "5'9")
var Beth = new Person("Beth", "Lady", 22, "5'1")
function pFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "I think that " + Tim.firstName + Tim.lastName + " likes " + Beth.firstName + Beth.lastName;
}

function count_Function() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}