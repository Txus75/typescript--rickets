var Rocket = /** @class */ (function () {
    function Rocket(rocketID, propellers, power) {
        this.propellersSpeed = [];
        this.speed = 0;
        this.rocketID = rocketID;
        this.propellers = propellers;
        this.propellersMaxpower = power;
    }
    Rocket.prototype.getRocket = function () {
        return {
            "rocketID": this.rocketID,
            "propellers": this.propellers,
            "propellersMaxpower": this.propellersMaxpower
        };
    };
    Rocket.prototype.rocketSpeed = function () {
        var totalSpeed = 0;
        for (var i = 0; i < this.propellers; i++) {
            if (this.speed <= this.propellersMaxpower[i]) {
                this.propellersSpeed[i] = this.speed;
            }
            else {
                this.propellersSpeed[i] = this.propellersMaxpower[i];
            }
            totalSpeed += this.propellersSpeed[i];
        }
        return totalSpeed;
    };
    Rocket.prototype.speedUp = function () {
        this.speed += 10;
    };
    Rocket.prototype.brake = function () {
        if (this.speed > 0) {
            this.speed -= 10;
        }
        else {
            this.speed = 0;
        }
    };
    Rocket.prototype.getSpeed = function () {
        return this.speed;
    };
    return Rocket;
}());
