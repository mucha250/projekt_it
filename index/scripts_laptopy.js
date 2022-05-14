//import axios from "axios";

const lp = document.getElementById("lp")
const firma = document.getElementById("firma")
const model = document.getElementById("model")
const procesor = document.getElementById("procesor")
const ram = document.getElementById("ram")

const msg = document.getElementById("msg");
msg.style.color = "red";

lp.addEventListener('submit', e => {
    e.preventDefault();

        laptopy();
})



const laptopy = () => {



    const firmaValue = firma.value.trim();
    const modelValue = model.value.trim();
    const procesorValue = procesor.value.trim();
    const ramValue = ram.value.trim();
   

    console.log(firmaValue);
    console.log(modelValue);
    console.log(procesorValue);
    console.log(ramValue);

    axios.post("http://localhost:8080/laptopy", {
        firma: firmaValue,
        model: modelValue,
        procesor: procesorValue,
        ram: ramValue
}).then((response) => {
    console.log(response);
});


}

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

