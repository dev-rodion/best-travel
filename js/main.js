window.onload = () => {
  const changeLanguage = $("#change-language");

  $(window).on("click", () => {
    changeLanguage.parent().removeClass("--active");
  });

  changeLanguage.on("click", (e) => {
    e.stopPropagation();
    changeLanguage.parent().toggleClass("--active");
  });

  $("#intro_slider").slick({
    fade: true,
    appendArrows: "#intro_arrows_box",
    prevArrow: `
    <button class="slick-arrow --prev">
      <svg width="60" height="61" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle r="30" transform="matrix(-1 0 0 1 30 30.5)" fill="#2A85A2"/>
        <path d="M35.7131 43L22 30L35.7131 17L38 19.1664L26.5705 30L38 40.8336L35.7131 43Z" fill="white"/>
      </svg>
    </button>
    `,
    nextArrow: `
    <button class="slick-arrow --next">
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="30" cy="30" r="30" fill="#2A85A2"/>
        <path d="M25.6975 42.7275L38.425 30L25.6975 17.2725L23.575 19.3935L34.183 30L23.575 40.6065L25.6975 42.7275Z" fill="white"/>
      </svg>
    </button>
    `,
  });

  $(".search__select select").customSelect({
    block: "search__select--custom",
    showCallback: function () {
      $(this).parent().addClass("search__select--active");
    },
    hideCallback: function () {
      $(this).parent().removeClass("search__select--active");
    },
    includeValue: true,
  });
};
