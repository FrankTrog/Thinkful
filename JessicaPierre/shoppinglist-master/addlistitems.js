//THE TOP LIST
function addItems() {

var listform = document.getElementById("myList");
var input = listform.elements[0].value; //input from text box

document.getElementById("livelist").innerHTML += "<li><input type='checkbox'/><label>" + input + "</label></li>";

} //end addItems function

//THE BOTTOM LIST - USES ARRAY AND LOOPS
function prelim() {    
    secArray = ["avocado","apples","spinach"]; 
    //don't use 'var' so variable can be public
   for (item in secArray) {
      document.getElementById("newdiv").innerHTML += "<li><input type='checkbox'/><label contenteditable='true'>" + secArray[item] + "</label></li>";
	  /*it seems that adding the contenteditable attribute here does not work. why is that?*/
	  /* COMMENT - FRANK
	  It does work
	  */
   } //end for loop
 } //end prelim function
 

function testItems() {
  var listform = document.getElementById("secList");
  var secinput = listform.elements[0].value; //input from text box
  
  secArray.push(secinput);
  
  /*in the following lines here, what I originally tried to do was use a for loop to loop through all the array items, but the += would cause duplicate lists to appear in the div, and using = instead of += would cause the paragraph and previous item entries to not appear at all because it overwrites them. Is it better not to use loops at all with innerHTML statements?*/ 
  /* COMMENT - FRANK 
  What is the point of looping through the array here?
  */    
  document.getElementById("newdiv").innerHTML += "<input type='checkbox'/><label>" + secArray[secArray.length-1] + "</label><br/>";
  
 
  
      
} //end testItems function
	