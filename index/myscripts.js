//import Axios from "axios";

const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const rpassword = document.getElementById("rpassword")


form.addEventListener('submit', e => {
    e.preventDefault();
    //checkInputs();
    register();
})


const register = () => {

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    axios.post("http://localhost:3000/register", {
        username: usernameValue,
        email: emailValue,
        password: passwordValue,
}).then((response) => {
    console.log(response);
});
}


function checkInputs(){

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const rpasswordValue = rpassword.value.trim();

    // USERNAME ---------------------------------

    if(usernameValue==='' || usernameValue.length < 4){
        username.style.borderColor = "#D93600";
    }
    else{
        username.style.borderColor = "green";
    }

    // EMAIL ---------------------------------

    if(emailValue===''){
        email.style.borderColor = "#D93600";
    }
    else{
        email.style.borderColor = "green";
    }

    // PASSWORD ---------------------------------

    if(passwordValue==='' || passwordValue.length < 7){

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
    }
}

