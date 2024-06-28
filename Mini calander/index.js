const monthNameEl = document.getElementById("month-name")
const dayNameEl = document.getElementById ("day-name")
const dateNameEl = document.getElementById ("date-number")
const yearNameEl = document.getElementById("year-number")

const date = new Date();

const month = date.getMonth();

monthNameEl.innerText  = date.toLocaleString("en", {month: "long"});

dayNameEl.innerText  = date.toLocaleString("en", {weekday:"long"});

dateNameEl.innerText = date.getDate();

yearNameEl.innerText = date.getFullYear();

