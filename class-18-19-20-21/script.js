/**
 * 1. Lock
 * 2. Delete
 * 3. Color Change
 */

const addBtn = document.querySelector(".add-btn");
const removeBtn = document.querySelector(".remove-btn");
const modalCont = document.querySelector(".modal-cont");
const mainCont = document.querySelector(".main-cont");
const taskDetail = document.querySelector(".textArea-cont");
const taskCont = document.querySelector(".task-container");
const submitBtn = document.querySelector(".task-container button");
const priorityTaskColors = document.querySelectorAll(".priority-color");
const toolboxColors = document.querySelectorAll(".color");

// Local Variables
let addTaskFlag = false;
let deleteMode = false;
let activePriorityTaskColor = "";
let activeToolboxColor = "all";
let ogTickets = [];
const colors = ["lightpink", "lightblue", "lightgreen", "black"];

const ticketsFromLS = JSON.parse(localStorage.getItem("ogTickets"));
if (ticketsFromLS) {
  ogTickets = ticketsFromLS;
  refreshMainContainer();
}

/**
 * @returns Tickets that needs to be displayed
 */
function getFilteredTickets() {
  if (activeToolboxColor === "all") {
    return ogTickets;
  }
  const filteredTickets = ogTickets.filter(
    ({ color }) => color === activeToolboxColor
  );
  return filteredTickets;
}

// Refresh the main container with updated set of tickets that needs to be displayed
function refreshMainContainer() {
  mainCont.innerHTML = "";

  const filteredOgTickets = getFilteredTickets();

  filteredOgTickets.forEach(function (ticket) {
    const { id, task, color } = ticket;
    createTicket({ ticketTask: task, ticketColor: color, ticketId: id });
  });
}

/**
 * Clear Selected Priority Color. There are 2 scenarios when this needs to be done:
 * 1. Anytime the Priority Modal Closes
 * 2. Another priority color is selected
 */
function clearSelectedPriorityColor() {
  priorityTaskColors.forEach((elem) => {
    if (elem.classList.contains("active")) {
      elem.classList.remove("active");
    }
  });
}

/**
 * Clear Selected Priority Color. This needs to done only when another priority color is selected
 */
function clearSelectedToolboxColor() {
  toolboxColors.forEach((elem) => {
    if (elem.classList.contains("active")) {
      elem.classList.remove("active");
    }
  });
}

// Open/Close Modal and reset variables when closing
function toggleModal() {
  if (addTaskFlag) {
    modalCont.style.display = "none";
    activePriorityTaskColor = "";
    taskDetail.value = "";
    clearSelectedPriorityColor();
  } else {
    modalCont.style.display = "flex";
  }

  addTaskFlag = !addTaskFlag;
}

function handleLock(ticketId, ticketElem) {
  const lockClass = "fa-lock";
  const unlockClass = "fa-lock-open";
  const ticketLockElem = ticketElem.querySelector(".ticket-lock i");
  const ticketTaskArea = ticketElem.querySelector(".task-area");
  ticketLockElem.addEventListener("click", (event) => {
    if (ticketLockElem.classList.contains(lockClass)) {
      ticketLockElem.classList.remove(lockClass);
      ticketLockElem.classList.add(unlockClass);

      ticketTaskArea.setAttribute("contenteditable", "true");
    } else {
      console.log(event);
      ticketLockElem.classList.remove(unlockClass);
      ticketLockElem.classList.add(lockClass);

      ticketTaskArea.setAttribute("contenteditable", "false");
      let idx = ogTickets.findIndex((ticket) => {
        return ticket.id === ticketId;
      });

      ogTickets[idx].task = ticketTaskArea.textContent;
      updateLocalStorage();
    }
  });
}

function handleColor(ticketId, ticketElem) {
  const ticketColorElem = ticketElem.querySelector(".ticket-color");
  ticketColorElem.addEventListener("click", function () {
    const currentColor = ticketColorElem.classList[1];
    let currentColorIdx = colors.findIndex((color) => {
      return color === currentColor;
    });
    const newColorIdx = ++currentColorIdx % colors.length;
    const newColor = colors[newColorIdx];

    ticketColorElem.classList.remove(currentColor);
    ticketColorElem.classList.add(newColor);

    let idx = ogTickets.findIndex((ticket) => {
      return ticket.id === ticketId;
    });

    ogTickets[idx].color = newColor;
    updateLocalStorage();
  });
}

function handleDelete(ticketId, ticketElem) {
  ticketElem.addEventListener("click", () => {
    if (deleteMode) {
      ticketElem.remove();
      ogTickets = ogTickets.filter((ticket) => {
        return ticket.id !== ticketId;
      });
      updateLocalStorage();
    } else {
      console.log("Ignore");
    }
  });
}

// Function to create and append ticket to the main container
function createTicket({ ticketTask, ticketColor, ticketId }) {
  let ticketCont = document.createElement("div");
  ticketCont.setAttribute("class", "ticket-cont");

  ticketCont.innerHTML = `<div class="ticket-color ${ticketColor}"></div>
        <div class="ticket-id">${ticketId}</div>
        <div class="task-area">${ticketTask}</div>
        <div class="ticket-lock"><i class="fa-solid fa-lock"></i></div>`;

  mainCont.append(ticketCont);

  handleLock(ticketId, ticketCont);
  handleColor(ticketId, ticketCont);
  handleDelete(ticketId, ticketCont);
}

function onClickToolboxColors(event) {
  clearSelectedToolboxColor();
  const target = event.target;
  target.classList.add("active");
  const classes = target.getAttribute("class");
  const selectedColor = classes.split(" ")[0];
  activeToolboxColor = selectedColor;

  refreshMainContainer(); // Refreshing the container so it gets updated with latest set of values
}

function onPriorityColorClickInModal(event) {
  clearSelectedPriorityColor();
  const target = event.target;
  target.classList.add("active");
  const classes = target.getAttribute("class");
  const selectedColor = classes.split(" ")[0];
  activePriorityTaskColor = selectedColor;
}

submitBtn.addEventListener("click", function () {
  if (taskDetail.value && activePriorityTaskColor) {
    ogTickets.push({
      task: taskDetail.value,
      color: activePriorityTaskColor,
      id: shortid(),
    });
    updateLocalStorage();
    toggleModal();
    refreshMainContainer();
  }
});

addBtn.addEventListener("click", toggleModal);

function toggleDeleteMode() {
  deleteMode = !deleteMode;

  if (deleteMode === true) {
    alert("Delete Mode Activated!");
    removeBtn.style.color = "red";
  } else {
    alert("Delete Mode Deactivated!");
    removeBtn.style.color = "white";
  }
}

removeBtn.addEventListener("click", toggleDeleteMode);

priorityTaskColors.forEach(function (elem) {
  elem.addEventListener("click", onPriorityColorClickInModal);
});

toolboxColors.forEach(function (elem) {
  elem.addEventListener("click", onClickToolboxColors);
});

function updateLocalStorage() {
  localStorage.setItem("ogTickets", JSON.stringify(ogTickets));
}
