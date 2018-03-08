// $(document).ready(function() {
//  $(".project-preview").on("click", function() {
//    $(this).siblings(".project-details").slideToggle();
//  });
// });

$(document).ready(function() {
  $(".project").on("mouseenter", function() {
    $(this).find(".project-details").fadeIn();
  });
  $(".project").on("mouseleave", function() {
    $(this).find(".project-details").fadeOut();
  });
});
