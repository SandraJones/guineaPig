// There is sample HTML file content below so create an index.html for it and place the content in the body tag.
// Link in a JavaScript file named events.js.
// Link in a CSS file named events.css. You'll be using element.classList to manipulate the CSS classes on elements.
// Note: Output target is the output-target element.
// When any section is clicked the output target text should be "You clicked on the {text of the section} section"
// When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".
// When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".
// When you type characters into the input field, the output element should mirror the text in the input field.
// When you click the "Add color" button, the guinea-pig element's text color should change to blue.
// When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.
// When you click the "Capture it" button, the guinea-pig element should have a border added to it.
// When you click the "Rounded" button, the guinea-pig element's border should become rounded.
// The first section's text should be bold.
// The last section's text should be bold and italicized.
// Make the buttons stop appearing next to each other as inline elements. Change them into block elements.

// //creating variables

var output = document.getElementById("output-target");
var keyPress = document.getElementById("keypress-input");
var pageHeader = document.getElementById("page-header");
var pageTitle = document.getElementById("page-title");
var guineaPig = document.getElementById("guinea-pig");
//button variables
var colorButton = document.getElementById("add-color");
var makeLarge = document.getElementById("make-large");
var addBorder = document.getElementById("add-border");
var addRounding = document.getElementById("add-rounding");

var article = document.getElementsByClassName("article-section");
//above always returns an array

//setting up this array because I don't know how to loop thru above and know which section you are on
var sectionArray = ["Introduction", "Body", "Section 1", "Section 2", "Section 3", "Conclusion"];
console.log(output);


//must be a more efficient way to do this
function sectionIdentifier() { 
	for (var i = 0; i < sectionArray.length; i++) {
		// return sectionArray[i];
		if (i=0) {
			 output.innerHTML="You clicked on the " + sectionArray[0] +  " section.";
		}  else if (i=1) {
			   output.innerHTML="You clicked on the " + sectionArray[1] +  " section.";
		   } else if (i=2) {
           output.innerHTML="You clicked on the " + sectionArray[2] +  " section.";
		     } else if (i=3) {
             output.innerHTML="You clicked on the " + sectionArray[3] +  " section.";
		       } else if (i=4) {
		       	   output.innerHTML="You clicked on the " + sectionArray[4] +  " section.";
		         } else if (i=5) {
		         	   output.innerHTML="You clicked on the " + sectionArray[5] +  " section.";
		           }
		console.log("sectionArray name",sectionArray[i]);
	}
}

// article.addEventListener("click", sectionIdentifier() {
// });
// article.addEventListener("click", sectionIdentifier() {  
// });
//add mouseover
pageTitle.addEventListener("mouseover", function() {
  output.innerHTML = "You moved your mouse over the header.";
});
//add mouseout
pageTitle.addEventListener("mouseout", function() {
  output.innerHTML = "You left me!!";
});
//click on add color button and get blue text
colorButton.addEventListener("click", function() {
	guineaPig.classList.toggle("blue");
});

//mirroring function
//as keys are pressed output them in a field 


