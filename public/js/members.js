// Calculate BMI
function BMI() {
  var w = document.getElementById("w").value;

  var h = document.getElementById("h").value;

  var bmi = ((w / h / h) * 703).toFixed(2);

  document.getElementById("result").innerHTML = "Your BMI is " + bmi;
}
// Getting information from Nutritionix API
var appID = "34af0f88";
var apiKey = "a0c6264dee2705479d692f2aecb7d034";
var foodItemValue = "";
var fields = "item_name,brand_name,item_id,nf_calories";
function getInformation(foodItemValue) {
  //var queryURL = "https://api.nutritionix.com/v1_1/search/cheeseburger?results=0:20&fields=item_name,brand_name,item_id,nf_calories&appId=34af0f88&appKey=a0c6264dee2705479d692f2aecb7d034";
  var queryURL =
    "https://api.nutritionix.com/v1_1/search/" +
    foodItemValue +
    "?results=0:1&fields=" +
    fields +
    "&appId=" +
    appID +
    "&appKey=" +
    apiKey;
  var tempData = [];
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (data) {
    console.log(data);
    var nutritionDiv = $("#monitor-data");
    for (var i = 0; i < data.hits.length; i++) {
      // It then creates a new div for each drink. Note we create divs and add the content in the same line.
      var newNutritionDiv = $(
        "<div>" + data.hits[i].fields.item_name + "</div>"
      );
      nutritionDiv.append(newNutritionDiv);
      var newNutritionDiv1 = $(
        "<div>" + data.hits[i].fields.brand_name + "</div>"
      );
      nutritionDiv.append(newNutritionDiv1);
      var newNutritionDiv2 = $(
        "<div>" + data.hits[i].fields.nf_calories + "</div>"
      );
      nutritionDiv.append(newNutritionDiv2);
      var newNutritionDiv3 = $(
        "<div>" + data.hits[i].fields.nf_serving_size_unit + "</div>"
      );
      nutritionDiv.append(newNutritionDiv3);
    }
    console.log(tempData);
  });
}
// console.log(tempData);
$("#submitBtn").on("click", function (event) {
  event.preventDefault();
  console.log("submitBtn");
  var foodItemValue = $("#search").val();
  console.log(foodItemValue);
  getInformation(foodItemValue);
});
// // Getting information from Nutritionix API
// var appID = "34af0f88";
// var apiKey = "a0c6264dee2705479d692f2aecb7d034";
// var foodItemValue = "";

// function getInformation(foodItemValue) {
//   $.ajax();
//   this.http.get(
//     "https://api.nutritionix.com/v1_1/search/" +
//       search +
//       "?results=0:1&fields=&appID=" +
//       appID +
//       "&appKey=" +
//       apiKey
//   );

//   for (var i = 0; i < data.hits.length; i++) {
//     this.nutrition[i] = {
//       "calories": data.hits[i].fields.nf_calories,
//       "total fat": data.hits[i].fields.nf_total_fat,
//       "sodium": data.hits[i].fields.nf_sodium,
//       "sugars": data.hits[i].fields.nf_sugar,
//       "protein": data.hits[i].fields.nf_protein,
//       "serving size": data.hits[i].fields.nf_serving_size_unit,
//     };
//   }
// }
// console.log()

// $("submitBtn").submit(function (event) {
//   event.preventDefault();
// });

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
