// alert("working now");

// Get the current year for the copyright
$("#year").text(new Date().getFullYear());

// Init Scrollspy
$("body").scrollspy({ target: "#main-nav" });

// smooth Scrolling
$("#main-nav a").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    var hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      500,
      function () {
        window.location.hash = hash;
      }
    );
  }
});
