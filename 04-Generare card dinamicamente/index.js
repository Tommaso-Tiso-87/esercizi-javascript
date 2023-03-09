const cocktails = [
  {
    url: "https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg",
    title: "Old Fashioned",
    description:
      "L'Old Fashioned è un cocktail da aperitivo a base di bourbon in cui vengono dissolti zucchero, angostura bitter ed essenza di scorza d'arancia. Il nome sta per old fashioned whiskey cocktail. È un cocktail ufficiale IBA.",
  },
  {
    url: "https://www.thecocktaildb.com/images/media/drink/hbkfsh1589574990.jpg",
    title: "Whiskey Sour",
    description:
      "Il Whiskey Sour è un cocktail pre-pasto a base di bourbon whiskey con succo di limone, zucchero e albume d'uovo. È un cocktail ufficiale dell'IBA.",
  },
  {
    url: "https://www.thecocktaildb.com/images/media/drink/6ck9yi1589574317.jpg",
    title: "Dry Martini",
    description:
      "Il Martini o Martini Dry è un cocktail pre-dinner a base di gin e vermut dry. È un cocktail ufficiale della International Bartenders Association, con il nome Dry Martini.",
  },
];

// FUNCTION CREATING ALL CARDS
cocktails.forEach((cocktail) => {
  createCard(cocktail);
});

// FUNCTION CREATING A SINGLE CARD
function createCard(cocktail) {
  const card = document.createElement("div");
  card.className = "w-full md:w-1/2 xl:w-1/3 px-4 basis-1/3";

  const innerDiv = document.createElement("div");
  innerDiv.className = "bg-white rounded-lg overflow-hidden mb-10 shadow-xl";
  card.appendChild(innerDiv);

  const immagine = document.createElement("img");
  immagine.src = cocktail.url;
  immagine.className = "w-full";
  innerDiv.appendChild(immagine);

  const textContainer = document.createElement("div");
  textContainer.className = "p-8 sm:p-9 md:p-7 xl:p-9 text-center";
  innerDiv.appendChild(textContainer);

  const titolo = document.createElement("h3");
  titolo.className = "font-semibold text-dark text-xl";
  titolo.appendChild(document.createTextNode(cocktail.title));
  textContainer.appendChild(titolo);

  const descrizione = document.createElement("p");
  descrizione.className = "text-base text-body-color leading-relaxed mb-7";
  descrizione.appendChild(document.createTextNode(cocktail.description));
  textContainer.appendChild(descrizione);

  document.getElementById("container").appendChild(card);
}
