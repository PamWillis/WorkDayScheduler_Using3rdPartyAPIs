
$(function () { //wrapped code



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
    $('.saveBtn').on('click', function () {
      //get the value of the text
      var value = $(this).siblings('.description').val();
      //the time of the div class
      var time = $(this).parent().attr('id');
      //save in local storage and saves session for refresh
      localStorage.setItem(time, value);
      
      document.getElementsById("alert").innerHTML = "Appointment added to local storage &#9989";
      setTimeout(() => {
        console.log("5sec")
      }, 5000);
      document.getElementsById("alert").innerHTML = "";
      

    });

  });
  hourUpdater();

  setInterval(hourUpdater, 15000);

});
