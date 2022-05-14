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
    else{
        msg.innerHTML = "No field can be empty";
    }
})


const licencja = () => {

    const nazwaValue = nazwa.value.trim();
    const kluczValue = klucz.value.trim();

    console.log(nazwaValue);
    console.log(kluczValue);

    axios.post("http://localhost:3000/licencja", {
        nazwa: nazwaValue,
        klucz: kluczValue,
        
}).then((response) => {
    console.log(response);
});

}

function checkInputs(){

    let check = 0;

    const nazwaValue = nazwa.value.trim();
    const kluczValue = klucz.value.trim();

    // NAZWA ---------------------------------

    if(nazwaValue===''){
        nazwa.style.borderColor = "#D93600";
    }
    else{
        nazwa.style.borderColor = "green";
        check++;
    }

    // KLUCZ ---------------------------------

    if(kluczValue===''){
        klucz.style.borderColor = "#D93600";
    }
    else{
        klucz.style.borderColor = "green";
        check++;
    }

    // ID ---------------------------------

    if(check<2) return false;

    return true;
}



