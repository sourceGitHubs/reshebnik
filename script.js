$("#button").click(function () {
  const hasClass = $("#answer").hasClass("active");

  if (hasClass) {
    $(this).text("Показать");
    $("#answer").removeClass("active");
    $("#button").removeClass("hidden_button");
  } else {
    $("#answer").addClass("active");
    $("#button").addClass("hidden_button");
  }
});
