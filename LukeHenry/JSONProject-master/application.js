var representative = {
	"fullName": "",
	"firstName": "",
	"lastName": "",
	"district": "",
	"face": "",
	"party": "",
	"termStart": "",
	"termEnd": "",
	"facebookID": "",
	"twitter": "",
	"youTube": ""
}
var senator1 = {
	"fullName": "",
	"firstName": "",
	"lastName": "",
	"face": "",
	"party": "",
	"termStart": "",
	"termEnd": "",
	"facebookID": "",
	"twitter": "",
	"youTube": ""
}
var senator2 = {
	"fullName": "",
	"firstName": "",
	"lastName": "",
	"face": "",
	"party": "",
	"termStart": "",
	"termEnd": "",
	"facebookID": "",
	"twitter": "",
	"youTube": ""
}

$(document).ready(function(){

	userLocation = "";
	$('#waiting').hide();
	$('#results').hide();

//enter key to search
	$('#location').keyup(function(e){
		if(event.keyCode == 13) {
			e.preventDefault();
			$('#submit').click();
		};
	});

//click submit to search
	$('#submit').click(function(e){
		e.preventDefault();
		var txtbox = document.getElementById('location');
		var txtval = txtbox.value;

		if(!$.trim($('#location').val())) {
			alert('Please enter a valid location');
		} else {
			userLocation = encodeURI(txtval);
		}
		getDemocracyMap();
		waiting();

	});

//ajax success callback function
	function democracyMap(resp) {
		representative.fullName = resp.jurisdictions[5].elected_office[0].name_full;
		representative.face = resp.jurisdictions[5].elected_office[0].url_photo;
		representative.district = resp.jurisdictions[5].name;
	
		senator1.fullName = resp.jurisdictions[6].elected_office[0].name_full;
		senator1.face = resp.jurisdictions[6].elected_office[0].url_photo;

		senator2.fullName = resp.jurisdictions[6].elected_office[1].name_full;
		senator2.face = resp.jurisdictions[6].elected_office[1].url_photo;

		representativeInfo();
		senator1Info();
		senator2Info();
		apiSuccess();
	}

//ajax failure callback function
	function ajaxFail(req, status, err) {
		console.log('something wnet wrong', status, err);
	}
//democracymap API call
	function getDemocracyMap(){
		var getMapUrl = "http://api.democracymap.org/context?location=" + userLocation;
		var url = "http://api.democracymap.org";


		$.ajax({
			type: 'GET',
			crossDomain: true,
			dataType: 'json',
			url: getMapUrl,
			xhrFields:{
				withCredentials: false
			},
			success: function(resp) {
				democracyMap(resp);
			},
			error: function(resp){
				ajaxFail(resp);
			}
		});
	}

//waiting screen	
	function waiting() {
		$('#intro').hide();
		$('#waiting').fadeIn(100).delay(3000);
	}	

//display results on success
	function apiSuccess() {
		$('#waiting').fadeOut(600, results);
	}
	function results() {
		$('#results').fadeIn(100);
	}

//input data to page
	function representativeInfo() {
		$('#repFace').attr("src", representative.face);
		$('#repTitle').html('<h2 class="title" id="repTitle">Representative ' + representative.fullName + '</h2>');
		$('#repInfo').append('<li>Congressional ' + representative.district + '</li>');
		if(representative.fullName.length > 11) {
			$('.title').css("font-size", "25px");
		};
	}

	function senator1Info() {
		$('#sen1Face').attr("src", senator1.face);
		$('#sen1Title').html('<h2 class="title" id="sen1Title">Senator ' + senator1.fullName + '</h2>');
	}

	function senator2Info() {
		$('#sen2Face').attr("src", senator2.face);
		$('#sen2Title').html('<h2 class="title" id="sen2Title">Senator ' + senator2.fullName + '</h2>');
	}

//debugging playground



});

