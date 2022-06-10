// Example 1: This object is of type EasyToDrive and must comply with the definition of the above interface
var ford;
ford = {
    gears: "Semi-Automatic",
    intelliMode: true,
    changeDriveMode: function (intelliMode) {
        console.log("Drive mode changed " + intelliMode);
    }
};
ford.changeDriveMode(true);
// Example 2: 
var Audi = /** @class */ (function () {
    function Audi(amod) {
        this.audiModel = amod;
    }
    Audi.prototype.changeDriveMode = function (intelliMode) {
        console.log("Drive mode changed to Audi Hybrid Economical");
    };
    return Audi;
}());
var audi;
audi = new Audi('TT');
audi.changeDriveMode(true);
