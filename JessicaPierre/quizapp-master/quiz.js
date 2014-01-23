$(document).ready(function() {

$('form').submit(function(e){
    e.preventDefault();
	
});
$('form input[type=radio]').click(function() {
    $('input[type=submit]').prop('disabled',false);

});

$('#q1 input[type=submit]').click(function() {
      
      $('#q1').addClass('hidden');
	  $('#q2').removeClass('hidden');
	  getAnswer("question1");
	  
  });
  

  $('#q2 input[type=submit]').click(function() {
      
      $('#q2').addClass('hidden');
	  $('#q3').removeClass('hidden');
	  getAnswer("question2");
	  
  });
  
  $('#q3 input[type=submit]').click(function() {
      $('#q3').addClass('hidden');
	  $('#q4').removeClass('hidden');
	  getAnswer("question3");
  });
  
  $('#q4 input[type=submit]').click(function() {
      $('#q4').addClass('hidden');
	  $('#q5').removeClass('hidden');
	  getAnswer("question4");
  });
  
   
  $('#q5 input[type=submit]').click(function() {
      $('#q5').addClass('hidden');
	  getAnswer("question5");
	  showScore();
	  	  	  
	  });
  }); //end document.ready


function getAnswer(i) {
     /*MY ORIGINAL PLAN WAS TO PUT A PARAMETER IN GETANSWER SO THAT EACH CALL TO THE FUNCTION WOULD INCLUDE AN ARGUMENT THAT CORRESPONDS TO THE CURRENT QUESTION. THEN THE ARGUMENT VALUES ("question1","question2",etc. in function calls above in jQuery section) WOULD GET PUT INTO A SWITCH STATEMENT TO GET THE FORM ID OF THE QUESTION AND THEN I'D COMPARE THE VALUE OF THE RADIO BUTTON CLICKED IN THE FORM WITH THE CORRECT ANSWER FOR THAT CURRENT QUESTION IN ANOTHER SWITCH STRUCTURE. HOWEVER, AFTER SEVERAL TRIES, I FOUND THAT THE ARGUMENT WAS NOT GETTING RECOGNIZED IN GETANSWER, SO THE SWITCH STATEMENTS WEREN'T WORKING SO THE SCORE WAS NOT GETTING CALCULATED PROPERLY.  */
	 
	 /*THIS COMMENTED-OUT SECTION HERE WAS THE LAST WAY I TRIED THAT FAILED
	 
	 //COMMENT - FRANK
	 //The reason this seciton failed was due to the fact that you set i = getAnswer.arguments[0].value;
	 //You were already setting i to question1,2,3,4 or 5 based on when you called getAnswer so there
	 //isn't any need to set it to anything else.
	 i = getAnswer.arguments[0].value;
	 
	 var questionform;
	 
	 //COMMENT - FRANK
	 //This switch statement isn't necessary. Just do questionform = document.getElementById(i);
	 switch (i) {
	 case "question1": 
	  questionform = document.getElementById("question1");
	  break; 
	  
	  case "question2": 
	  questionform = document.getElementById("question2");
	  break; 
	 
	  case "question3":
	  questionform = document.getElementById("question3");
	  break;
	  
	  case "question4":
	  questionform = document.getElementById("question4");
	  break;
	  
	  case "question5":
	  questionform = document.getElementById("question5");
	  break;
	 }//end switch
	 
ONCE THE FORM ID WAS OBTAINED, THE PLAN WAS TO LOOP THROUGH THE RADIO BUTTONS OF THE CURRENT QUESTION AND GET THE VALUE OF THE BUTTON THAT WAS CHECKED
	  
	  for (var index = 0; index < questionform.choices.length; index++){
    if (questionform.choices[index].checked) {
       selection = questionform.choices[index].value;
       break;
       } //end if statement
      } //end for loop
  
 */   
 
 /*THIS IS THE SECOND SWITCH STATEMENT I USED IN MY FAILED METHOD TO COMPARE THE RADIO BUTTON VALUE WITH THE CORRECT ANSWER IN THE QUESTIONS OBJECT
	//COMMENT - FRANK
	//This switch statement isn't really necessary either. You could set a global variable to keep track of which question you are on
	//And then just check if the selection == the correct one using that. See the jsfiddle we created for the example as it took changing
	//quite a bit of code.  http://jsfiddle.net/FrankTrog/ZT93a/
	
	switch (i) {
	case "question1": 
	if (selection == questions[0].options[ques1["correct"]])
    score += 1;
	break; 
	
	case "question2": 
	if (selection == questions[1].options[ques2["correct"]])
    score += 1;
	break; 
	
	case "question3": 
	if (selection == questions[2].options[ques3["correct"]])
    score += 1;
	break; 
	
	case "question4": 
	if (selection == questions[3].options[ques4["correct"]])
    score += 1;
	break; 
	
	case "question5": 
	if (selection == questions[4].options[ques5["correct"]])
    score += 1;
	break; 
	}//end switch loop
	
*/
	/*SINCE MY METHOD ABOVE DIDN'T WORK, I JUST MADE SEPARATE STATEMENTS FOR EACH QUESTION, WHICH I FEEL I SHOULDLN'T HAVE TO DO BECAUSE IT'S NOT PRACTICAL*/
	
	questionform1 = document.getElementById("question1"); 
	questionform2 = document.getElementById("question2");
	questionform3 = document.getElementById("question3");
	questionform4 = document.getElementById("question4");
	questionform5 = document.getElementById("question5");
	
	//LOOP STATEMENTS TO GO THROUGH THE RADIO BUTTONS FOR EACH QUESTION
	for (var index = 0; index < questionform1.choices.length; index++){
    if (questionform1.choices[index].checked) {
       selection1 = questionform1.choices[index].value;
       break;
       } //end if statement
      } //end for loop
	  
	for (var index = 0; index < questionform2.choices.length; index++){
    if (questionform2.choices[index].checked) {
       selection2 = questionform2.choices[index].value;
       break;
       } //end if statement
      } //end for loop
	  
	for (var index = 0; index < questionform3.choices.length; index++){
    if (questionform3.choices[index].checked) {
       selection3 = questionform3.choices[index].value;
       break;
       } //end if statement
      } //end for loop
	  
	for (var index = 0; index < questionform4.choices.length; index++){
    if (questionform4.choices[index].checked) {
       selection4 = questionform4.choices[index].value;
       break;
       } //end if statement
      } //end for loop
	  
	for (var index = 0; index < questionform5.choices.length; index++){
    if (questionform5.choices[index].checked) {
       selection5 = questionform5.choices[index].value;
       break;
       } //end if statement
      } //end for loop

 
	score = 0; //INITIALIZE VARIABLE THAT HOLDS OVERALL QUIZ SCORE
	
	
/*CONTINUATION OF DOING SEPARATE STATEMENTS FOR EACH QUESTION SINCE METHOD USING SWITCH CONSTRUCTS DID NOT WORK; THIS IS WHERE THE VALUE OF THE RADIO BUTTON CLICKED IS COMPARED WITH THE CORRECT ANSWER IN THE QUESTIONS OBJECT BELOW. 

ALSO - EVEN THOUGH THE QUIZ APP WORKS USING THIS LONG WAY, GOOGLE DEVELOPER STILL GIVES ME ERROR MESSAGES SAYING THE VARIABLES SELECTION 1, 2, 3, 4, AND 5 ARE NOT DEFINED. DO I HAVE TO INITIALIZE THEM?*/
	
    if (selection1 == questions[0].options[ques1["correct"]])
    score += 1; 
	
	if (selection2 == questions[1].options[ques2["correct"]])
    score += 1;
   
    if (selection3 == questions[2].options[ques3["correct"]])
    score += 1;
	
	if (selection4 == questions[3].options[ques4["correct"]])
    score += 1;
	
	if (selection5 == questions[4].options[ques5["correct"]])
    score += 1; 
	
} //end getAnswer function

/*THIS SHOWSCORE FUNCTION GETS CALLED AFTER ANSWERING QUESTION 5 AND AFTER CALLING GETANSWER FOR QUESTION 5 IN JQUERY SECTION*/
function showScore() {

 document.getElementById("overallscore").innerHTML = "<p>Your overall score is " + score + " out of 5.</p>";
}
 
/*THE PROJECT INSTRUCTIONS SAY THAT EACH QUESTION SHOULD BE STORED AS A JAVASCRIPT OBJECT AND TO STORE LIST OF QUESTIONS IN AN ARRAY, SO I JUST FOLLOWED THE EXAMPLE EXACTLY*/
 
var questions = [


//question 1
ques1 = {question: "Who was the first president of the United States?",
 options: ["George Washington","John Quincy Adams","Andrew Jackson"],
 correct: 0 
},
//question 2
ques2 = {question: "Which president signed the Emancipation Proclamation?",
 options: ["Abraham Lincoln","Ulysses S. Grant","Herbert Hoover"],
 correct: 0 
},
//question 3
ques3 = {question: "Who was the first Catholic president of the United States?",
 options: ["John F. Kennedy","Woodrow Wilson","Ronald Reagan"],
 correct: 0 
},
//question 4
ques4 = {question: "Which US president is credit with The Great Society?",
 options: ["Lyndon B. Johnson","John F. Kennedy","Richard Nixon"],
 correct: 0 
},
//question 5
ques5 = {question: "What is the capital of the United States?",
 options: ["Washington, DC","Frederick, MD","Ashburn, VA"],
 correct: 0 
}
];



