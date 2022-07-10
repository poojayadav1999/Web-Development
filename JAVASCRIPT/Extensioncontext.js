function a(){
    b();
    console.log("In function a()");
   
}
function b(){
    console.log("In function b()");
    c();
}
function c(){
    console.log("In function c()");
}
a();
