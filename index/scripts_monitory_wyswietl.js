//import axios from "axios";

const laptopy = async () => {
  return await axios.get("http://localhost:3000/getmon").then((response) => {
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
    "<td>"+ "Monitor" +"</td>"+
    "<td>"+sprzet.id +"</td>"+
    "<td>"+sprzet.rozmiar +"</td>"+
    "<td>"+sprzet.rozdzielczosc+"</td>"+
    "<td>"+sprzet.zlacza+"</td>"+
    "<td>"+sprzet.typ_matrycy+"</td>"+
  "</tr>"+
"</table>" 
        
      );
    })
    .join("");
 



