document.getElementById("volunteerForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("formMessage");

  if (name.trim() === "" || email.trim() === "") {
      message.innerHTML = "Please fill out all fields.";
      return;
  }

  message.innerHTML = `Thank you, ${name}! You've signed up as a volunteer.`;
});
