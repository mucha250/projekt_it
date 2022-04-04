//import axios from "axios";

const form = document.getElementById("form")
const email = document.getElementById("email")
const password = document.getElementById("password")

form.addEventListener('submit', e => {
    e.preventDefault();
    //checkInputs();
    login();
})


const login = () => {

    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    // console.log(emailValue);
    // console.log(passwordValue);

    axios.post("http://localhost:3000/login", {
        email: emailValue,
        password: passwordValue
}).then((response) => {

    if(response.data.message){
        console.log(response.data);
        console.log("UZYTKOWNIK  NIE ISTNIEJE");
    }else {
        location.href = "panel.html";
    }

});

}
