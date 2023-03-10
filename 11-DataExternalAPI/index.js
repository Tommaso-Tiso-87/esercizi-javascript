const select = document.getElementById("breeds");
const container = document.getElementById("container");

fetch("https://dog.ceo/api/breeds/list/all")
  .then((response) => response.json())
  .then((data) => {
    const obj = data.message;
    Object.keys(obj).forEach((key) => {
      if (obj[key].length == 0) {
        createOptions(key);
      } else {
        console.log(key);
        obj[key].forEach((element) => {
          createOptions(`${element} ${key}`);
        });
      }
    });
    caricaDati(select.value);
  });

function createOptions(value) {
  const option = document.createElement("option");
  option.value = value;
  option.appendChild(document.createTextNode(value));
  select.appendChild(option);
}
select.addEventListener("change", (e) => {
  console.log(e.target.value);
});

function caricaDati(breed) {
  if (breed == "") return;
  fetch(`https://dog.ceo/api/${breed}/images`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      generaCard(data.message);
    });
}

function generaCard(photos) {
  photos.sort(() => Math.random() - 0.5);
  photos.forEach((photo) => {
    const card = document.createElement("div");
    card.className = "cardDog";
    card.style.backgroundImage = `url(${photo})`;
    // card.style.background
    container.appendChild(card);
  });
}
