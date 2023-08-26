
$(function () { //wrapped code
  // localStorage.getItem(time, value);


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
    // line 20 to adjust time to test
    currentHour = currentHour - 10;
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
  // const saveData = () => {
  $('.saveBtn').on('click', function () {
    //the time of the div class
    let time = $(this).parent().attr('id');
    //get the value of the text
    let value = $(this).siblings('.description').val();

    //save in local storage and saves session for refresh
    localStorage.setItem("time", "value");
    console.log(value);
    notification();
  });

  const notification = () => {
    $(".notification").removeClass("hide");
    $(".notification").addClass("show");
    setTimeout(() => {
      $(".notification").removeClass("show");
      $(".notification").addClass("hide");
    }, 5000);

  };

  // };
  hourUpdater();

  setInterval(hourUpdater, 15000);
});

