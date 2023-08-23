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

function labelTime() {
  // get the current hour
  var currentHour = dayjs().hour();
  $(hour.format(h))
  console.log(currentHour);

  // loop over time blocks
  $('.time-block').each(function () {
  // use $(this) selector to target the current .time-block element, get it's id value, then just take the part after the dash -
      var blockHour = parseInt($(this).attr('id').split('-')[1]);

      console.log(blockHour);
      // use conditionals to determind which style to apply

      if (blockHour < currentHour) {
          // use $(this) selector to apply/remove the necessary class(es) for this condition
      } else if (blockHour === currentHour) {
              // use $(this) selector to apply/remove the necessary class(es) for this condition
      } else {
          // use $(this) selector to apply/remove the necessary class(es) for this condition
      }
  });
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
this.parent.document.getElementById("hour-13").addEventListener("click", save_click)
this.parent.document.getElementById("hour-14").addEventListener("click", save_click)
this.parent.document.getElementById("hour-15").addEventListener("click", save_click)
this.parent.document.getElementById("hour-16").addEventListener("click", save_click)
this.parent.document.getElementById("hour-17").addEventListener("click", save_click)

// TODO: Add code to display the current date in the header of the page.

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //