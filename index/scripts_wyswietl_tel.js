//import axios from "axios";

const telefony = async () => {
  return await axios.get("http://localhost:3000/gettel").then((response) => {
    console.log(response);
    return response;
  });
};

const dane = await telefony();
console.log(`dane ${dane}`);
var sprzet = dane.data;

// Get the app element
var app = document.querySelector("#app");

// Create markup
app.innerHTML =
  "<tr>" +
  sprzet
    .map(function (sprzet) {
      return (
        '<table id="customers">' +
        "<th>" +
        "Nazwa sprzętu" +
        "</th>" +
        "<th>" +
        "ID" +
        "</th>" +
        "<th>" +
        "Nazwa w domenie" +
        "</th>" +
        "<th>" +
        "Typ RAM" +
        "</th>" +
        "<th>" +
        "Rozmiar RAM" +
        "</th>" +
        "<th>" +
        "Typ Dysku" +
        "</th>" +
        "<th>" +
        "Rozmiar RAM" +
        "</th>" +
        "<th>" +
        "Napęd" +
        "</th>" +
        "<th>" +
        "Ethernet" +
        "</th>" +
        "<th>" +
        "Ilość USB" +
        "</th>" +
        "</tr>" +
        "<tr>" +
        "<td>" +
        "Laptop" +
        "</td>" +
        "<td>"+
        sprzet.id +
        "</td>" +
        "<td>" +
        sprzet.imei +
        "</td>" +
        "<td>" +
        sprzet.typ_ram +
        "</td>" +
        "<td>" +
        sprzet.rozmiar_ram +
        "</td>" +
        "<td>" +
        sprzet.typ_dysku +
        "</td>" +
        "<td>" +
        sprzet.rozmiar_dysku +
        "</td>" +
        "<td>" +
        sprzet.naped +
        "</td>" +
        "<td>" +
        sprzet.ethernet +
        "</td>" +
        "<td>" +
        sprzet.ilosc_usb +
        "</td>"
        
      );
    })
    .join("") +
  "</tr>" +
  "</table>";

const pracownicyCsv = async () => {
  return await axios
    .get("http://localhost:8081/getPracownicyCsv")
    .then((response) => {
      console.log(response);
      return response;
    });
};

