function detectPollution() {
  let fileInput = document.getElementById("uploadImage");
  let resultText = document.getElementById("result");

  if (fileInput.files.length === 0) {
      resultText.innerHTML = "Please upload an image.";
  } else {
      resultText.innerHTML = "Analyzing... (Fake AI detection logic here)";
      setTimeout(() => {
          resultText.innerHTML = "Pollution detected in the uploaded image!";
      }, 2000);
  }
}
