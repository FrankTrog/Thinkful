$(document).ready(function() {

$('form').submit(function(e){
    e.preventDefault();
	doSearch();
});

$('input').keypress(function(e){
    if(e.keyCode == 13){
	    e.preventDefault();
        doSearch();
    }
});

});

//change to your account id at bigstock.com/partners
var account_id = '976933';





//$("html").on('click', "input[type='submit']", function(e, val){
//var selected_category, search_term, infinite_scroll, page, jsonp_happening;
   /* if(!jsonp_happening) {
        jsonp_happening = true;
        var val = val || {};
        val.page = val.page || 1;
        var results = $("#results");

        //setup the paramaters for the JSONP request
        var params = {};
        if(val.category != "") params.category = val.category;
        params.q = val.q;
        params.page = val.page;
	}*/
	
	
	
	
	function doSearch() {
	
	var params = {};
	var listform = document.getElementById("myList");
    var input = listform.elements[0].value; //input from text box
	
		
        $.getJSON("http://api.bigstockphoto.com/2/"+account_id+"/search/?q="+input+"&callback=?", params, function(images){
            
			$('.modal-header').empty();
            for(x in images.data.images){
			    
			    $('.modal-header').append('<p><img src=' + images.data.images[x].small_thumb.url + ' /></p>');
            }
            
			$('#searchbox').val("");
			  
        });
	
}//end doSearch function

//});//end html event delegation
    
    /*Ajax version
    $.ajax({
        url:'http://api.bigstockphoto.com/2/"+account_id+"/search/?q=cake&callback=?',
        success:function(images){
            for(x in images.data.images){
			    $('.modal-header').append('<p><img src=' + images.data.images[x].small_thumb.url + ' /></p>');
            }
        }
    });
    */



