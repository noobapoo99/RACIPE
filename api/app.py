from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestRegressor
import joblib

# Load the trained model
model = joblib.load("random_forest_model.pkl")

app = Flask(__name__)
CORS(app)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    try:
        # Extract input features
        molar_mass = float(data['molar_mass'])
        number_of_atoms = float(data['number_of_atoms'])
        temperature = float(data['temperature'])
        concentration = float(data['concentration'])
        
        # Prepare input for the model
        input_features = np.array([[molar_mass, number_of_atoms, temperature, concentration]])
        
        # Predict heat capacity
        prediction = model.predict(input_features)[0]
        
        return jsonify({"heat_capacity": prediction})
    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)
