
$(function () { //wrapped code
  //load storage at refresh
  localStorage.getItem(time, value);

  console.log("hello");

  // date and time to top of page
  var today = dayjs();
  $('lead').text(today.format('MMM D, YYYY'));
  var reformatDate = today.format('dddd, MMMM D YYYY, h:mm a');

  $('lead').text(reformatDate);
  document.getElementById("currentDay").innerHTML = reformatDate;
  console.log(reformatDate)

  function hourUpdater() {
    var currentHour = dayjs().hour();
    console.log("this " + currentHour)
    $('.time-block').each(function () {
      var blockHour = parseInt($(this).attr('id').split('-')[1]);
      // check for past present or future add to class

      if (blockHour < currentHour) {
        $(this).addClass('past');

      }
      else if (blockHour === currentHour) {
        $(this).removeClass('past');
        $(this).addClass('present');
      }
      else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
      }
    });
  };
  
  //get info from entry and save to Local Storage
$(document).ready(function () {
  $('.saveBtn').on('click', function() {
    //get the value of the text
    var value = $(this).siblings('.description').val();
    //the time of the div class
    var time = $(this).parent().attr('id');
    //save in local storage 
  localStorage.setItem(time, value);
});
  //Show the notification and remove after 5 sec.
  $('.notification').addClass('show');

  setTimeout(function () {
    $('.notification').removeClass('show');
  }, 5000);
  
});
  hourUpdater();

  setInterval(hourUpdater, 15000);

});



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

  // TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
  
// document.getElementById("initEnter").textContent = "initials";
// localStorage.setItem("initials", "initials");
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
 
  
