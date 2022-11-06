// template_9lz1vob
// service_mtr7m0i
// -MX6IdXQEpHO0KndY

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");

  emailjs
    .sendForm(
      "service_mtr7m0i",
      "template_9lz1vob",
      event.target,
      "-MX6IdXQEpHO0KndY"
    )
    .then(() => {
      // throw new Error("error")
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temorarily unavavialble. Please contact me directly on calvincurrie01@gmail.com"
      );
    });

  loading.classList += " modal__overlay--visible";

  setTimeout(() => {
    console.log("it worked 2");
  }, 1000);
}


