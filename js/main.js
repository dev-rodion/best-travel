window.onload = () => {
  try {
    const changeLanguage = $("#change-language");

    $(window).on("click", () => {
      changeLanguage.parent().removeClass("--active");
    });

    changeLanguage.on("click", (e) => {
      e.stopPropagation();
      changeLanguage.parent().toggleClass("--active");
    });
  } catch (error) {
    console.log(error);
  }

  try {
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
  } catch (error) {
    console.log(error);
  }

  try {
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
  } catch (error) {
    console.log(error);
  }

  try {
    $(".rate-yo").rateYo({
      ratedFill: "#F4C11A",
      normalFill: "#E2E2E2",
      readOnly: true,
      starWidth: "24px",
      starSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.2368 8.16884L12.6839 2.3101C12.5038 1.89663 11.9486 1.89663 11.7684 2.3101L9.21553 8.16884C9.1421 8.33735 8.99123 8.45337 8.81714 8.47522L2.76441 9.23488C2.33725 9.28849 2.1657 9.84737 2.48151 10.1565L6.95645 14.5371C7.08516 14.6631 7.14279 14.8508 7.10862 15.0328L5.92075 21.3611C5.83692 21.8077 6.28603 22.1531 6.66138 21.9307L11.98 18.7793C12.1329 18.6886 12.3194 18.6886 12.4724 18.7793L17.791 21.9307C18.1663 22.1531 18.6155 21.8077 18.5316 21.3611L17.3437 15.0328C17.3096 14.8508 17.3672 14.6631 17.4959 14.5371L21.9709 10.1565C22.2867 9.84737 22.8122 9.26341 21.688 9.23488L15.6352 8.47522C15.4611 8.45337 15.3103 8.33735 15.2368 8.16884Z" />
    </svg>`,
    });
  } catch (error) {
    console.log(error);
  }

  // LightGallery
  try {
    $("#lightgallery a").on("click", function (e) {
      e.preventDefault();
    });
    $("#lightgallery").magnificPopup({
      delegate: "a",
      type: "image",
      tLoading: "Loading image #%curr%...",
      mainClass: "mfp-img-mobile",
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      },
    });
  } catch (error) {
    console.log(error);
  }
};
