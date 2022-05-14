//import axios from "axios";

const laptopy = async () => {
  return await axios.get("http://localhost:3000/getUser").then((response) => {
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
    "<td>"+sprzet.id +"</td>"+
    "<td>"+sprzet.username +"</td>"+
    "<td>"+sprzet.email+"</td>"+
    "<td>"+sprzet.password+"</td>"+
    "<td>"+sprzet.rights+"</td>"+
  "</tr>"+
"</table>" 
        
      );
    })
    .join("");
 



