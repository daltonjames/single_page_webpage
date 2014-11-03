/* 
 *  Dalton James
 *  Dalton_James@student.uml.edu
 *  
 *  File: single_page.js
 *  
 *  Will create the dynamic content for the html page
 */

//error checking
var loc = "untouched"; 

//will navigate to the new content
function navigate() {

    // Get a reference to the "content" div.
    var contentDiv = $("#content");
    
    //error checking
    //if ( contentDiv === null ) { alert("fail"); }

    //contents will be the text shown on the page
    var contents = "";
    
    //which page should be displayed
    loc = location.hash;
    
    //returns the content to be displayed
    contents = get_content(loc);
    
    // Set the "content" div to contain the current hash value.
    contentDiv.text(contents);
}

//function that takes the current page and returns content
//to be displayed on the page
function get_content(page) {
    //var to return the content
    var dy_content = "";
    
    //else if to check which page was passed
    if(page === "#about"){
        dy_content = "This is the about page"; 
    }
    else if(page === "#contact"){
        dy_content = "This is the contact page";
    }
    //default to home page
    else{
        dy_content = "This is the home page";   
    }    
    
    //returns the content
    return dy_content;
}

//wait for the page to be ready and run the navigate function
$(document).ready( function() {
  navigate();  
});

//Listen for hash value changes and run navigate function
//if it changes 
window.addEventListener("hashchange", navigate);


