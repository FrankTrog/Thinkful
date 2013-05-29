var headeritems = new Array();
headeritems['main'] = '<h1>Making collaboration productive and enjoyable for people every day.</h1>'
					  +'<h2>Frustration-free web-based apps for collaboration, sharing information, and making decisions.</h2>';
headeritems['left'] = '<h1><span>Basecamp</span> is the project management tool you wish you had on your last project.</h1>'
					  +'<h2>Are you still managing projects with email? Are you still using Excel for your to-do lists? It&rsquo;s time to upgrade to Basecamp. Manage projects and collaborate with your team and clients the modern way.</h2>'
					  +'<img src="images/arrow-left.png" alt="arrow" />';
headeritems['center'] = '<h1><span>Highrise</span> remembers the important things about people you&rsquo;d normally forget.</h1>'
					  +'<h2>Keep a permanent record of people you do business with. Know who you talked to, when you talked to them, what was said, and when to follow up next. Over 20,000,000 contacts are tracked using Highrise.</h2>'
					  +'<img src="images/arrow-left.png" alt="arrow" />';
headeritems['right'] = '<h1>From near or far, <span>Campfire</span> helps teams work together over the web in real-time.</h1>'
					  +'<h2>Share ideas, discussions, concepts, images, code samples, videos, mockups, and documents in a real-time private chat room. It&rsquo;s game changing. We couldn&rsquo;t run our own business without Campfire.</h2>'
					  +'<img src="images/arrow-right.png" alt="arrow" />';

$(document).ready(function(){
	$('#badgeleft').on('mouseenter', function() {
		$('#headlines').html(headeritems['left']);
		$('#headlines h1').addClass('h1small');
		$('#headlines h2').addClass('h2small');
		$('#headlines img').addClass('arrowleft');
	}).on('mouseleave', function(){
	  $('#headlines').html(headeritems['main']);
	});
	
	$('#badgeright').on('mouseenter', function() {
		$('#headlines').html(headeritems['right']);
		$('#headlines h1').addClass('h1small');
		$('#headlines h2').addClass('h2small');
		$('#headlines img').addClass('arrowright');
	}).on('mouseleave', function(){
	  $('#headlines').html(headeritems['main']);
	});
	
	$('#badgecenter').on('mouseenter', function() {
		$('#headlines').html(headeritems['center']);
		$('#headlines h1').addClass('h1small');
		$('#headlines h2').addClass('h2small');
		$('#headlines img').addClass('arrowcenter');
	}).on('mouseleave', function(){
	  $('#headlines').html(headeritems['main']);
	});
});