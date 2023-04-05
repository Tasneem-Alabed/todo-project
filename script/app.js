'use strict';
 var useData;
function selectGender(){
  let personGender=prompt("What Is Your Gender ?");
  var gender;
  var genderMale="male";
  var genderFemale="female";
  
  if(personGender.toUpperCase()==genderFemale.toUpperCase()) {
    gender="Ms";}
  else if(personGender.toUpperCase()==genderMale.toUpperCase()){
    gender="Mr";
  }
  else {
     gender=" ";
  }
  return gender;
}
function userAge(){
  let personAge=prompt("Enter Your Age!");
  
  if(personAge==0){
    let mas="Yor Age Is Equal Zero";
    alert(mas);
  }else if(personAge<0){
    let mas="Yor Age Is Less Than Zero";
    alert(mas);
  }
return personAge;
}

function  gitUserName(){
   let personName = prompt("Enter Your Name !");

return personName;
}
 
function welomeMass(){
   let name=gitUserName();
   let gender2= selectGender();
  let ageUser= userAge();
  useData=[name , gender2 , ageUser ]
    let welcom=confirm("Do you Want To Skip Welcoming Masseg?");
    let peersonChoise= (welcom)?"welcom" : alert("Hi "+ gender2  +" "+ name) ; 
    return peersonChoise;
  }
  welomeMass();

function checkAnswer(dataCome){
  let answerYey = "Yes";
  let answerNo = "no";
  if(answerYey.toUpperCase() == dataCome.toUpperCase()){
    
    return "Yes";

  }else if(answerNo.toUpperCase() == dataCome.toUpperCase()){
    
    return "No";
  }else {
   
    return "invalid";
  }

}  
function getMoreData(){
     alert ("Please Answer Yes Or No Thies Therr Question");
    let haveJop= prompt("Do you have A jop ?");
    let answerJop = checkAnswer(haveJop);
     useData.push(answerJop);
    let canDraive = prompt ("Can Yo Drive ?");
    let answerDrive= checkAnswer(canDraive) ;
    useData.push(answerDrive);
    let finishStudy = prompt ("Are You Still Stady Or Not ?")
    let answerStudy = checkAnswer(finishStudy);
    useData.push(answerStudy);
    console.log(answerJop+" " + answerDrive + " "+ answerStudy);
     
    console.log(useData);
  }
  getMoreData();

   


  