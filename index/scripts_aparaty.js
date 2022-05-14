//import axios from "axios";

const form = document.getElementById("form")
const typ = document.getElementById("typ")
const obiektyw = document.getElementById("obiektyw")
const pamiec = document.getElementById("pamiec")


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

    const typValue = typ.value.trim();
    const obiektywValue = obiektyw.value.trim();
    const pamiecValue = pamiec.value.trim();

    axios.post("http://localhost:3000/aparaty", {
        typ: typValue,
        obiektyw: obiektywValue,
        pamiec: pamiecValue,
        
}).then((response) => {
    console.log(response);
});

}

function checkInputs(){

    let check = 0;

    const typValue = typ.value.trim();
    const obiektywValue = obiektyw.value.trim();
    const pamiecValue = pamiec.value.trim();

    // NAZWA ---------------------------------

    if(typValue===''){
        typValue.style.borderColor = "#D93600";
    }
    else{
        typ.style.borderColor = "green";
        check++;
    }

    // KLUCZ ---------------------------------

    if(obiektywValue===''){
        obiektyw.style.borderColor = "#D93600";
    }
    else{
        obiektyw.style.borderColor = "green";
        check++;
    }

    // ID ---------------------------------

    if(pamiecValue===''){
        pamiec.style.borderColor = "#D93600";
    }
    else{
        pamiec.style.borderColor = "green";
        check++;
    }

    if(check<3) return false;

    return true;
}



