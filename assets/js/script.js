// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.



$(function () {
  console.log("hello");
  //date

  var today = dayjs();
  $('#1a').text(today.format('MMM D, YYYY'));
  var reformatDate = today.format('dddd, MMMM D YYYY, h:mm a');
  
  $('#3a').text(reformatDate);
  document.getElementById("currentDay").innerHTML = reformatDate;






  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //





});

var currentTime 
console.log(currentTime);
function labelTime() {
  //assign time slot to each id
  //compare time slot to current time
  if (currentTime = input) {
    classList.add("present")
  }
  else {
    console.log("ignore")
  }
}

function save_click() {

  //add past present or future to class (ex.  xxxxxx.classList.add("past");)

  console.log("test")
}

//get info from entry and save to Local Storage

this.parent.document.getElementById("hour-9").addEventListener("click", save_click)
this.parent.document.getElementById("hour-10").addEventListener("click", save_click)
this.parent.document.getElementById("hour-11").addEventListener("click", save_click)
this.parent.document.getElementById("hour-12").addEventListener("click", save_click)
this.parent.document.getElementById("hour-1").addEventListener("click", save_click)
this.parent.document.getElementById("hour-2").addEventListener("click", save_click)
this.parent.document.getElementById("hour-3").addEventListener("click", save_click)
this.parent.document.getElementById("hour-4").addEventListener("click", save_click)
this.parent.document.getElementById("hour-5").addEventListener("click", save_click)

// TODO: Add code to display the current date in the header of the page.

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //