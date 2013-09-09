var randomNumber = Math.floor((Math.random()*100)+1); 
console.log(randomNumber);

$("numberField").keyup(function(event){
    if(event.keyCode == 13){
        $("Button1").click();
    }
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
	
	if(randomNumber > current){
		//If randomNumber is greater than the guess then divide the guess by the randomNumber and multiply it by 100 to get a whole number
		degrees.percent = (current/randomNumber)*100;	
	}else
		//If randomNumber is less than the guess then divide the randomNumber by the guess and multiply it by 100 to get a whole number
		degrees.percent = (randomNumber/current)*100;
		
	degrees.cold = 45;
	degrees.hot = 67; //Was 67
	degrees.hotperc = 2.2;
	degrees.coldperc = 1.78
	
	//The best way to think of this is to think of the quartesian coordinate system. 0 separates the top right and bottom right sections of the graph
	//If the precent is 50 then degrees should be 0.
	//If percent is greater than 50 we need to divide it by 100 to get a decimal value to then multiply by the max degrees we want to go. Since we are going from 360 counter clockwise we have to subtract this number from 360
	//If the percent is less than 50 we need to subtract 50 from the percentage, divide it by 100 and then multiply it by the max degrees we want to go. Keep in mind we are going in a positive direction clockwise from 0 down to C.
	if(degrees.percent == 50)
		degree = degrees.current = 0;
	else if(degrees.percent > 50)
		degree = degrees.current = 360-((degrees.percent/100)*67);
	else if(degrees.percent < 50)
		degree = degrees.current = ((50-degrees.percent)/100)*67;

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

	if (val > 100 || val < 1) {
		removeMessages();
		document.getElementById("out-of-range").style.display='block';
	}
	
	else if (val == randomNumber) {
		removeMessages();
		document.getElementById("Right").style.display='block';
	}
	
	else if (current > randomNumber) {
		removeMessages();
		
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
		if(previous !== null && Math.abs(randomNumber-current)<Math.abs(randomNumber-previous)){
			document.getElementById("tooLow-warmer").style.display='block';
		}
		else if (previous !== null && Math.abs(randomNumber-current)>Math.abs(randomNumber-previous)){
			document.getElementById("tooLow-colder").style.display='block';
		}
		else{
			document.getElementById("tooLow").style.display='block';
		}
	}
	
	else {
		removeMessages();
		removeDial();
		document.getElementById("NaN").style.display='block';
	}

	//erase value in text entry box
	document.getElementById("numberField").value= '';

};	

