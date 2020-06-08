// const search = $("#").text;
// const searchButton = $("#searchButton");
// function youtubeSearch() {
// var queryURL =
//     "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=" +
//     search +
//     "&key=AIzaSyCiZbQgW_osNuaQNxXcFwk_3yuo6_kL7dc";
// $.ajax({
//     url: queryURL,
//     method: "GET",
// }).then(function (response) {
//     console.log(response);
//     for (var i = 0; i < 26; i++) {
//     searchResult = response.items[i].id.videoId;
//     console.log(searchResult);
//     }
// });
// }

// searchButton.click(function () {
// youtubeSearch();
// });

$(document).ready(function () {
  var API_KEY = "AIzaSyCiZbQgW_osNuaQNxXcFwk_3yuo6_kL7dc";

  var video = "";

  $("form").submit(function (event) {
    event.preventDefault();

    var search = $("#search").val();

    videoSearch(API_KEY, search, 9);
  });
});

function videoSearch(key, search, maxResults) {
  $("#videos").empty();

  $.get(
    "https://www.googleapis.com/youtube/v3/search?key=" +
      key +
      "&type=video&part=snippet&maxResults=" +
      maxResults +
      "&q=" +
      search,
    function (data) {
      console.log(data);
      data.items.forEach((item) => {
        video = `<iframe width="370" height="315" src="http://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        $("#videos").append(video);
      });
    }
  );
}
