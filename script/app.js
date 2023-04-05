'use strict';
  let personName=prompt("Enter Your Name !");
  
var gender;
var genderMale="male";
var genderFemale="female";

  let personGender=prompt("What Is Your Gender ?");
    if(personGender.toUpperCase()==genderFemale.toUpperCase()) {
    gender="Ms";}
  else if(personGender.toUpperCase()==genderMale.toUpperCase()){
    gender="Mr";
  }
  else {
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
 