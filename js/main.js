window.onload = () => {
  const changeLanguage = document.getElementById("change-language");

  window.addEventListener("click", (event) => {
    const isInsideChangeLanguage = changeLanguage.parentElement.contains(event.target);

    if (!isInsideChangeLanguage) {
      changeLanguage.parentElement.classList.remove("--active");
    }
  });

  changeLanguage.addEventListener("click", (event) => {
    const parentEl = changeLanguage.parentElement;

    parentEl.classList.toggle("--active");
  });
};
