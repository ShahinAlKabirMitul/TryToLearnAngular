
function log(message){
    console.log(message);
}
var message='Hello World';
log(message);
function doSome(){
    for(let i=0;i<5;i++){
        console.log(i);
    }
    //console.log('Print Final Value of i ='+i);
}

doSome();

// enum
enum color{Red=0,Green=1,Blue=2}
let backGroundColor=color.Blue;
