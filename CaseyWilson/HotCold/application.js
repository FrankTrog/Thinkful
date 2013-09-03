var randomNumber = Math.floor((Math.random()*100)+1); 
console.log(randomNumber);

$("numberField").keyup(function(event){
    if(event.keyCode == 13){
        $("Button1").click();
    }
});

//attempt to make the gauge arrow rotate 45 degrees back and forth  
$(function() {
    var $gaugeArrow = $("#right-arrow"), degree = 45, slow;
	$gaugeArrow.css({ WebkitTransform: 'rotate(' + degree + 'deg)'});
	$gaugeArrow.css({ '-moz-transform': 'rotate(' + degree + 'deg)'});
/*
    function rotate() {             
        $gaugeArrow.css({ WebkitTransform: 'rotate(' + degree + 'deg)'});        
        $gaugeArrow.css({ '-moz-transform': 'rotate(' + degree + 'deg)'});     
        timer = setTimeout(function() {
            ++degree; rotate();
        },5);
    }
    rotate();

    $(this).toggle(function() {
        clearTimeout(timer);
    }, function() {
        rotate();
    });
*/
}); 
var degrees = new Object();
var current = null;
var previous = null;

var outSpace = document.getElementById("outputSpace");

function submit(){
	var arrow = $("#right-arrow"), degree = 45, slow;
	var inBox = document.getElementById("numberField");
	var val = inBox.value;

	previous = current;
	current = val;
	
	//Subtract current guess from random number and ensure the result is positive. 
	//Divide that result by the random number and then multiply it by 100 to get a whole number. 
	//Subtract 100 by that result and you now have the current percentage to the random number.
	degrees.percent = 100-((Math.abs(randomNumber - current)/randomNumber)*100);
		
	degrees.cold = 45;
	degrees.hot = 67;
	degrees.hotperc = 2.2;
	degrees.coldperc = 1.78
	
	if(degrees.percent == 56){
		degree = degrees.current = 0;
	}else if(degrees.percent > 56){
		degree = degrees.current = 360-((((degrees.percent-56)*degrees.hotperc)/100)*degrees.hot);
	}else if(degrees.percent < 56){
		degree = degrees.current = (((56-degrees.percent)*degrees.coldperc)/100)*degrees.cold;
	}
	console.log(degrees.percent, degree);
	arrow.css({ WebkitTransform: 'rotate(' + degree + 'deg)'});
    arrow.css({ '-moz-transform': 'rotate(' + degree + 'deg)'});

	var removeMessages = function () {
			document.getElementById("Right").style.display='none';
			document.getElementById("tooHigh").style.display='none';
			document.getElementById("tooHigh-warmer").style.display='none';
			document.getElementById("tooHigh-colder").style.display='none';
			document.getElementById("tooLow").style.display='none';
			document.getElementById("tooLow-warmer").style.display='none';
			document.getElementById("tooLow-colder").style.display='none';
			document.getElementById("NaN").style.display='none';
			document.getElementById("out-of-range").style.display='none';
		};

	var removeDial = function () {
		//document.getElementById("right-arrow").style.display = 'none';
		//document.getElementById("cold-arrow").style.display = 'none';
		//document.getElementById("hot-arrow").style.display = 'none';
	};

	if (val > 100 || val < 1) {
		removeMessages();
		removeDial();
		document.getElementById("out-of-range").style.display='block';
		//document.getElementById("cold-arrow").style.display = 'inline-block';
	}
	
	else if (val == randomNumber) {
		removeMessages();
		removeDial();
		document.getElementById("Right").style.display='block';
		//document.getElementById("hot-arrow").style.display = 'inline-block';
	}
	
	else if (current > randomNumber) {
		removeMessages();
		removeDial();
		
		if(previous !== null && Math.abs(randomNumber-current)<Math.abs(randomNumber-previous)){
			document.getElementById("tooHigh-warmer").style.display='block';
			document.getElementById("right-arrow").style.display = 'inline-block';
		}
		else if (previous !== null && Math.abs(randomNumber-current)>Math.abs(randomNumber-previous)){
			document.getElementById("tooHigh-colder").style.display='block';
			document.getElementById("cold-arrow").style.display = 'inline-block';
		}
		else{
			document.getElementById("tooHigh").style.display='block';
			document.getElementById("cold-arrow").style.display = 'inline-block';
		}
	}
	
	else if (current < randomNumber) {
		removeMessages();
		removeDial();
		if(previous !== null && Math.abs(randomNumber-current)<Math.abs(randomNumber-previous)){
			document.getElementById("tooLow-warmer").style.display='block';
			//document.getElementById("right-arrow").style.display = 'inline-block';
		}
		else if (previous !== null && Math.abs(randomNumber-current)>Math.abs(randomNumber-previous)){
			document.getElementById("tooLow-colder").style.display='block';
			//document.getElementById("cold-arrow").style.display = 'inline-block';
		}
		else{
			document.getElementById("tooLow").style.display='block';
			//document.getElementById("cold-arrow").style.display = 'inline-block';
		}
	}
	
	else {
		removeMessages();
		removeDial();
		document.getElementById("NaN").style.display='block';
		//document.getElementById("cold-arrow").style.display = 'inline-block';
	}

//erase value in text entry box

	document.getElementById("numberField").value= '';

};	

