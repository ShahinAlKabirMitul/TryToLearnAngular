let log=function(message){
    console.log(message);
    
}
let doLog=(message)=>{
    console.log(message);
}



// enum
enum color{Red=0,Green=1,Blue=2}
let backGroundColor=color.Blue;


class Point{
    x:number;
    y:number;
    drow(){
        console.log('X: '+this.x +' , Y : '+this.y)
    }
}

let point=new Point();
point.x=10;
point.y=12;
point.drow();
