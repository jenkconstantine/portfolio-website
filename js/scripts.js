console.log("Welcome to my portfolio!")
$(document).ready(function() {
  $(".project-preview").on("click", function() {
    $(this).siblings("project-details").slideToggle();
  });
});
