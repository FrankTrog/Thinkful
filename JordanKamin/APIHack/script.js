$(document).ready(function () {

    var categories = {
		races:{
			white:"B19013A_001E",
			black:"B19013B_001E",
			native:"B19013C_001E",
			pacIslander:"B19013D_001E",
			asian:"B19013E_001E",
			other:"B19013F_001E",
			multi:"B19013G_001E",
			latino:"B19013H_001E"
			},
		householdSize:{
			one:"B19019_002E",
			two:"B19019_003E",
			three:"B19019_004E",
			four:"B19019_005E",
			five:"B19019_006E",
			six:"B19019_007E",
			seven:"B19019_008E"
		},
		nofilter:"B19013_001E"
	};

    $("#races").hide();
    $("#householdSize").hide();

    //submit button functionality
    $('body').on('click', 'input:submit', function () {
		var category,
			filter = '',
			holder,
			state = $("#state").val();
		
		switch($('#filters input[type=radio]:checked').val()){
			case "0": //Race
				category = 'races';
			break;
			case "1": //householdSize
				category = 'householdSize';
			break;
			case "2": //No Filter
				category = 'nofilter';
				filter = categories.nofilter;
			break;
		}
		
		holder = $('#'+category+' input:checked');
		for(var i = 0; i < holder.length; i++){
			filter += holder[i]['value'];
			if(i < holder.length-1) filter += ',';
		}
		
		if(!filter){
			$('#results').text('You must pick options to do a search');
			return;
		}

        $.ajax({
            url: "http://api.census.gov/data/2010/acs5",
            data: {
                key: '827b48babd823a8c278c1097f85b7c0dc473145a',
                get: filter,
                for: 'state:' + state,
            },
            dataType: 'get',
            complete: function (data) {
                var status = data.status;
                var response = $.parseJSON(data.responseText);
				
                switch (status) {
                    case 200: //Indicates success. The response body will contain a JSON array as described above.
                        // Empty the list in case it has already got some content
                        $('ul#ajax').empty();
                        $('#underline').empty();

                        // Loop through each element in the word array we grabbed
                       $("#results").text("" + category);
                        for(x in response[1]) {
							if(response[1][x] != state){
								var label = '';
								for(y in categories[category])
									if(categories[category][y] == response[0][x]) label = y + ':';
									
								if(category == 'nofilter') label = '';
	                            $('ul#ajax').append('<li>' + label + ' $' + response[1][x] + '</li>');
							}
                        }
                        break;
                    case 204: //Indicates the request succeeded but no records matched your query.
                        break;
                    case 400: //Indicates that the request was not valid. Examples include queries for unknown variables or unknown geographies. A message describing the error will be included in the response body.
                        break;
                    case 500: //Indicates that there was a server-side error while processing the request. Please wait a few minutes and try your query again.
                        break;
                }
            }
        });
    });
	
	$('#filters input[type=radio]').on('click', function(){
		switch($(this).val()){
			case "0": //Race
				$("#races").show();
				$("#householdSize").hide();
			break;
			case "1": //Household
				$("#races").hide();
				$("#householdSize").show();
			break;
			case "2": //No Filter
				$("#races").hide();
				$("#householdSize").hide();
			break;
		}
	});

//Use checkboxes per race/household, send information, get information back
//and display it correctly
});