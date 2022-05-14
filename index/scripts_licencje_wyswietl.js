//import axios from "axios";

const laptopy = async () => {
  return await axios.get("http://localhost:3000/getlic").then((response) => {
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
    "<td>"+ "Licencje" +"</td>"+
    "<td>"+sprzet.id +"</td>"+
    "<td>"+sprzet.nazwa +"</td>"+
    "<td>"+sprzet.klucz_produktu+"</td>"+
  "</tr>"+
"</table>" 
        
      );
    })
    .join("");
 



