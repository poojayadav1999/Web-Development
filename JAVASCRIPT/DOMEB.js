debugger;
function demo(){
      var veg = document.getElementById('one')
                 document.getElementById('one').style="color:green";
       const arr  = ["pizza","burger","sandwitch"];
      
       var con = " "
      for(let i=0; i<arr.length; i++){
           
        var z = arr[i];
        con = con + z;
        veg.innerHTML = con;
       
      }   
}
function demo1(){
     var nonveg = document.getElementById('two');
     
     const arr1 = ["chicken","fish","eggs"];
     var str=" ";
     for(let i=0; i<arr1.length; i++){
         var x = arr1[i];
         str = str + x;
         nonveg.innerHTML = str;
     }
}

