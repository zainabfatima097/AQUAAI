function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.style.display = 'none');

    // Show the clicked section
    const sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) {
        sectionToShow.style.display = 'block';
    }
}
document.getElementById('signup-form').addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent form submission from reloading the page

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const messageElement = document.getElementById('signup-message');

    try {
        // Make a POST request to your backend API
        const response = await fetch('http://localhost:5000/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                password
            })
        });

        const data = await response.json();

        if (response.ok) {
            // Successfully signed up
            messageElement.textContent = data.message;
            messageElement.style.color = 'green';
        } else {
            // Show error message if user already exists or any other error
            messageElement.textContent = data.message;
            messageElement.style.color = 'red';
        }
    } catch (error) {
        messageElement.textContent = 'Error: Unable to sign up at the moment. Please try again later.';
        messageElement.style.color = 'red';
    }
});

async function uploadImage(event) {
    event.preventDefault(); // Prevent page refresh

    let formData = new FormData();
    let imageInput = document.getElementById("imageInput");

    if (imageInput.files.length === 0) {
        alert("Please select an image.");
        return;
    }

    formData.append("image", imageInput.files[0]);

    try {
        let response = await fetch("http://127.0.0.1:5000/predict", {  // Change to ngrok URL when deploying
            method: "POST",
            body: formData
        });

        let result = await response.json();
        document.getElementById("predictionResult").innerText = "Prediction: " + result.prediction;
    } catch (error) {
        console.error("Error:", error);
        alert("Failed to get prediction.");
    }
}

