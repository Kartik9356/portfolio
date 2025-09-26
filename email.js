console.log(document.querySelector("#message_form"));
emailjs.init("xwORVbImdLsyDbBO9");

document
  .querySelector("#message_form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const button = document.querySelector(".form button");
    button.classList.add("loading");

    emailjs.sendForm("service_9spj88a", "template_g6jdb43", this).then(
      () => {
        alert("Message sent successfully!");
        this.reset();
        button.classList.remove("loading");
      },
      (error) => {
        console.error("Failed to send message:", error);
        alert("Something went wrong. Try again.");
        button.classList.remove("loading");
      }
    );
  });
