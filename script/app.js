'use strict';
  let personName=prompt("Enter Your Name !");
  
var gender;
  let personGender=prompt("What Is Your Gender ?");
  if(personGender=="man" ||personGender=="MAN" ||personGender=="Man" ){
    gender="Mr";
  }else if(personGender=="woman" ||personGender=="WOMAN"||personGender=="Woman"){
    gender="Ms";
  }else{
     gender=" ";
  }

  let personAge=prompt("Enter Your Age!");
  if(personAge>=0){
    let mas="Yor Age Is Equal Zero";
    alert(mas);
  }else{
    let mas="Yor Age Is Less Than Zero";
    alert(mas);
  }

  let welcom=confirm("Do you Want To Skip Welcoming Masseg?");
  let peersonChoise= (welcom)?"welcom" : alert("Hi "+gender+" "+personName) ; 
 