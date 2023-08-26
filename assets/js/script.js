
$(function () { //wrapped code
  // date and time to top of page
  var today = dayjs();
  $('lead').text(today.format('MMM D, YYYY'));
  var reformatDate = today.format('dddd, MMMM D YYYY, h:mm a');

  $('lead').text(reformatDate);
  document.getElementById("currentDay").innerHTML = reformatDate;
  //console.log(reformatDate)

  function hourUpdater() {
    var currentHour = dayjs().hour();
    // line 20 to adjust time to test
    // currentHour = currentHour - 10;
   // console.log("this " + currentHour)
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
  $('.saveBtn').on('click', function () {
    //the time of the div class
    let time = $(this).parent().attr('id');
    //get the value of the text
    let value = $(this).siblings('.description').val();
    //save in local storage and saves session for refresh
    localStorage.setItem(time, value);
    //console.log(value);
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

  // let valueforNine = localStorage.getItem("hour-9")
  // console.log(vallueforNine)
  // let timeblockNine = $("#hour-9").children("textarea")
  // console.log(timeblockNine)
  // $("#hour-9").children("textarea").val(valueforNine)
  // $("#hour-10").children("textarea").val(localStorage.getItem("hour-10"))
  // $("#hour-11").children("textarea").val(localStorage.getItem("hour-11"))
  // $("#hour-12").children("textarea").val(localStorage.getItem("hour-12"))
// resetting information upon refresh
  for(var i = 9; i < 18; i++){
    $("#hour-"+i).children("textarea").val(localStorage.getItem("hour-"+i))
  }

});


//tutor explaining localStorage

// How to save and Item and get an item using locat storage
// let fruit = "banana";
// let Keyname = "myfruits"

// localStorage.setItem(Keyname,fruit)

// let myfruit = localStorage.getItem("favFruits")

// console.log("My favorite Fruit is: " + myfruit)

// ------
//saving javascript items into localstorage

// let myFruits = ["apple","strawberry", "watermelon"];

// localStorage.setItem("listOfFruits", JSON.stringify(myFruits))

// let getBackMyLlst = JSON.parse( localStorage.getItem("listOfFruits"))

// console.log("This is my list: " + getBackMyLlst)
// console.log(getBackMyLlst[0])


// let favNumber = {
//   number: 5,
//   name: "juan"
// }


// localStorage.setItem("number", JSON.stringify( favNumber) )

// let getbacknumber = JSON.parse( localStorage.getItem("number"))
// console.log("this is number: " + getbacknumber)
// console.log(getbacknumber.number)
