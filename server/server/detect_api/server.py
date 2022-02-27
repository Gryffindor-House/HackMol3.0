from absl import app, logging
import cv2
import numpy as np
from flask import Flask, request, Response, jsonify, send_from_directory, abort

# Initialize Flask application
app = Flask(__name__)

# API that returns JSON with classes found in images
@app.route('/detect', methods=['POST'])
def get_detections():
    if(request.method == 'POST'):
        return jsonify({"response":"Damage"}), 200

if __name__ == '__main__':
    app.run(debug=True)