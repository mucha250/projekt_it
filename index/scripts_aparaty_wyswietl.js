//import axios from "axios";

const laptopy = async () => {
  return await axios.get("http://localhost:3000/getapar").then((response) => {
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
    "<td>"+ "Aparat" +"</td>"+
    "<td>"+sprzet.id +"</td>"+
    "<td>"+sprzet.typ +"</td>"+
    "<td>"+sprzet.obiektyw+"</td>"+
    "<td>"+sprzet.pamiec+"</td>"+
  "</tr>"+
"</table>" 
        
      );
    })
    .join("");
 



