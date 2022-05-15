//import axios from "axios";

const form = document.getElementById("form")
const id = document.getElementById("typ")
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

    const typValue = typ.value.trim();

    console.log(typValue);

    axios.post("http://localhost:3000/usunaparat", {
        typ: typValue,

        
}).then((response) => {
    console.log(response);
});

}

function checkInputs(){

    let check = 1;

    const typValue = typ.value.trim();

    // NAZWA ---------------------------------

    if(typValue===''){
        typ.style.borderColor = "#D93600";
    }
    else{
        typ.style.borderColor = "green";
        check++;
    }

    // KLUCZ ---------------------------------

    // ID ---------------------------------

    if(check<2) return false;

    return true;
}



