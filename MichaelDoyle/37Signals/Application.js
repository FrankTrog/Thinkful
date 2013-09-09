$(document).ready (function() {
	$("#box1").on("mouseenter", function(){
		$("#bannerbc") .css ("text-indent", "0");
  		$("#banner").hide();
	});
	$("#box1").on("mouseleave", function(){
		$("#bannerbc").css("text-indent", "-5000px");
  		$("#banner").show();
	});
	$("#box2").on("mouseenter", function(){
		$("#bannerhr").css("text-indent", "0");
  		$("#banner").hide();
	});
	$("#box2").on("mouseleave", function(){
		$("#bannerhr").css("text-indent", "-5000px");
  		$("#banner").show();
	});
	$("#box3").on("mouseenter", function(){
		$("#bannercf").css("text-indent", "0");
  		$("#banner").hide();
	});
	$("#box3").on("mouseleave", function(){
		$("#bannercf").css("text-indent", "-5000px");
  		$("#banner").show();
	});
});