var Car;
(function (Car) {
    Car[Car["CLIO"] = 0] = "CLIO";
    Car[Car["_1_SERIES"] = 1] = "_1_SERIES";
    Car[Car["A_CLASS"] = 2] = "A_CLASS";
    Car[Car["FOCUS"] = 3] = "FOCUS";
})(Car || (Car = {}));
;
const vehicle = {
    model: Car.FOCUS
};
if (vehicle.model === Car.FOCUS) {
    console.log("Then do something");
}
