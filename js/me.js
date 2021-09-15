portfolioHoverEffect("#tuesday", "#blm-txt");
  portfolioHoverEffect("#security", "#security-txt");
  portfolioHoverEffect("#prism", "#prism-txt");
  portfolioHoverEffect("#hollywood", "#hollywood-txt");
  portfolioHoverEffect("#motivation", "#daily-txt");
  portfolioHoverEffect("#music", "#music-txt");
  portfolioHoverEffect("#art", "#art-txt");
  portfolioHoverEffect("restuarant", "giraffe-txt");



  function portfolioHoverEffect(bgImage, displayText) {
    $(`#${bgImage}`).hover(
      function () {
        $(`#${displayText}`).show();
        $(`#${bgImage}`).css({ opacity: 0.8 });
      },
      function () {
        $(`#${displayText}`).hide();
        $(`#${bgImage}`).css({ opacity: 1 });
      });
    }
    