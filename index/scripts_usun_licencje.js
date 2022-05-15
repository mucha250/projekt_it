//import axios from "axios";

const form = document.getElementById("form")
const nazwa = document.getElementById("nazwa")
const klucz = document.getElementById("klucz")
const id_sprzet = document.getElementById("id_sprzet")

const msg = document.getElementById("msg");
// msg.style.color = "red";

form.addEventListener('submit', e => {
    e.preventDefault();
    
    if(checkInputs()){ 
        msg.innerHTML = "";
        // location.href = "loggedin.html";
        licencja();
    }
   
})


const licencja = () => {

    const nazwaValue = nazwa.value.trim();

    console.log(nazwaValue);

    axios.post("http://localhost:3000/usun", {
        nazwa: nazwaValue,

        
}).then((response) => {
    console.log(response);
});

}

function checkInputs(){

    let check = 1;

    const nazwaValue = nazwa.value.trim();

    // NAZWA ---------------------------------

    if(nazwaValue===''){
        nazwa.style.borderColor = "#D93600";
    }
    else{
        nazwa.style.borderColor = "green";
        check++;
    }

    // KLUCZ ---------------------------------

    // ID ---------------------------------

    if(check<2) return false;

    return true;
}



