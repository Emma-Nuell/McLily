import { cityOptions } from "./import.js"
const ebutton = document.getElementById("edit")
const dstate = document.getElementById("dstate")
const dlga = document.getElementById("dlga")
const editInfo = document.getElementById("edit-info")
const addressInfo = document.getElementById("address")
const infoHeader = document.getElementById("info-header")
const footer = document.querySelector("footer")
console.log(footer)

ebutton.addEventListener("click", () => {
    infoHeader.innerHTML = `<span><i class="ri-arrow-left-line"></i><h3>Edit Delivery Address</h3></span>`
    addressInfo.style.display = "none"
    editInfo.style.display = "flex"
    footer.style.position = "sticky"
})

function updateCityDropdown() {
    const selectedState = dstate.value;

    dlga.innerHTML = '';

    cityOptions[selectedState].forEach(element => {
        const option = document.createElement("option");
        option.text = element;
        dlga.appendChild(option);
    });
}

updateCityDropdown();
dstate.addEventListener("change", updateCityDropdown)