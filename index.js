// get the text out of search box

// must add error checking like check if search box is empty and user has pressed search 

// search database for the user's entered book name

// if it is available display pop up box indicating success 

// or display pop up box indicating failure 

//var btnSearch = document.querySelector('button');

var onLoadCallbacks = [];

// Wait for the page to load
document.addEventListener("DOMContentLoaded", function(){
    ProcessOnLoad();
    
});

// Any callbacks that need to be called once page has loaded call them
function ProcessOnLoad(){
    for(var i = 0; i < onLoadCallbacks.length; i++){
        onLoadCallbacks[i]();
    }
}
// Function to add the callbacks to the array declared at the top
function OnLoad(callback){
    onLoadCallbacks.push(callback);
}

// Telling the callback what to do when it is executed
OnLoad(function() {
    // Find the element on the page with the id of searchBtn
    var btn = document.getElementById("searchBtn");
    btn.addEventListener("click", function(){
        alert("Hello World!");  
    });
    console.debug(btn);
});
