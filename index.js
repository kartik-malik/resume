var firstName=document.getElementById("first-name");
var lastName=document.getElementById("last-name");
var submitButton=document.getElementById("submitButton");
var submit =function (){
    if(firstName.value==""){
        alert("First Name cannot be empty");
    }
    else {
        alert("Submitted");
    }
}
submitButton.addEventListener("click",submit);