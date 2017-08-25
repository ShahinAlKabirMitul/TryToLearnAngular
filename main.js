var log = function (message) {
    console.log(message);
};
var doLog = function (message) {
    console.log(message);
};
// enum
var color;
(function (color) {
    color[color["Red"] = 0] = "Red";
    color[color["Green"] = 1] = "Green";
    color[color["Blue"] = 2] = "Blue";
})(color || (color = {}));
var backGroundColor = color.Blue;
var Point = (function () {
    function Point() {
    }
    Point.prototype.drow = function () {
        console.log('X: ' + this.x + ' , Y : ' + this.y);
    };
    return Point;
}());
var point = new Point();
point.x = 10;
point.y = 12;
point.drow();
