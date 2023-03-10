const placeholderData = [
  {
    id: 0,
    name: "In Coda",
    tasks: [
      { id: 0, name: "Rispondere alle email" },
      { id: 1, name: "Allenare gambe" },
      { id: 2, name: "Ricaricare credito telefono" },
      { id: 3, name: "Prenotare visita dentista" },
    ],
  },
  {
    id: 1,
    name: "Aperto",
    tasks: [],
  },
  {
    id: 2,
    name: "In Revisione",
    tasks: [],
  },
  {
    id: 3,
    name: "Completato",
    tasks: [],
  },
];
let data = localStorage.getItem("data")
  ? JSON.parse(localStorage.getItem("data"))
  : placeholderData;

generateTasks();

const tasks = document.querySelectorAll(".task");
const colonne = document.querySelectorAll(".colonna");
let dragItem = null;
let dragData = null;

tasks.forEach((task) => {
  task.addEventListener("dragstart", dragStart);
  task.addEventListener("dragend", dragEnd);
});
colonne.forEach((colonna) => {
  colonna.addEventListener("dragover", dragOver);
  colonna.addEventListener("dragenter", dragEnter);
  colonna.addEventListener("dragleave", dragLeave);
  colonna.addEventListener("drop", dragDrop);
});

function dragStart() {
  console.log("dragStart");
  setTimeout(() => this.classList.add("hidden"), 0);
  dragItem = this;

  const indexColonna = data.findIndex((colonna) => {
    return colonna.id == this.parentElement.getAttribute("data-column");
  });
  const indexTask = data[indexColonna].tasks.findIndex((task) => {
    return task.id == this.getAttribute("data-task");
  });
  dragData = data[indexColonna].tasks.splice(indexTask, 1)[0];
  console.log("splicing", dragData);
  localStorage.setItem("data", JSON.stringify(data));
}
function dragEnd() {
  this.classList.remove("hidden");
  console.log("dragEnd");
  dragItem = null;

  data[this.parentElement.getAttribute("data-column")].tasks.push(dragData);
  console.log(data);
  localStorage.setItem("data", JSON.stringify(data));
}
function dragOver(e) {
  e.preventDefault();
  console.log("dragOver");
}
function dragEnter() {
  console.log("dragEnter");
}
function dragLeave() {
  console.log("dragLeave");
}
function dragDrop() {
  console.log("dragDrop");
  this.append(dragItem);
}

function generateTasks() {
  data.forEach((colonna) => {
    const targetColumn = document.querySelector(
      `[data-column='${colonna.id}']`
    );
    colonna.tasks.forEach((task) => {
      const element = document.createElement("div");
      element.className = "task p-4 rounded-xl shadow-xl bg-white";
      element.setAttribute("draggable", true);
      element.setAttribute("data-task", task.id);
      const text = document.createTextNode(task.name);
      element.appendChild(text);
      targetColumn.appendChild(element);
    });
  });
}
