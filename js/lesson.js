let num = [0, 1, 2, 3, 4, 5, 6];
let week = num[new Date().getDay()]; // номер дня 1 - Понеділок,
let clasM = [];
let lesM = [];
week = Number(week) + 1;
if ((week = 6)) {
  for (let k = 1; k < 8; k++) {
    let clas = ".w" + 1 + "-" + k;
    let les = "lesson" + k;
    clasM.push(clas);
    lesM.push(les);
  }
} else {
  for (let k = 1; k < 8; k++) {
    let clas = ".w" + week + "-" + k;
    let les = "lesson" + k;
    clasM.push(clas);
    lesM.push(les);
  }
}

$("document").ready(function() {
  loadLesson();
  loadSubject();
});

function loadLesson() {
  //загрузка дом. робіт на сторінку
  $.getJSON("lesson.json", function(data) {
    var out = "";
    for (var key in data) {
      for (let le = 0; le < 7; le++) {
        document.querySelector(clasM[le]).innerHTML = data[key][lesM[le]];
      }
    }
  });
}
function loadSubject() {
  //загрузка предметів
  $.getJSON("subject.json", function(data) {
    var out = "";
    for (var key in data) {
      for (let le = 0; le < 7; le++) {
        console.log(key);
        console.log(lesM);
        //  console.log(data);
        document.getElementById(lesM[le]).innerHTML = data[key][lesM[le]];
      }
    }
  });
}
