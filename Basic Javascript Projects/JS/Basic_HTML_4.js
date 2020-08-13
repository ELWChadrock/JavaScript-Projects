function my_Dictionary() {
    var Car = {
        Model:"Toyota",
        Color:"Black",
        Year:2018,
        Sound:"Vroom"
    };
    delete Car.Color;
    document.getElementById("Dictionary").innerHTML = "I drive a " + Car.Color + Car.Model;
}