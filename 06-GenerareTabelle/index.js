class Table {
  columns;
  data;
  constructor(column, data) {
    this.columns = column;
    this.data = data;
    this.generatingTable();
  }

  generatingTable() {
    const table = document.createElement("table");
    table.appendChild(this.generatingColumn());
    table.appendChild(this.generatingRow());
    document.querySelector("body").appendChild(table);
  }

  generatingColumn() {
    const thead = document.createElement("thead");
    this.columns.forEach((column) => {
      const th = document.createElement("th");
      const text = document.createTextNode(column);
      th.appendChild(text);
      thead.appendChild(th);
    });
    return thead;
  }
  generatingRow() {
    const tbody = document.createElement("tbody");
    this.data.forEach((row) => {
      const tr = document.createElement("tr");
      Object.keys(row).forEach((key) => {
        const cella = document.createElement("td");
        const text = document.createTextNode(row[key]);
        cella.appendChild(text);
        tr.appendChild(cella);
      });
      tbody.appendChild(tr);
    });
    return tbody;
  }
}

const column1 = ["ID", "Nome Prodotto", "prezzo", "dataScadenza"];
const column2 = ["ID", "Nome Prodotto", "prezzo"];

const dataPasta = [
  {
    id: 1,
    nomeProdotto: "Pasta Rummo",
    prezzo: 1.05,
    dataScadenza: "05/09/2025",
  },
  {
    id: 2,
    nomeProdotto: "Pasta Barilla",
    prezzo: 1.5,
    dataScadenza: "01/11/2023",
  },
  {
    id: 3,
    nomeProdotto: "Pasta Molisana",
    prezzo: 1.25,
    dataScadenza: "05/02/2023",
  },
  {
    id: 4,
    nomeProdotto: "Pasta Esselunga",
    prezzo: 0.95,
    dataScadenza: "12/12/2029",
  },
];

const dataHamburger = [
  {
    id: 1,
    prodotto: "hamburger Chianina",
    prezzo: 10.0,
  },
  {
    id: 2,
    prodotto: "hamburger Pollo",
    prezzo: 7.5,
  },
  {
    id: 3,
    prodotto: "hamburger Veg",
    prezzo: 8.0,
  },
];
const tablePasta = new Table(column1, dataPasta);
const tableHamburger = new Table(column2, dataHamburger);
