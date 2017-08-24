function log(message) {
    console.log(message);
}
var message = 'Hello World';
log(message);
function doSome() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    //console.log('Print Final Value of i ='+i);
}
doSome();
// enum
var color;
(function (color) {
    color[color["Red"] = 0] = "Red";
    color[color["Green"] = 1] = "Green";
    color[color["Blue"] = 2] = "Blue";
})(color || (color = {}));
var backGroundColor = color.Blue;
