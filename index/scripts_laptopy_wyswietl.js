//import axios from "axios";

const laptopy = async () => {
  return await axios.get("http://localhost:3000/getlapt").then((response) => {
    console.log(response);
    return response;
  });
};

const dane = await laptopy();
console.log(`dane ${dane}`);
var sprzet = dane.data;

// Get the app element
var app = document.querySelector("#app");

// Create markup
app.innerHTML =

  sprzet
    .map(function (sprzet) {
      
      return (
        
        
  "<table id = laptopyjava>"+
  "<tr>"+
    "<td>"+"Laptop"+"</td>"+
    "<td>"+sprzet.id +"</td>"+
    "<td>"+sprzet.nazwa_w_domenie +"</td>"+
    "<td>"+sprzet.typ_ram+"</td>"+
    "<td>"+sprzet.rozmiar_ram+"</td>"+
    "<td>"+sprzet.typ_dysku+"</td>"+
    "<td>"+sprzet.rozmiar_dysku+"</td>"+
    "<td>"+sprzet.ethernet+"</td>"+
    "<td>"+sprzet.ilosc_usb+"</td>"+
  "</tr>"+
"</table>" 
        
      );
    })
    .join("");
 



