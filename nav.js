$(window).on("scroll", () => {
  if ($(window).scrollTop()) {
    $(".nav-container").addClass("navbarScroll");
    $(".link-list").addClass("link-list-hover");
  } else {
    $(".nav-container").removeClass("navbarScroll");
    $(".link-list").removeClass("link-list-hover");
  }
});

const navList = $(".nav-list");
const hamburger = $(".hamburger");

hamburger.on("click", () => {
  hamburger.toggleClass("active");
  navList.toggleClass("active");
});
