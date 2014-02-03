//change to your account id at bigstock.com/partners
var account_id = '976933';
var selected_category, search_term, infinite_scroll, page, jsonp_happening;
//var params = {};

$("html").on('click',"input[type='button']", function(e, val){
    if(!jsonp_happening) {
        jsonp_happening = true;
        var val = val || {};
        val.page = val.page || 1;
        var results = $("#results");

        //setup the paramaters for the JSONP request
        var params = {};
        if(val.category != "") params.category = val.category;
        params.q = val.q;
        params.page = val.page;
		
        $.getJSON("http://api.bigstockphoto.com/2/"+account_id+"/search/?q=cake&callback=?", params, function(images){
            //results.find("#loading").remove();
            //results.find("#oops").remove();
			
			$('.modal-header').append('<p><img src=' + images.data.images[0].small_thumb.url + ' /></p>');
            
            /*if(data && data.data && data.data.images) {
                var template = $(".item-template");
                $.each(data.data.images, function(i, v){     
                    template.find("img").attr("src",v.small_thumb.url);
                    template.find("a").attr("href","#"+v.id);
                    results.append(template.html());
					$("#results-holder ul").append(template.html());
                });
                } else {
                       results.append("<li id=\"oops\"><div class=\"alert alert-error\">OOOPS! We found no results. Please try another search.</div></li>");            
                }
            jsonp_happening = false;*/
        });
	}
});