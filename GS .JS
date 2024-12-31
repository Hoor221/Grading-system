function calculate(){
    const a = Number(document.getElementById("s1").value)
    const b = Number(document.getElementById("s2").value)
    const c = Number(document.getElementById("s3").value)
    const d = Number(document.getElementById("s4").value)
    
    //if value is greater than 100 it will show  alert
    if (a>100 || b>100 || c>100 || d>100){
        alert("Please enter correct value");
    }
    
    else{
      
        //OBTAIN
        const  Obtain = (a+b+c+d) ;
        document.getElementById("obtain").innerHTML = Obtain;
        //PERCENTAGE
        const  Percentage = Obtain/400*100  ;
        document.getElementById("per").innerHTML = Percentage ;
        //REMARKS
       if(Percentage>40){
        document.getElementById("remarks").innerHTML = "<span style='color:lightgreen; font-weight:800;'>PASS</span>";
       }
       else{
        document.getElementById("remarks").innerHTML = "<span  style='font-weight:800;color:rgb(255, 52, 16);' >FAIL</span>" ;
       }
       //GRADE
       if(Percentage>70){ 
        document.getElementById("grade").innerHTML="<span class='text-success'>A</span>";
      
       }
       else if(Percentage>=60){
        document.getElementById("grade").innerHTML="<span class='text-info'>B</span>";
       } 
       else if(Percentage>=50){
        document.getElementById("grade").innerHTML="<span class='text-warning'>C</span>";
       }
       else if(Percentage>=40){
        document.getElementById("grade").innerHTML="<span class='text-warning'>D</span>";
       }
       else{
        document.getElementById("grade").innerHTML="<span class='text-danger'>F</span>";
       }
}

}