let big = 0, medium = 0, small = 0;
function ParkingSystem (big, medium, small) {
    this.big = big;
    this.medium = medium;
    this.small = small;
}

ParkingSystem.prototype.addCar = function(carType) {
    if (carType == 1) {
        if (this.big > 0) { this.big--; return true; }
        else return false;
    }
    if (carType == 2) {
        if (this.medium > 0) { this.medium--; return true; }
        else return false;
    }
    if (carType == 3) {
        if (this.small > 0) { this.small--; return true; }
        else return false;
    }
};
