//import axios from "axios";

const form = document.getElementById("form")
const nazwa = document.getElementById("nazwa")
const typ = document.getElementById("typ")


const msg = document.getElementById("msg");
// msg.style.color = "red";

form.addEventListener('submit', e => {
    e.preventDefault();
    
    if(checkInputs()){ 
        msg.innerHTML = "";
        // location.href = "loggedin.html";
        licencja();
    }
    else{
        msg.innerHTML = "No field can be empty";
    }
})


const licencja = () => {

    const nazwaValue = nazwa.value.trim();
    const typValue = typ.value.trim();

    axios.post("http://localhost:3000/peryferia", {
        nazwa: nazwaValue,
        typ: typValue,
        
}).then((response) => {
    console.log(response);
});

}

function checkInputs(){

    let check = 0;

    const nazwaValue = nazwa.value.trim();
    const typValue = typ.value.trim();

    // NAZWA ---------------------------------

    if(nazwaValue===''){
        nazwa.style.borderColor = "#D93600";
    }
    else{
        nazwa.style.borderColor = "green";
        check++;
    }

    // KLUCZ ---------------------------------

    if(typValue===''){
        typ.style.borderColor = "#D93600";
    }
    else{
        typ.style.borderColor = "green";
        check++;
    }

    // ID ---------------------------------

    if(check<2) return false;

    return true;
}



