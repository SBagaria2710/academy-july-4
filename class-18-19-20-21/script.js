const addBtn = document.querySelector(".add-btn");
const modalCont = document.querySelector(".modal-cont");
const mainCont = document.querySelector(".main-cont");
const taskDetail = document.querySelector(".textArea-cont");
const taskCont = document.querySelector(".task-container");
const submitBtn = document.querySelector(".task-container button");
const priorityTaskColors = document.querySelectorAll(".priority-color");
const toolboxColors = document.querySelectorAll(".color");

// Local Variables
let addTaskFlag = false;
let activePriorityTaskColor = "";
let activeToolboxColor = "all";
let ogTickets = [];

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

// Function to create and append ticket to the main container
function createTicket({ ticketTask, ticketColor, ticketId }) {
  let ticketCont = document.createElement("div");
  ticketCont.setAttribute("class", "ticket-cont");

  ticketCont.innerHTML = `<div class="${ticketColor}"></div>
        <div class="ticket-id">${ticketId}</div>
        <div class="task-area">${ticketTask}</div>
        <div class="ticket-lock"><i class="fa-solid fa-lock"></i></div>`;

  mainCont.append(ticketCont);
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
    toggleModal();
    refreshMainContainer();
  }
});

addBtn.addEventListener("click", toggleModal);

priorityTaskColors.forEach(function (elem) {
  elem.addEventListener("click", onPriorityColorClickInModal);
});

toolboxColors.forEach(function (elem) {
  elem.addEventListener("click", onClickToolboxColors);
});
