from flask import Flask, request, jsonify
import torch  # For PyTorch models (Change if using TensorFlow/Keras)
import numpy as np
import os

app = Flask(__name__)

# Load the AI model
MODEL_PATH = os.path.join("Ai_integration", "model.pth")  # Change extension if needed
model = torch.load(MODEL_PATH, map_location=torch.device('cpu'))  # Load on CPU
model.eval()  # Set model to evaluation mode

@app.route("/")
def home():
    return "AI Ocean Cleanup Model API is Running! 🚀"

@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.json
        input_data = np.array(data["features"]).reshape(1, -1)  # Adjust shape as needed

        # Convert to tensor (for PyTorch models)
        input_tensor = torch.tensor(input_data, dtype=torch.float32)
        
        # Make prediction
        with torch.no_grad():
            prediction = model(input_tensor).tolist()

        return jsonify({"prediction": prediction})

    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == "__main__":
    app.run(debug=True)
