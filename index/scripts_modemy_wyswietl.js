//import axios from "axios";

const laptopy = async () => {
  return await axios.get("http://localhost:3000/getmod").then((response) => {
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
    "<td>"+ "Modem" +"</td>"+
    "<td>"+sprzet.id +"</td>"+
    "<td>"+sprzet.typ_modemu +"</td>"+
    "<td>"+sprzet.imei+"</td>"+
    "<td>"+sprzet.login+"</td>"+
    "<td>"+sprzet.haslo+"</td>"+
  "</tr>"+
"</table>" 
        
      );
    })
    .join("");
 



