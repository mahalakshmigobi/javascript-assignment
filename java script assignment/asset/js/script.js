const signup=document.getElementById("signup-form");
const passcode=document.getElementById("usepwd");
const confirmpasscode=document.getElementById("confirm-pwd");


function validateform() {
    let pwd=passcode.Value;
    let confirmpwd=confirmpasscode.Value;
    console.log(pwd,confirmpwd);
alert("hey check out console");
if(pwd.length < 8){
    alert("password should be 8 character");

}
if(pwd !==confirmpwd){
    alert("password should not match");
}
}
signup.addEventListener("submit",()=>{
    validateform();
});