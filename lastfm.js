var lastfmData = {
  baseURL:
    "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=",
  // Your Last.fm Username
  user: "",
  // Your API key
  api_key: "",
  additional: "&format=json&limit=1"
};

var getSetLastFM = function() {
  $.ajax({
    type: "GET",
    url:
      lastfmData.baseURL +
      lastfmData.user +
      "&api_key=" +
      lastfmData.api_key +
      lastfmData.additional,
    dataType: "json",
    success: function(resp) {
      var recentTrack = resp.recenttracks.track[0];
      var formatted =
        recentTrack.name;
        recentTrack.image
      $("a#track")
        .html(recentTrack.name)
        .attr("href", recentTrack.url)
        .attr("target", "_blank");
      $("a#artist")
      .html(recentTrack.artist["#text"])

    },
    error: function(resp) {
      $("a#track").html(
        ""
      );


    }
  });
};

// Get the new one.
getSetLastFM();
// Start the countdown.
setInterval(getSetLastFM, 10 * 1000);
