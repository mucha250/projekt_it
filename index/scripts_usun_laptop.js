//import axios from "axios";

const form = document.getElementById("form")
const nazwa_w_domenie = document.getElementById("nazwa_w_domenie")
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

    const nazwa_w_domenieValue = nazwa_w_domenie.value.trim();

    console.log(nazwa_w_domenieValue);

    axios.post("http://localhost:3000/usunlaptop", {
        nazwa_w_domenie: nazwa_w_domenieValue,

        
}).then((response) => {
    console.log(response);
});

}

function checkInputs(){

    let check = 2;

    //const nazwa_w_domenieValue = nazwa_w_domenie.value.trim();

    // NAZWA ---------------------------------

    

    // KLUCZ ---------------------------------

    // ID ---------------------------------

    if(check<2) return false;

    return true;
}



