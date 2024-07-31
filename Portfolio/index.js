(function () {
  emailjs.init("EhFVTitmCvc1-k2gi");
})();

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const serviceID = "service_iwrqg1i";
  const templateID = "template_2cwju7l";

  emailjs.sendForm(serviceID, templateID, this).then(
    (response) => {
      console.log("SUCCESS!", response.status, response.text);
    },
    (error) => {
      console.log("FAILED...", error);
    }
  );
});
