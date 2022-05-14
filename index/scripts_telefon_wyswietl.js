//import axios from "axios";

const laptopy = async () => {
  return await axios.get("http://localhost:3000/gettel").then((response) => {
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
        
        
  "<table>"+
  "<tr>"+
    "<td>"+ "Telefon" +"</td>"+
    "<td>"+sprzet.id +"</td>"+
    "<td>"+sprzet.imei +"</td>"+
    "<td>"+sprzet.rozmiar_ram+"</td>"+
    "<td>"+sprzet.pamiec_wewnetrzna+"</td>"+
    "<td>"+sprzet.rozmiar+"</td>"+
    "<td>"+sprzet.rozmiar_mpx_tyl+"</td>"+
  "</tr>"+
"</table>" 
        
      );
    })
    .join("");
 



