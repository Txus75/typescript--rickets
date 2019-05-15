//Disparadores
var createRocket_1 = document.querySelector("#createRocket1");
var createRocket_2 = document.querySelector("#createRocket2");
var infoRocket_1 = document.querySelector("#printRocket1");
var infoRocket_2 = document.querySelector("#printRocket2");
var acelerateRocket_1 = document.querySelector("#accelRocket1");
var acelerateRocket_2 = document.querySelector("#accelRocket2");
var brakeRocket_1 = document.querySelector("#breakRocket1");
var brakeRocket_2 = document.querySelector("#breakRocket2");
//Creación de cohetes
createRocket_1.addEventListener("click", function () {
    var rocket_1Img = document.querySelector("#rocket_1");
    createRocket_1.classList.add("d-none");
    rocket_1Img.classList.remove("d-none");
    infoRocket_1.classList.remove("d-none");
    rocketCreate(0);
});
createRocket_2.addEventListener("click", function () {
    var rocket_2Img = document.querySelector("#rocket_2");
    createRocket_2.classList.add("d-none");
    rocket_2Img.classList.remove("d-none");
    infoRocket_2.classList.remove("d-none");
    rocketCreate(1);
});
//Print info
infoRocket_1.addEventListener("click", function () {
    var rocket_1 = showRocket(0);
    var rocket_1Text = "";
    var showRocket1Name = document.querySelector("#rocket_1Name");
    var showRocket_1Text = document.querySelector("#rocket_1Info");
    showRocket1Name.innerHTML = rocket_1["rocketID"];
    rocket_1Text += "<h4>";
    rocket_1Text += "Has " + rocket_1["propellers"] + " thrusters. ";
    for (var m = 0; m < rocket_1["propellersMaxpower"].length; m++) {
        rocket_1Text += rocket_1["propellersMaxpower"][m] + ", ";
    }
    rocket_1Text = rocket_1Text.slice(0, -2);
    rocket_1Text += "</h4><h4>Speed: " + rocketSpeed(0);
    rocket_1Text += "</h4>";
    showRocket_1Text.innerHTML = rocket_1Text;
});
infoRocket_2.addEventListener("click", function () {
    var rocket_2 = showRocket(1);
    var rocket_2Text = "";
    var showRocket2Name = document.querySelector("#rocket_2Name");
    var showRocket_2Text = document.querySelector("#rocket_2Info");
    showRocket2Name.innerHTML = rocket_2["rocketID"];
    rocket_2Text += "<h4>";
    rocket_2Text += "Has " + rocket_2["propellers"] + " thrusters. ";
    for (var m = 0; m < rocket_2["propellersMaxpower"].length; m++) {
        rocket_2Text += rocket_2["propellersMaxpower"][m] + ", ";
    }
    rocket_2Text = rocket_2Text.slice(0, -2);
    rocket_2Text += "</h4><h4>Speed: " + rocketSpeed(1);
    rocket_2Text += "</h4>";
    showRocket_2Text.innerHTML = rocket_2Text;
});
//Acelerar cohetes
var showRocket1Acelerate = document.querySelector("#acelerate1");
var showRocket2Acelerate = document.querySelector("#acelerate2");
acelerateRocket_1.addEventListener("click", function () {
    showRocket1Acelerate.innerHTML = "<h4>Aceleration: " + rocketSpeedUp(0) + "</h4>";
});
acelerateRocket_2.addEventListener("click", function () {
    showRocket2Acelerate.innerHTML = "<h4>Aceleration: " + rocketSpeedUp(1) + "</h4>";
});
//Frenar cohetes
brakeRocket_1.addEventListener("click", function () {
    showRocket1Acelerate.innerHTML = "<h4>Aceleration: " + rocketBrake(0) + "</h4>";
});
brakeRocket_2.addEventListener("click", function () {
    showRocket2Acelerate.innerHTML = "<h4>Aceleration: " + rocketBrake(1) + "</h4>";
});
