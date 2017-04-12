/* Прототипоное наследование */

function Animal (name) {
    this.name = name;
    this.speed = 0;
}

Animal.prototype.stop = function () {
    this.speed = 0;
    alert(this.name + ' стоит');
};

Animal.prototype.run = function (speed) {
    this.speed += speed;
    alert(this.name + ' бежит, скорость ' + this.speed);
};

function Rabbit (name) {
    Animal.apply(this, arguments);
}

Rabbit.prototype = Object.create(Animal.prototype);

Rabbit.prototype.jump = function () {
    this.speed++;
    alert(this.name + ' прыгает, скорость, ' + this.speed);
};

Rabbit.prototype.run = function () {
    Animal.prototype.run.apply(this, arguments);
    this.jump();
};

/* Функциональное наследование */

function Machine(power) {
    this._power = power;

    this.setPower = function () {
        if (power > 10000){
            alert('Error');
        }
    };

    this._enabled = false;

    this.enable = function() {
        this._enabled = true;
    };

    this.disable = function() {
        this._enabled = false;
    };
}

function CoffeeMachine(power) {
    Machine.apply(this, arguments);

    var waterAmount = 0;

    this.setWaterAmount = function (amount) {
        waterAmount = amount;
    };

    this.enable();

    alert(this._enable);
    alert(this._power);
}

var machine = new Machine(100000);
//var coffeeMachine = new CoffeeMachine(10000);
machine.setPower(500000);

machine.disable();