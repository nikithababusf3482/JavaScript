var UserIdIncrement = 1001;
var userdetails = /** @class */ (function () {
    function userdetails(paramName, paramAge, paramMobileNumber) {
        UserIdIncrement++;
        this.Userid = "MT" + UserIdIncrement.toString();
        this.Name = paramName;
        this.Age = paramAge;
        this.MobileNumber = paramMobileNumber;
    }
    return userdetails;
}());
var ticketdetails = /** @class */ (function () {
    function ticketdetails() {
    }
    return ticketdetails;
}());
var userlist = new Array();
userlist.push(new userdetails("Harish", 23, 9445153060));
userlist.push(new userdetails("nikitha", 22, 9445153060));
console.log(userlist[1]);
console.log(userlist[0]);
var ticketlist = new Array();
function newuserlogin() {
    var maindiv = document.getElementById("maindiv").style.visibility = "hidden";
    var newuserdiv = document.getElementById("newuserdiv").style.visibility = "hidden";
    var logindiv = document.getElementById("logindiv").style.visibility = "visible";
    var optiondiv = document.getElementById("optiondiv").style.visibility = "hidden";
    var bookticketsdiv = document.getElementById("bookticketdiv").style.visibility = "hidden";
    var historydiv = document.getElementById("historydiv").style.visibility = "hidden";
} //
function newuser() {
    var maindiv = document.getElementById("maindiv").style.visibility = "hidden";
    var newuserdiv = document.getElementById("newuserdiv").style.visibility = "visible";
    var logindiv = document.getElementById("logindiv").style.visibility = "hidden";
    var optiondiv = document.getElementById("optiondiv").style.visibility = "hidden";
    var bookticketsdiv = document.getElementById("bookticketdiv").style.visibility = "hidden";
    var historydiv = document.getElementById("historydiv").style.visibility = "hidden";
}
function validateuser() {
    var maindiv = document.getElementById("maindiv").style.visibility = "hidden";
    var newuserdiv = document.getElementById("newuserdiv").style.visibility = "hidden";
    var logindiv = document.getElementById("logindiv").style.visibility = "hidden";
    var bookticketsdiv = document.getElementById("bookticketdiv").style.visibility = "hidden";
    var historydiv = document.getElementById("historydiv").style.visibility = "hidden";
    var userid = document.getElementById("userid").value;
    for (var i = 0; i < userlist.length; i++) {
        if (userid == userlist[i].Userid) {
            var optiondiv = document.getElementById("optiondiv").style.visibility = "visible";
        }
        else {
            alert("Enter the valid user id");
        }
    }
} //
function booktickets() {
    var maindiv = document.getElementById("maindiv").style.visibility = "hidden";
    var newuserdiv = document.getElementById("newuserdiv").style.visibility = "hidden";
    var logindiv = document.getElementById("logindiv").style.visibility = "hidden";
    var optiondiv = document.getElementById("optiondiv").style.visibility = "hidden";
    var bookticketsdiv = document.getElementById("bookticketdiv").style.visibility = "visible";
    var historydiv = document.getElementById("historydiv").style.visibility = "hidden";
} //
function showhistory() {
    var maindiv = document.getElementById("maindiv").style.visibility = "hidden";
    var newuserdiv = document.getElementById("newuserdiv").style.visibility = "hidden";
    var logindiv = document.getElementById("logindiv").style.visibility = "hidden";
    var optiondiv = document.getElementById("optiondiv").style.visibility = "hidden";
    var bookticketsdiv = document.getElementById("bookticketdiv").style.visibility = "hidden";
    var historydiv = document.getElementById("historydiv").style.visibility = "visible";
} //
function confirmtickets() {
    var maindiv = document.getElementById("maindiv").style.visibility = "visible";
    var newuserdiv = document.getElementById("newuserdiv").style.visibility = "hidden";
    var logindiv = document.getElementById("logindiv").style.visibility = "hidden";
    var optiondiv = document.getElementById("optiondiv").style.visibility = "hidden";
    var bookticketsdiv = document.getElementById("bookticketdiv").style.visibility = "hidden";
    var historydiv = document.getElementById("historydiv").style.visibility = "hidden";
} //
function adduser() {
    var maindiv = document.getElementById("maindiv").style.visibility = "visible";
    var newuserdiv = document.getElementById("newuserdiv").style.visibility = "hidden";
    var logindiv = document.getElementById("logindiv").style.visibility = "hidden";
    var optiondiv = document.getElementById("optiondiv").style.visibility = "hidden";
    var bookticketsdiv = document.getElementById("bookticketdiv").style.visibility = "hidden";
    var historydiv = document.getElementById("historydiv").style.visibility = "hidden";
} //
