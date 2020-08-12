function my_Dictionary() {
    var Car = {
        Model:"Toyota",
        Color:"Black",
        Year:2018,
        Sound:"Vroom"
    };
    document.getElementById("Dictionary").innerHTML = "I drive a" + Car.Model;
}