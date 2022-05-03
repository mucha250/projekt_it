//import axios from "axios";


const laptopy = async () => {
    return await axios.get("http://localhost:8081/getitem").then((response) => {
    console.log(response);
    return response;
    });
}

const dane = await laptopy();
console.log(`dane ${dane}`);
var sprzet = dane.data;

// Get the app element
var app = document.querySelector('#app');

// Create markup
app.innerHTML = '<ul>' + sprzet.map(function (sprzet) {
	
    return '<li>' + sprzet.id +" " + sprzet.nazwa_w_domenie + " " + sprzet.typ_ram + " " + '</li>';
}).join('') + '</ul>';









