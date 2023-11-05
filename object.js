//
//object constructors 

const person={
    firstname:"wycliffe",
    middlename:"musango",
    lastname:"willy",
    age:23,
    email:"musangowilly@gmail.com",
    hobbies:["football","movies","cycling"],
    address:{
        streetname:"4th street",
        no:7,
        city:"nairobi",
    }
    const name="wycliife"
}
js.prototype.getFullname=function(){
    console.log(wycliffe);
}
const wycliffe=new js("wycliffe","musango","willy",23,"musangowilly@gmail.com");

const lewis=new js("lewis","machabe",37,"lewis@gmail.com");

const jsArr=[sharon,lewis]


//new object constructors and prototype

//object constructors 

function js(firstname,lastname,age,email){

    this.firstname=firstname;
    this.lastname=lastname;
    this.age=age;
    this.email=email;
}

js.prototype.getFullname=function(){
    return this.firstname + " " + this.lastname;
}
const name="sharon";

function call(){
    console.log(name)



