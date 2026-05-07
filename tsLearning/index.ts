// use interface type to define the structure of an objest than check voting eligiblity

interface user{
  fname:string;
  lname:string;
  age:number;
  isstudent:boolean;
}
function chckeligblity(user:user){
  if(user.age>=18){
    console.log("you are eligible for vote");
  }
  else{
    console.log("you are not eligible for vote");
  }
}

const user1:user={
  fname:"summit",
  lname:"singh",
  age:22,
  isstudent:true
}
chckeligblity(user1);