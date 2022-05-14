//import axios from "axios";

const laptopy = async () => {
  return await axios.get("http://localhost:3000/getitem").then((response) => {
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
  "<tr>" +
  sprzet
    .map(function (sprzet) {
      return (
        '<table id="customers">' +
        "<tr>" +
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
        "<td>" +
        sprzet.id +
        "</td>" +
        "<td>" +
        sprzet.nazwa_w_domenie +
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
        "</td>" +
        "</tr>" +
        "<tr>" +
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
        "Telefon" +
        "</td>" +
        "<td>" +
        sprzet.id +
        "</td>" +
        "<td>" +
        sprzet.nazwa_w_domenie +
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
        "</td>" +
        "</tr>" +
        "<tr>" +
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
        "Monitor" +
        "</td>" +
        "<td>" +
        sprzet.id +
        "</td>" +
        "<td>" +
        sprzet.nazwa_w_domenie +
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
        "</td>" +
        "</tr>"
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

