// Create an object that represents your pet.

// Name property with a string value.
// Species property with a string value.
// Nicknames property with an array value. Array contains strings.
// Age property with an integer value

const pennyTheCat = 
    {
name: "penny",
species: "cat",
nicknames: ["Penny Lane", "Pen Pen", "Sissy Penny"],
age: 14,

meows: function () {
        window.alert("Meow!!")
},

purrs: function (item) {
window.alert("Purrrrrr, Purrrrrrr, Purrrrrrr")
},

sneezes: function (thing) {
window.alert("Achoooo")

},
}



// Now that you have an object that represents your pet, it's time to add some behavior. Pick three behaviors that your pet has and add three kys to your pet object. Each key's value should be a function that logs to the console or displays a window alert. Your choice.

pennyTheCat.meows();
pennyTheCat.purrs();
pennyTheCat.sneezes();


// Give your pet a new key named favoriteToys whose value is an empty array.
// Now define another new key named play whose value is a function with a single parameter named toy.
// The function should determine if your pet liked the toy, and if s/he does, then it should be added to the favoriteToys array using the this keyword (see example above).



     favoriteToys = [],
    play: function (toy) {
        if (toy === "mouse") {
            this.favoriteToys.push(toy);
            console.log("mouse");

        } else if (toy === "my hand") {
            this.favoriteToys.push(toy);
            console.log("my hand");
        }  else if (toy === "my face at 5am") {
            this.favoriteToys.push(toy);
        }
}

    pennyTheCat.play("mouse");
    pennyTheCat.play("my hand");
    pennyTheCat.play("my face at 5am");
