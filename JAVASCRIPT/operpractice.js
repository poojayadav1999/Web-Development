
/*function one(a,b){
    two(10,10); 
    var c = a+b;
    console.log(c);
}
function two(x,y){
    three(40,40);
    var z = x+y;
    console.log(z);
}
function three(m,n){
    var l = m+n;
    console.log(l);
}
one(20,20);*/


function a(){
    b();
    console.log("in fun a");
  
}
function b(){
    c();
    console.log("in fun b");
    
}
function c(){
    
    console.log("in fun c");
}
a();