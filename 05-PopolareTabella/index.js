// OBJECTS ARRAY

const data = [
  {
    id: 1,
    nome: "Tommaso",
    cognome: "Tiso",
    email: "t.tiso@gmail.com",
    codiceFiscale: "TSIGRE56Y78U654W",
    indirizzo: "via Benevento,55",
  },
  {
    id: 2,
    nome: "Gab",
    cognome: "Catalano",
    email: "g.catalano@tim.com",
    codiceFiscale: "SERYUI88M987R",
    indirizzo: "via Roma,88",
  },
  {
    id: 3,
    nome: "Lux",
    cognome: "D'Occhio",
    email: "occhio.l@gmail.com",
    codiceFiscale: "ASDTRE34R456I",
    indirizzo: "via Milano,12",
  },
  {
    id: 4,
    nome: "Francesco",
    cognome: "Taranto",
    email: "f.taro@virgilio.com",
    codiceFiscale: "ASDGRE65RA789O",
    indirizzo: "via Milano,12",
  },
  {
    id: 5,
    nome: "Mariangela",
    cognome: "Zoe",
    email: "m.zoe@gmail.com",
    codiceFiscale: "POITRE56A78P87N",
    indirizzo: "via Glasgow, 23",
  },
  {
    id: 6,
    nome: "Marianna",
    cognome: "Tomei",
    email: "m.tomea@tim.com",
    codiceFiscale: "DERTRD65R987C",
    indirizzo: "via Salerno, 3",
  },
];

const table = document.getElementById("table");

data.forEach((friend) => {
  const row = document.createElement("tr");

  Object.keys(friend).forEach((key) => {
    const column = document.createElement("td");
    const text = document.createTextNode(friend[key]);
    column.appendChild(text);
    row.appendChild(column);
  });

  table.appendChild(row);
});
