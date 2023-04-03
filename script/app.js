'use strict';
  let personName=prompt("Enter Your Name !");
  
var gender;
  let personGender=prompt("What Is Your Gender ?");
  if(personGender.localeCompare("male")){
    gender="Ms";
  }else if(personGender.localeCompare("female") ){
    gender="Mr";
  }else{
     gender=" ";
  }

  let personAge=prompt("Enter Your Age!");
  if(personAge==0){
    let mas="Yor Age Is Equal Zero";
    alert(mas);
  }else if(personAge<0){
    let mas="Yor Age Is Less Than Zero";
    alert(mas);
  }

  let welcom=confirm("Do you Want To Skip Welcoming Masseg?");
  let peersonChoise= (welcom)?"welcom" : alert("Hi "+gender+" "+personName) ; 
 