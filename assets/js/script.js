$(document).ready(function() {
  let timeInput = $("#todo-text");
  let timeForm = $("#t-body");
  let saveBtn = $("#button");
  let currentDayElem = $("#currentDate");

  // init();
  // renderTodos();
  // storeInputs();

  currentDate();
  function currentDate() {
    let currentDate = moment();
    $(currentDayElem).text(currentDate.format("MMMM Do, YYYY"));
  }

  // set local storage
  $(".saveButton").on("click", function() {
    console.log("ree");
    let value = $(this)
      .siblings(".todo-text")
      .val();
    console.log(value);
    let time = $(this)
      .parent()
      .attr("id");

    localStorage.setItem(time, value);
  });
  $("#hour_9 .todo-text").val(localStorage.getItem("hour_9"));
  $("#hour_10 .todo-text").val(localStorage.getItem("hour_10"));
  $("#hour_11 .todo-text").val(localStorage.getItem("hour_11"));
  $("#hour_12 .todo-text").val(localStorage.getItem("hour_12"));
  $("#hour_1 .todo-text").val(localStorage.getItem("hour_1"));
  $("#hour_2 .todo-text").val(localStorage.getItem("hour_2"));
  $("#hour_3 .todo-text").val(localStorage.getItem("hour_3"));
  $("#hour_4 .todo-text").val(localStorage.getItem("hour_4"));
  $("#hour_5 .todo-text").val(localStorage.getItem("hour_5"));
});
