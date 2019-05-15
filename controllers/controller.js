var rocket1;
var rocket2;
var rocket1Power = [10, 30, 80];
var rocket2Power = [30, 40, 50, 50, 30, 10];
function rocketCreate(x) {
    if (x === 0) {
        rocket1 = new Rocket("32WESSDS", 3, rocket1Power);
    }
    else if (x === 1) {
        rocket2 = new Rocket("LDSFJA32", 6, rocket2Power);
    }
}
function showRocket(x) {
    var rocketInfo;
    if (x === 0) {
        rocketInfo = rocket1.getRocket();
        return rocketInfo;
    }
    else if (x === 1) {
        rocketInfo = rocket2.getRocket();
        return rocketInfo;
    }
}
function rocketSpeed(x) {
    var rocketInfoSpeed;
    if (x === 0) {
        rocketInfoSpeed = rocket1.rocketSpeed();
        return rocketInfoSpeed;
    }
    else if (x === 1) {
        rocketInfoSpeed = rocket2.rocketSpeed();
        return rocketInfoSpeed;
    }
}
function rocketSpeedUp(x) {
    if (x === 0) {
        rocket1.speedUp();
        return rocket1.getSpeed();
    }
    else if (x === 1) {
        rocket2.speedUp();
        return rocket2.getSpeed();
    }
}
function rocketBrake(x) {
    if (x === 0) {
        rocket1.brake();
        return rocket1.getSpeed();
    }
    else if (x === 1) {
        rocket2.brake();
        return rocket2.getSpeed();
    }
}
