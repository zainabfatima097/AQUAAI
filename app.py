from flask import Flask, request, jsonify
from flask_cors import CORS
import torch
from PIL import Image
from torchvision import transforms

app = Flask(__name__)
CORS(app)  # Allow frontend to talk to backend

# Load your trained model (modify path if needed)
model = torch.load("", map_location=torch.device('cpu'))
model.eval()

# Image transformation
transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor()
])

@app.route('/predict', methods=['POST'])
def predict():
    if 'image' not in request.files:
        return jsonify({"error": "No image uploaded"}), 400

    image = request.files['image']
    img = Image.open(image).convert('RGB')
    img = transform(img).unsqueeze(0)

    with torch.no_grad():
        output = model(img)
        prediction = "Plastic Detected" if torch.argmax(output) == 1 else "No Plastic Detected"

    return jsonify({"prediction": prediction})

if __name__ == '__main__':
    app.run(debug=True)
