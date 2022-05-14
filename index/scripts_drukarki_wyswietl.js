//import axios from "axios";

const laptopy = async () => {
  return await axios.get("http://localhost:3000/getdruk").then((response) => {
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
    "<td>"+ "Drukarki" +"</td>"+
    "<td>"+sprzet.id +"</td>"+
    "<td>"+sprzet.nazwa +"</td>"+
    "<td>"+sprzet.typ+"</td>"+
    "<td>"+sprzet.imei+"</td>"+
    "<td>"+sprzet.mac+"</td>"+
    "<td>"+sprzet.ip+"</td>"+
    "<td>"+sprzet.login+"</td>"+
    "<td>"+sprzet.haslo+"</td>"+
  "</tr>"+
"</table>" 
        
      );
    })
    .join("");
 



