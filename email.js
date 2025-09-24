emailjs.init(); // Replace with actual public key

console.log(document.querySelector("#message_form"));

document
  .querySelector("#message_form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_9spj88a", "template_g6jdb43", this).then(
      () => {
        alert("Message sent successfully!");
        this.reset();
      },
      (error) => {
        console.error("Failed to send message:", error);
        alert("Something went wrong. Try again.");
      }
    );
  });
