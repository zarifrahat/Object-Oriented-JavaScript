
Function.prototype.inherits = function(parentClass){
    // function Surrogate(){};
    // Surrogate.prototype = parentClass.prototype;
    // this.prototype = new Surrogate();
    // this.prototype.constructor = this;
    this.prototype = Object.create(parentClass.prototype);
}

function MovingObject(name) { 
    this.name = name;
}

MovingObject.prototype.speed = function(speed){
    console.log(`${this.name} is moving at ${speed} miles per hour`);
}

function Ship(color, size, name) { 
    this.color = color;
    this.size = size;
    this.name = name;

};
Ship.inherits(MovingObject);


Ship.prototype.landing = function(planet) {
    console.log(`${this.name} is landing on ${planet}`);
};

function Asteroid(color, size, name) {
    this.color = color;
    this.size = size;
    this.name = name;}
Asteroid.inherits(MovingObject);

const s = new Ship("red", "large", "M. Falcon")
console.log(s.speed(100));
s.landing("Earth");

const m = new MovingObject("thing");
m.speed(100);