let d = new Date();
let day = new Array(
  "Неділя",
  "Понеділок",
  "Вівторок",
  "Середа",
  "Четвер",
  "П`ятниця",
  "Субота"
);

let month = new Array(
  "січня",
  "лютого",
  "березня",
  "квітня",
  "травня",
  "червня",
  "липня",
  "серпня",
  "вересня",
  "жовтня",
  "листопада",
  "грудня"
);

document.getElementById("date-time").innerHTML =
  day[d.getDay()] +
  " " +
  d.getDate() +
  " " +
  month[d.getMonth()] +
  " " +
  d.getFullYear() +
  " р.";
