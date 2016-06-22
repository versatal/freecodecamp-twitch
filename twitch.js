$(document).ready(function() {
  
	var streamerArr = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", 
	                  "habathcx", "RobotCaleb", "noobs2ninjas"];
	var apiStr = "https://api.twitch.tv/kraken/streams/";
	var apiCha = "https://api.twitch.tv/kraken/channels/";
	var callbackStr = "?callback=?";
	var streamerStr = "OgamingSC2";
	var fullApiStr = apiStr + streamerStr + callbackStr;
	var streamerName;
	var streamerLogo;
	var streamerGame;
	
	//put a foreach loop around the code below to display each streamer
	//add style classes to make it pretty and more readable
	//turn streamer cell into a link to the streamer's channel -done

	streamerArr.forEach(function(entry) {
		var arrApiStr = apiStr + entry + callbackStr;
		$.getJSON(arrApiStr, function(json1) {
			var arrApiCha = apiCha + entry + callbackStr;
			var streamerStatus;
			$.getJSON(arrApiCha, function(json2) {
			console.log("Here is set 1: " + json1.stream);
			console.log("Here is set 2: " + json2.name);
			

				if (json1.stream == null) {
					$(".twitchStream").append('<tr class="strOffline">' 
						+ '<td class="row1"><img class="twitchLogo img-circle" src="' + json2.logo +'"/></td>' 
						+ '<td class="row2"><a href="https://www.twitch.tv/' +
							   json2.display_name + '" target="_blank">' +
							   json2.display_name + '</a></td>' 
						+ '<td class="row3">Offline</td>' 
						+ '<tr>');
				} else {
					$(".twitchStream").append('<tr class="strOnline">' 
						+ '<td class="row1"><img class="twitchLogo img-circle" src="' + json2.logo +'"/></td>' 
						+ '<td class="row2"><a href="https://www.twitch.tv/' +
							   json2.display_name + '" target="_blank">' +
							   json2.display_name + '</a></td>' 
						+ '<td class="row3">' + json2.game + json2.status + '</td>' 
						+ '<tr>');
				} 
			});  
		});  
	});

});
