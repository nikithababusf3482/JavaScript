
 let UserIdIncrement=1001;
class userdetails{
        Userid:string;
        Name:string;
        Age:number;
        MobileNumber:number;
        constructor (paramName:string,paramAge:number,paramMobileNumber:number){
            UserIdIncrement++;

            this.Userid = "MT" + UserIdIncrement.toString();
    
                this.Name=paramName;
                this.Age=paramAge;
                this.MobileNumber=paramMobileNumber;

        }
}
class ticketdetails{
    Ticketnumber:string;
    MovieName:string;
    Seatcount:number;
    UserId:string;
}




let userlist:Array<userdetails>=new Array<userdetails>();
userlist.push(new userdetails("Harish", 23, 9445153060));
userlist.push(new userdetails("nikitha", 22, 9445153060));
console.log(userlist[1]);
console.log(userlist[0]);
let ticketlist:Array<ticketdetails>=new Array<ticketdetails>();

function newuserlogin(){
    let maindiv=(document.getElementById("maindiv")as HTMLElement).style.visibility="hidden";
    let newuserdiv=(document.getElementById("newuserdiv")as HTMLElement).style.visibility="hidden";
    let logindiv=(document.getElementById("logindiv")as HTMLElement).style.visibility="visible";
    let optiondiv=(document.getElementById("optiondiv")as HTMLElement).style.visibility="hidden";
    let bookticketsdiv=(document.getElementById("bookticketdiv")as HTMLElement).style.visibility="hidden";
    let historydiv=(document.getElementById("historydiv")as HTMLElement).style.visibility="hidden";
}//
function newuser(){
    let maindiv=(document.getElementById("maindiv")as HTMLElement).style.visibility="hidden";
    let newuserdiv=(document.getElementById("newuserdiv")as HTMLElement).style.visibility="visible";
    let logindiv=(document.getElementById("logindiv")as HTMLElement).style.visibility="hidden";
    let optiondiv=(document.getElementById("optiondiv")as HTMLElement).style.visibility="hidden";
    let bookticketsdiv=(document.getElementById("bookticketdiv")as HTMLElement).style.visibility="hidden";
    let historydiv=(document.getElementById("historydiv")as HTMLElement).style.visibility="hidden";
    
}
function validateuser(){
    let maindiv=(document.getElementById("maindiv")as HTMLElement).style.visibility="hidden";
    let newuserdiv=(document.getElementById("newuserdiv")as HTMLElement).style.visibility="hidden";
    let logindiv=(document.getElementById("logindiv")as HTMLElement).style.visibility="hidden";
   
    let bookticketsdiv=(document.getElementById("bookticketdiv")as HTMLElement).style.visibility="hidden";
    let historydiv=(document.getElementById("historydiv")as HTMLElement).style.visibility="hidden";
    let userid  = (document.getElementById("userid") as HTMLInputElement).value
    for(let i=0;i<userlist.length;i++)
    {
        if(userid==userlist[i].Userid){
         let optiondiv=(document.getElementById("optiondiv")as HTMLElement).style.visibility="visible";
    }
    else{
        alert("Enter the valid user id");
    }}
    

}//
function booktickets(){
    let maindiv=(document.getElementById("maindiv")as HTMLElement).style.visibility="hidden";
    let newuserdiv=(document.getElementById("newuserdiv")as HTMLElement).style.visibility="hidden";
    let logindiv=(document.getElementById("logindiv")as HTMLElement).style.visibility="hidden";
    let optiondiv=(document.getElementById("optiondiv")as HTMLElement).style.visibility="hidden";
    let bookticketsdiv=(document.getElementById("bookticketdiv")as HTMLElement).style.visibility="visible";
    let historydiv=(document.getElementById("historydiv")as HTMLElement).style.visibility="hidden";
    
}//
function showhistory(){
    let maindiv=(document.getElementById("maindiv")as HTMLElement).style.visibility="hidden";
    let newuserdiv=(document.getElementById("newuserdiv")as HTMLElement).style.visibility="hidden";
    let logindiv=(document.getElementById("logindiv")as HTMLElement).style.visibility="hidden";
    let optiondiv=(document.getElementById("optiondiv")as HTMLElement).style.visibility="hidden";
    let bookticketsdiv=(document.getElementById("bookticketdiv")as HTMLElement).style.visibility="hidden";
    let historydiv=(document.getElementById("historydiv")as HTMLElement).style.visibility="visible";
    
}//
function confirmtickets(){
    
    let maindiv=(document.getElementById("maindiv")as HTMLElement).style.visibility="visible";
    let newuserdiv=(document.getElementById("newuserdiv")as HTMLElement).style.visibility="hidden";
    let logindiv=(document.getElementById("logindiv")as HTMLElement).style.visibility="hidden";
    let optiondiv=(document.getElementById("optiondiv")as HTMLElement).style.visibility="hidden";
    let bookticketsdiv=(document.getElementById("bookticketdiv")as HTMLElement).style.visibility="hidden";
    let historydiv=(document.getElementById("historydiv")as HTMLElement).style.visibility="hidden";
}//
function adduser(){
    let maindiv=(document.getElementById("maindiv")as HTMLElement).style.visibility="visible";
    let newuserdiv=(document.getElementById("newuserdiv")as HTMLElement).style.visibility="hidden";
    let logindiv=(document.getElementById("logindiv")as HTMLElement).style.visibility="hidden";
    let optiondiv=(document.getElementById("optiondiv")as HTMLElement).style.visibility="hidden";
    let bookticketsdiv=(document.getElementById("bookticketdiv")as HTMLElement).style.visibility="hidden";
    let historydiv=(document.getElementById("historydiv")as HTMLElement).style.visibility="hidden";
    
}//
