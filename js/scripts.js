const today = new Date();

const displayDay = (date) => {
    e = document.getElementById("x3")
    e.innerText = new Date(today.getFullYear(), today.getMonth(), date).toUTCString();
}

displayDay(today.getDate());

const title = document.getElementById("x1");
title.innerText = today.toLocaleDateString("en-US", {month: "long"});

const weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const calendar = document.getElementById("x2");

for(let i = 0; i < 7; i++) {
    let e = document.createElement("div");
    e.classList.add("calendar-cell");
    e.style.fontWeight = "bold";
    e.innerText = weekDay[i].at(0);
    if(i>4) {
        e.classList.add("cell-alt")
    }
    calendar.appendChild(e);
}

const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1).getDay();
const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth()+1, 0).getDate();

for(let i = 0; i < firstDayOfMonth; i++) {
    let e = document.createElement("div");
    e.classList.add("calendar-cell");
    calendar.appendChild(e);
}

for(let i = 0; i < lastDayOfMonth; i++) {
    let e = document.createElement("input");
    e.type = "button";
    e.value = `${i+1}`
    e.classList.add("calendar-cell");
    e.style.cursor = "pointer";
    if(i+1===today.getDate()){
        e.classList.add("cell-today")
    }
    else if((firstDayOfMonth + i)%7 > 4){
        e.classList.add("cell-alt")
    }
    e.addEventListener("click", () => {displayDay(i+1)})
    calendar.appendChild(e);
}

