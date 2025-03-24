from flask import Flask, request, jsonify

app = Flask(__name__)

# Home Route
@app.route('/api/detect_waste', methods=['POST'])
def detect_waste():
    # your code to handle waste detection here
    return jsonify({"message": "Plastic detected!"})


if __name__ == '__main__':
    app.run(debug=True)
