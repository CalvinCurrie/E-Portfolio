let isModalOpen = false;
function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  document.body.classList += " modal--open";
}

let darkTheme = false;
function toggleTheme() {
  if (darkTheme) {
    darkTheme = false;
    console.log("helloworld")
    return document.body.classList.remove("darkTheme");
  }
  darkTheme = true;
  document.body.classList += "darkTheme";
}