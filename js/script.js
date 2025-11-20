const list = ["Sale", "Zucchero", "Pasta", "Fagioli", "Carne", "Acqua"]

let i = 0;

let ul_container = document.querySelector(".shopping-list");

while (i < list.length) {
    let item = list[i];
    let elemnet = `<li>${item}</li>`;
    ul_container.innerHTML += elemnet;
    i++;
}