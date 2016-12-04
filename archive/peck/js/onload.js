/*
* @Author: realfrancisyan
* @Date:   2016-11-20 14:27:26
* @Last Modified by:   realfrancisyan
* @Last Modified time: 2016-11-28 22:06:56
*/

'use strict';

$(function(){

	$(".toggle_info").children("ul").children("li").hover(function(){
		$(this).children("a").stop().fadeIn(200);
	}, function(){
		$(this).children("a").stop().fadeOut(200);
	});

	// Form effects
	var vals = ["First Name", "Last Name", "example@example.com"]
	$(".wrapper input").each(function(index, element){
		$(element).val(vals[index])
	});

	$(".wrapper input").focus(function(){
		var this_val = $(this).val();
		var this_index = $(this).index();
		if(this_val == vals[this_index]){
			$(this).val("").css("color", "#333")
		}
	});

	$(".wrapper input").blur(function(){
		var this_val = $(this).val();
		var this_index = $(this).index();
		if(this_val == ""){
			$(this).val(vals[this_index]).css("color", "#999")
		}
	});

	$("#search_text").focus(function(){
		var this_val = $(this).val();
		var this_index = $(this).index();
		if(this_val == "e.g. ueno"){
			$(this).val("").css("color", "#333")
		}
	});

	$("#search_text").blur(function(){
		var this_val = $(this).val();
		var this_index = $(this).index();
		if(this_val == ""){
			$(this).val("e.g. ueno").css("color", "#999")
		}
	});

	// Limits button clicking effect
	$("#submit").one("click", function(event){
		event.preventDefault();
		$(this).prop("disabled", true).css({background: "#50E3C2"}).html("Subscribed!")
		$(".subscribe_message").slideDown()
	})

	$(".hide_message").click(function(){
		$(this).parent().slideUp()
	})

	// Scroll back to top
	$("#back_to_top").click(function(){
		$("html, body").animate({scrollTop:0}, 500)
	});


	// Check if specific words overflow
	function check_word_count(item, max_num){
		item.each(function(){
			var max_word_count = max_num;
			if ($(this).text().length > max_word_count){
				$(this).text($(this).text().substring(0, max_word_count));
				$(this).html($(this).html()+"...")
			}
		})
	}

	// Retrieve API Info for Editors' Picks Section
	function editors_picks(this_data, index, img_url, title, author, post_url){
		var data = JSON.parse(this_data.response);
		// $(".toggle_info").children("ul").append("<li><img><a class='pick_info'><div class='pick_info_box'><h3></h3><h4></h4></div></a></li>")
		$(".toggle_info").children("ul").children("li").eq(index).children("img").attr("src", img_url);
		$(".pick_info").eq(index).attr("href", post_url).attr("target", "_blank")
		$(".pick_info_box").eq(index).children("h3").html(title)
		$(".pick_info_box").eq(index).children("h4").html("by " + author)

		check_word_count($(".pick_info_box").children("h3"), 15)
	}

	// GET info from server
	function requestHTTP(this_data, this_url){
		this_data.open("GET", this_url);
		this_data.send();
	}

	// create two new http request for editors' picks
	var featured_left = new XMLHttpRequest();
	var featured_right = new XMLHttpRequest();

	// dribbble API token for retrieving data
	var drbl_API = "1c94a8f95aca0de33b0e9d41df1450d4e4270945c37381394bae7d2ba162b27d";
	var url_featured_left = "https://api.dribbble.com/v1/shots/2460910/" +"?access_token=" + drbl_API
	var url_featured_right = "https://api.dribbble.com/v1/shots/1908461/" +"?access_token=" + drbl_API

	featured_left.addEventListener("load", function(){
		var data = JSON.parse(featured_left.response);
		editors_picks(featured_left, 0, data.images.hidpi, data.title, data.user.name, data.html_url)
	})

	featured_right.addEventListener("load", function(){
		var data = JSON.parse(featured_right.response);
		editors_picks(featured_right, 1, data.images.hidpi, data.title, data.user.name, data.html_url)
	})

	requestHTTP(featured_left, url_featured_left)
	requestHTTP(featured_right, url_featured_right)

	// API Info for Things We Love Section

	function things_we_love(this_data, index){
		var data = JSON.parse(this_data.response);

		for (var i=0; i<data.length; i++){
			// Automatically generates posts
			$(".box").append("<dl><dt><a><img></a></dt><dd class='post_info'><h4><a></a></h4><div class='info_box'><h5></h5><ul><li></li><li></li></ul></div></dd></dl>")

			$("dt").eq(i+index).children("a").attr("href", data[i].shot.html_url).attr("target", "_blank")
			$("dt").eq(i+index).children("a").children("img").attr("src", data[i].shot.images.hidpi).attr("alt", data[i].shot.title)
			$("dd").eq(i+index).children("h4").html("<a href='"+ data[i].shot.html_url +"' target='_blank'"+">"+ data[i].shot.title +"</a>")
			$("dd").eq(i+index).children("div").children("h5").html("by " + data[i].shot.user.name)
			$("dd").eq(i+index).children("div").children("ul").children("li").eq(0).html(data[i].shot.likes_count + " likes")
			$("dd").eq(i+index).children("div").children("ul").children("li").eq(1).html(data[i].shot.views_count + " views")

			// Check if posts' titles overflow
			check_word_count($("dd").eq(i+index).children("h4"), 30)

			// Check if posts' author name overflow
			check_word_count($("dd").eq(i+index).children(".info_box").children("h5"), 18)
		}
	}

	var xhttp = new XMLHttpRequest();
	var user_editor = "realfrancisyan";
	var url_things_we_love = "https://api.dribbble.com/v1/users/"+ user_editor +"/likes?page=1" + "&per_page=12&access_token=" + drbl_API

	xhttp.addEventListener("load", function(){
		var data = JSON.parse(xhttp.response);
		things_we_love(xhttp, 0)
	})

	requestHTTP(xhttp, url_things_we_love)


	// when user clicks, load more posts
	var click_count = 0;
	$(".load_more").click(function(){
		if(click_count > 250){
			$(this).css({"background":"#50E3C2"}).html("All loaded! This is the end.")
		}else{

			click_count += 1;

			var newClickRequest = new XMLHttpRequest();

			url_things_we_love = "https://api.dribbble.com/v1/users/"+ user_editor +"/likes?page="+ (click_count+1) +" " + "&per_page=12&access_token=" + drbl_API

			newClickRequest.addEventListener("load", function(){
				var data = JSON.parse(newClickRequest.response);
				things_we_love(newClickRequest, 12*click_count)
			})

			requestHTTP(newClickRequest, url_things_we_love)

			if(click_count > 250){
				$(this).css({"background":"#50E3C2"}).html("All loaded! This is the end.")
			}
		}
	})

	// Retrieving API Info for Featured Artists
	function featured_artists(){
		var data = JSON.parse(this.response)
		for (var i=data.length-1, j=0; i>=0, j<data.length; i--, j++ ){
			$(".featured_artists").children("ul").append("<li class='artist_info'><a><img /><h5></h5></a></li>")
			$(".artist_info").eq(j).children("a").attr("href", data[i].followee.html_url).attr("target", "_blank")
			$(".artist_info").eq(j).children("a").children("img").attr("src", data[i].followee.avatar_url).attr("alt", data[i].followee.name)
			$(".artist_info").eq(j).children("a").children("h5").html(data[i].followee.name)

			// Check if posts' titles overflow
			check_word_count($(".artist_info").eq(j).children("a").children("h5"), 15)
		}
	}

	var fetchArtists = new XMLHttpRequest();
	var url_featured_artists = "https://api.dribbble.com/v1/users/"+ user_editor + "/following" + "?access_token=" + drbl_API

	fetchArtists.addEventListener("load", featured_artists)
	requestHTTP(fetchArtists, url_featured_artists)


	// Search
	var search_click_count = 0;

	function loadMoreBar(){
		$(".show_shots").children().children().hide()
		$(".show_shots").children().children().show()
	}

	function searchResults(this_data, index){
		var data = JSON.parse(this_data.response)
		// console.log(data)

		if (data == false || data.message){
			$(".show_shots").children().children("h2").remove();
			$(".show_shots").children().children(".search_shots").after("<h2 class='section_title'>No (more) results found. Please try again.</h2>");
			$(".show_shots").children().children(".search_load_more").hide();
			$(".show_shots").children().children(".line_break").show()
		}else{
			for (var i = 0; i<data.length; i++){
				$(".search_shots").append("<div class='result_info'><div class='result_box'><h2 class='result_title'><a></a></h2><h3 class='result_date'></h3><ul><li></li><li></li></ul></div><a class='img_block'><img /></a></div>")
				var updated_date = data[i].created_at
				var date_year = updated_date.slice(0, 4)
				var date_month = parseInt(updated_date.slice(5,7))
				var date_day = updated_date.slice(8, 10)

				// Convert numbers into months 
				if (date_month === 1){
					date_month = "Jan"
				}
				else if (date_month === 2){
					date_month = "Feb"
				}
				else if (date_month === 3){
					date_month = "Mar"
				}
				else if (date_month === 4){
					date_month = "Apr"
				}
				else if (date_month === 5){
					date_month = "May"
				}
				else if (date_month === 6){
					date_month = "Jun"
				}
				else if (date_month === 7){
					date_month = "Jul"
				}
				else if (date_month === 8){
					date_month = "Aug"
				}
				else if (date_month === 9){
					date_month = "Sept"
				}
				else if (date_month === 10){
					date_month = "Oct"
				}
				else if (date_month === 11){
					date_month = "Nov"
				}else {
					date_month = "Dec"
				}

				$(".search_shots").children().eq(i+index).children(".result_box").children("h2").children().html(data[i].title).attr("href", data[i].html_url).attr("target", "_blank");
				$(".search_shots").children().eq(i+index).children(".result_box").children("h3").html(date_month + " " + date_day + ", " + date_year)
				$(".search_shots").children().eq(i+index).children(".result_box").children("ul").children("li").eq(0).html(data[i].likes_count + " likes")
				$(".search_shots").children().eq(i+index).children(".result_box").children("ul").children("li").eq(1).html(data[i].views_count + " views")
				$(".search_shots").children().eq(i+index).children("a").attr("href", data[i].html_url).attr("target", "_blank");
				if(data[i].images.hidpi != null){
					$(".search_shots").children().eq(i+index).children().children("img").attr("src", data[i].images.hidpi).attr("alt", data[i].title)
				}else{
					$(".search_shots").children().eq(i+index).children().children("img").attr("src", data[i].images.normal).attr("alt", data[i].title)
				}
				loadMoreBar();
				
			}
		}
	}

	function fetchResults(){

		var fetchSearchResults = new XMLHttpRequest();
		var inputValue = $("#search_text").val();
		var url_search_artists = "https://api.dribbble.com/v1/users/" + inputValue +"/shots" + "?access_token=" + drbl_API;
		

		$(".show_shots").children().prepend("<h2 class='section_title'>Showing results for "+ inputValue +"</h2>")

		fetchSearchResults.addEventListener("load", function(){
			var data = JSON.parse(fetchSearchResults.response)
			searchResults(fetchSearchResults, 0)
		});
		requestHTTP(fetchSearchResults, url_search_artists);

	}

	// Fetch Twitter Info
	function fetchTwitter(){
		function fetchTwitterTimeline(){
			var data = JSON.parse(this.response);
			if (data.links.twitter == undefined) {}
			else{
				var script = document.createElement("script");
				script.src= "https://platform.twitter.com/widgets.js";
				script.async;
				$(".twitter").children().append("<h2 class='section_title'>What the artist says</h2>")
				$(".twitter").children().append("<a class='twitter-timeline' data-width='960' data-height='1000' data-link-color='#FB6986' href='"+ data.links.twitter +"' data-chrome='nofooter noscrollbar transparent'>Tweets by "+ data.name +"</a>")
				$(".twitter").children().append("<div class='line_break'></div>")
				$(".twitter").children().append(script)
			}
		}

		var twitterRequests = new XMLHttpRequest();
		var inputValue = $("#search_text").val();
		var url_search_twitter = "https://api.dribbble.com/v1/users/" + inputValue +"?access_token=" + drbl_API

		twitterRequests.addEventListener("load", fetchTwitterTimeline)
		requestHTTP(twitterRequests, url_search_twitter);

	}

	// Fetch artist's likes
	function fetchLikes(){
		function fetchArtistsLikes(){
			var data = JSON.parse(this.response);
			if (data.message){}
			else {

				$(".and_he_likes").children().prepend("<h2 class='section_title'>And he likes</h2>")
				for (var i = 0; i<data.length; i++){
					$(".likes_shots").append("<div class='result_info'><div class='result_box'><h2 class='result_title'><a></a></h2><h3 class='result_date'></h3><ul><li></li><li></li></ul></div><a class='img_block'><img /></a></div>")

					$(".likes_shots").children().eq(i).children(".result_box").children("h2").children().html(data[i].shot.title).attr("href", data[i].shot.html_url).attr("target", "_blank");
					$(".likes_shots").children().eq(i).children(".result_box").children("h3").html(data[i].shot.user.name)
					$(".likes_shots").children().eq(i).children(".result_box").children("ul").children("li").eq(0).html(data[i].shot.likes_count + " likes")
					$(".likes_shots").children().eq(i).children(".result_box").children("ul").children("li").eq(1).html(data[i].shot.views_count + " views")
					$(".likes_shots").children().eq(i).children("a").attr("href", data[i].shot.html_url).attr("target", "_blank");
					if(data[i].shot.images.hidpi != null){
						$(".likes_shots").children().eq(i).children().children("img").attr("src", data[i].shot.images.hidpi).attr("alt", data[i].shot.title)
					}else{
						$(".likes_shots").children().eq(i).children().children("img").attr("src", data[i].shot.images.normal).attr("alt", data[i].shot.title)
					}
				}	
				
				$(".and_he_likes").children().children(".line_break").show();
			}
		}

		var artistLikesRequests = new XMLHttpRequest();
		var inputValue = $("#search_text").val();
		var url_search_likes = "https://api.dribbble.com/v1/users/" + inputValue +"/likes?per_page=5&access_token=" + drbl_API

		artistLikesRequests.addEventListener("load", fetchArtistsLikes)
		requestHTTP(artistLikesRequests, url_search_likes)
	}

	// Fetch Google Maps
	function fetchGoogleMaps(){
		function fetchMapsInfo(){
			var data = JSON.parse(this.response);
			if (data.location != null){
				$(".google_maps").children().append('<h2 class="section_title">He is located in</h2><h3 class="artist_location">'+ data.location +'</h3><div class="google-maps"><iframe width="600" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDsVe7f-1dPpVT68V8YnSc-zw6LHJHZwU0&q='+ data.location +'" allowfullscreen></iframe></div><div class="line_break"></div>')
			}
		}

		var mapsRequests = new XMLHttpRequest();
		var inputValue = $("#search_text").val();
		var url_search_maps = "https://api.dribbble.com/v1/users/" + inputValue +"/?access_token=" + drbl_API

		mapsRequests.addEventListener("load", fetchMapsInfo);
		requestHTTP(mapsRequests, url_search_maps)
	}

	$("#search_submit").click(function(event){
		event.preventDefault();
		$(".show_shots").children().children("h2").empty();
		$(".twitter").children().empty();
		$(".search_shots").empty();
		$(".and_he_likes").children().children("h2").remove();
		$(".likes_shots").empty();
		$(".google_maps").children().empty();
		search_click_count = 0;
		$(".search_load_more").css({background: "#FC5477"}).html("Load more...")
		fetchResults();
        fetchTwitter();
        fetchLikes();
        fetchGoogleMaps();
	})

	addEventListener("#search_text", "keypress", function(event){
		if(event.which == 13 || event.keyCode == 13) {
            event.preventDefault();
			$(".show_shots").children().children("h2").empty();
			$(".twitter").children().empty();
			$(".search_shots").empty();
			$(".and_he_likes").children().children("h2").remove();
			$(".likes_shots").empty();
			$(".google_maps").children().empty();
			search_click_count = 0;
			$(".search_load_more").css({background: "#FC5477"}).html("Load more...");
            fetchResults();
            fetchTwitter();
            fetchLikes();
            fetchGoogleMaps();
        }
	})

	// Search Load More
	
	$(".search_load_more").click(function(){
		var inputValue = $("#search_text").val();
		if(search_click_count > 2){
			$(this).css({"background":"#50E3C2"}).html("<a target='_blank' style='display:block' href='https://dribbble.com/"+ inputValue +"'>More at Dribbble.com</a>")
		}else{

			search_click_count += 1;

			var newClickRequest = new XMLHttpRequest();

			var url_search_artists = "https://api.dribbble.com/v1/users/"+ inputValue +"/shots?page="+ (search_click_count+1) +" " + "&per_page=12&access_token=" + drbl_API

			newClickRequest.addEventListener("load", function(){
				var data = JSON.parse(newClickRequest.response);
				searchResults(newClickRequest, 12*search_click_count)
			})

			requestHTTP(newClickRequest, url_search_artists)

			if(search_click_count > 2){
				$(this).css({"background":"#50E3C2"}).html("<a target='_blank' style='display:block' href='https://dribbble.com/"+ inputValue +"'>More at Dribbble.com</a>")
			}
		}
	})

})