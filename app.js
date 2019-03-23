// search database for the user's entered book name

// if it is available display pop up box indicating success 

// or display pop up box indicating failure 

// Holds reference to the search btn 

var searchBtn = document.querySelector('#searchBtn');
// Holds the book name enter by user
var bookName = document.querySelector('#bookName');
// Holds reference to div so we can display error message 
var form = document.querySelector('.errorMsg');
// Link to book table
var bookTable = document.querySelector('.books');

// When user presses search
searchBtn.addEventListener('click', (e) => {
    // Prevents btn default behaviour 
    e.preventDefault();
    // Check search text is valid 
    if(bookName.value === ''){
        form.innerHTML = 'Please enter a book name';
        // Remove error message after 3 seconds 
        setTimeout(() => form.remove(), 3000);        
    } else {
        // Book name is valid 
        var li = document.createElement(li);
        // Get text entered
        value = bookName.value;
        // Create list element with book name as value
        li.appendChild(document.createTextNode(value));
        // Add new table element to list
        bookTable.appendChild(li);
        // Clear search box
        bookName.value = '';

    }
});
// var onLoadCallbacks = [];

// // Wait for the page to load
// document.addEventListener("DOMContentLoaded", function(){
//     ProcessOnLoad();
// });

// // Any callbacks that need to be called once page has loaded call them
// function ProcessOnLoad(){
//     for(var i = 0; i < onLoadCallbacks.length; i++){
//         onLoadCallbacks[i]();
//     }
// }
// // Function to add the callbacks to the array declared at the top
// function OnLoad(callback){
//     onLoadCallbacks.push(callback);
// }

// // Telling the callback what to do when it is executed
// OnLoad(function() {
    
//     // Find the element on the page with the id of searchBtn
//     var btn = document.getElementById("searchBtn");
//     var bookName = document.getElementById("bookName");
//     var form = document.querySelector(".errorMsg");
//     var booksList = document.querySelector(".books");
  
//     btn.addEventListener("click", function(){
//         // if the user hasn't entered anything and presses search
//         if(bookName.value === ''){
//             // display error
//             form.classList.add('Error');
//             form.innerHTML = "Please enter a book name";
//             // remove error message after 3 seconds     
//             setTimeout(() => form.remove(), 3000);
//         } else {
//             const li = document.createElement('li');
//             bookNameValue = bookName.value;
//             li.appendChild(document.createTextNode(bookNameValue));
//             booksList.appendChild(li);

//             bookName.value = "";
//         }
//     });
//     // prevent page from refreshing on button click
//     return false;
// });



