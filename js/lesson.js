let num = [0, 1, 2, 3, 4, 5, 6];
let week = num[new Date().getDay()]; // номер дня 1 - Понеділок,
let clasM = [];
let lesM = [];
week = Number(week) + 1;

for (let k = 1; k < 35; k++) {
  let clas = ".w" + 1 + "-" + k;
  let les = "lesson" + k;
  clasM.push(clas);
  lesM.push(les);
}

$("document").ready(function() {
  loadLesson();
  loadSubject();
});

function loadLesson() {
  //загрузка дом. робіт на сторінку
  $.getJSON("lesson.json", function(data) {
    for (let key in data) {
      for (let le = 0; le < 14; le++) {
        document.querySelector(clasM[le]).innerHTML = data[key][lesM[le]];
      }
    }
  });
}
let subM = [];
for (let s = 1; s < 14; s++) {
  let sub = "les-" + s;
  subM.push(sub);
}
function loadSubject() {
  //загрузка предметів
  $.getJSON("subject.json", function(data) {
    for (let key2 in data) {
      for (let le = 0; le < subM.length; le++) {
        console.log(key2);

        document.getElementById(subM[le]).innerHTML = data[key2][subM[le]];
      }
    }
  });
}
