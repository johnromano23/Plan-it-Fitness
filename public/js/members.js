function calculateBMI() {
  var queryURL =
    "https://bmi.p.rapidapi.com/" +
    "&key=15419e43aemshf2b1ed464ddf5b8p17efefjsn8c1fa04f2290";
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    bmiStatus = response.results[0].status;
    console.log(bmiStatus);
    bmiRisk = response.results[0].risk;
    console.log(bmiRisk);
  });
}
// Calculator function to get BMI on button click.
function BMI() {
  var w = document.getElementById("w").value;

  var h = document.getElementById("h").value;

  var bmi = (w / h / h) * 703;

  document.getElementById("result").innerHTML = "Your BMI is " + bmi;
}

let schedule = {
  Monday: "",
  Tuesday: "",
  Wednesday: "",
  Thursday: "",
  Friday: "",
  Saturday: "",
  Sunday: "",
};

$(document).ready(function () {
  if (!localStorage.getItem("schedule")) {
    updateCalendarTasks(schedule);
  } else {
    updateCalendarTasks(JSON.parse(localStorage.getItem("schedule")));
  }
});

$("button").click(function () {
  value = $(this).siblings("textarea").val();
  scheduleString = $(this).siblings("div").text();

  saveSchedule(scheduleString, value);
});

function loadCorrectDataSet() {
  result = localStorage.getItem("schedule");
  return result ? result : schedule;
}

function initializeLocalStorage() {
  localStorage.setItem("schedule", JSON.stringify(schedule));
}

function saveToLocalStorage(dayObj) {
  localStorage.setItem("schedule", JSON.stringify(dayObj));
}

function saveSchedule(scheduleString, val) {
  if (!localStorage.getItem("schedule")) {
    initializeLocalStorage();
  }

  let week = JSON.parse(localStorage.getItem("schedule"));
  week[scheduleString] = val;

  saveToLocalStorage(week);
}

function updateCalendarTasks(dayObject) {
  $(".calendar-row").each(function (index) {
    let res = $(this).children("div");
    $(this).children("textarea").text(dayObject[res.text()]);
  });
}

$(document).ready(function () {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function (data) {
    $(".member-name").text(data.email);
  });
});
