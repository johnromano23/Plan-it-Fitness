function BMI() {
  var w = document.getElementById("w").value;

  var h = document.getElementById("h").value;

  var bmi = (w / h / h) * 703;

  document.getElementById("result").innerHTML = "Your BMI is " + bmi;
}

$(document).ready(function () {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function (data) {
    $(".member-name").text(data.email);
  });
});
