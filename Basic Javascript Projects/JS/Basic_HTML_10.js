function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

function myFunction() {
    var str = "Hello World!";
    var n = str.length;
    document.getElementById("demo").innerHTML = n;
}

    var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
    var Content = "";
    var Y;
    function for_Loop() {
        for (Y = 0; Y < Instruments.length; Y++) {
            Content += Instruments[Y] + "<br>";
        }
        document.getElementById("List_of_Instruments").innerHTML = Content;
    }

function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + ".";
}

function scope() {
    var carName = "Corvette";
    document.getElementById("Test").innerHTML = carName;
}

function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type + " was " +Musical_Instrument.price;
}

var X = 82;
document.write(X);
{
    let X = 33;
    document.write("<br>" + X);
}
document.write("<br>" + X);

function cartest() {
  let car = {
      make: "Dodge ",
      model: "Viper ",
      year: "2021 ",
      color: "red ",
      description : function() {
          return "The car is a  " + this.year + this.color + this.make + this.model;
      }
  };
  document.getElementById("Car_Object").innerHTML = car.description();
}

function breaktest() {
    var places = ["Paris", "Hong Kong", "Tokyo", "Stockholm"];
    var text = "";
    var i;
    for (i = 0; i < places.length; i++) {
        if (i === 2) { break; }
        text += places + i  + "<br>";
    }
    document.getElementById("place").innerHTML = text;
}