//import axios from "axios";

const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const rpassword = document.getElementById("rpassword")

const msg = document.getElementById("msg");
msg.style.color = "red";

form.addEventListener('submit', e => {
    e.preventDefault();
    
    if(checkInputs()){ 
        msg.innerHTML = "";
        location.href = "loggedin.html";
        register();
    }
    else{
        msg.innerHTML = "No field can be empty";
    }
})


const register = () => {

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    console.log(usernameValue);
    console.log(emailValue);
    console.log(passwordValue);

    axios.post("http://localhost:3000/register", {
        username: usernameValue,
        email: emailValue,
        password: passwordValue
}).then((response) => {
    console.log(response);
});

}

function checkInputs(){

    let check = 0;

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const rpasswordValue = rpassword.value.trim();

    // USERNAME ---------------------------------

    if(usernameValue===''){
        username.style.borderColor = "#D93600";
    }
    else{
        username.style.borderColor = "green";
        check++;
    }

    // EMAIL ---------------------------------

    if(emailValue===''){
        email.style.borderColor = "#D93600";
    }
    else{
        email.style.borderColor = "green";
        check++;
    }

    // PASSWORD ---------------------------------

    if(passwordValue===''){

        password.style.borderColor = "#D93600";
        rpassword.style.borderColor = "#D93600";        
    }
    else if(passwordValue!= rpasswordValue){
        
        password.style.borderColor = "#D93600";
        rpassword.style.borderColor = "#D93600";
    }

    else{
        password.style.borderColor = "green";
        rpassword.style.borderColor = "green"
        check++;
    }

    if(check<3) return false;

    return true;
}



