import { useState, useEffect } from "react";
import axios from "axios"; // Ensure axios is installed

import "./homePage.css";

function HomePage() {
  const [activeForm, setActiveForm] = useState("rate-reaction");
  const [formData, setFormData] = useState({
    temperature: "",
    concentration: "",
    molarMass: "",
    numberOfMolecules: "",
  });
  const [prediction, setPrediction] = useState(null);

  const handleToggleForm = (form) => {
    setActiveForm(form);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    // Check if all required fields are filled
    if (
      formData.temperature &&
      formData.concentration &&
      formData.molarMass &&
      formData.numberOfMolecules
    ) {
      // Make a POST request when all fields are filled
      axios
        .post("http://127.0.0.1:5000/predict", {
          temperature: formData.temperature,
          concentration: formData.concentration,
          molar_mass: formData.molarMass,
          number_of_atoms: formData.numberOfMolecules,
        })
        .then((response) => {
          setPrediction(response.data.heat_capacity); // Assuming the response contains 'heat_capacity'
        })
        .catch((error) => {
          console.error("Error fetching prediction:", error);
        });
    }
  }, [formData]);

  return (
    <div className="homePage">
      <div className="titles">
        <h1
          className={`title ${activeForm === "rate-reaction" ? "active" : ""}`}
          onClick={() => handleToggleForm("rate-reaction")}
        >
          Rate and Reaction Conditions Input
        </h1>
        <h1
          className={`title ${
            activeForm === "reactants-products" ? "active" : ""
          }`}
          onClick={() => handleToggleForm("reactants-products")}
        >
          Reactants and Products Input
        </h1>
      </div>

      <div className="form-container">
        {activeForm === "rate-reaction" && (
          <form className="input-form">
            <label className="form-label">
              Enter the Process temperature in Kelvin:
              <input
                type="number"
                name="temperature"
                value={formData.temperature}
                onChange={handleChange}
                placeholder="Process temperature (K)"
                className="form-input"
              />
            </label>
            <label className="form-label">
              Enter molar mass
              <input
                type="number"
                name="molarMass"
                value={formData.molarMass}
                onChange={handleChange}
                placeholder="Molar mass"
                className="form-input"
              />
            </label>
            <label className="form-label">
              Enter concentration
              <input
                type="number"
                name="concentration"
                value={formData.concentration}
                onChange={handleChange}
                placeholder="Concentration"
                className="form-input"
              />
            </label>
            <label className="form-label">
              Enter no of molecules
              <input
                type="number"
                name="numberOfMolecules"
                value={formData.numberOfMolecules}
                onChange={handleChange}
                placeholder="Number of molecules"
                className="form-input"
              />
            </label>
            <label className="form-label">
              Heat capacity
              <p> {prediction}</p>
              <input
                type="number"
                placeholder="heat capacity "
                className="form-input"
              />
            </label>
            <label className="form-label">
              Enter the MTT in Kelvin:
              <input
                type="number"
                placeholder="MTT (K)"
                className="form-input"
              />
            </label>
            <label className="form-label">
              Enter the degree of accumulation:
              <input
                type="number"
                placeholder="Degree of accumulation"
                className="form-input"
              />
            </label>
            <label className="form-label">
              Enter the order wrt reactant 1:
              <input
                type="number"
                placeholder="Order (Reactant 1)"
                className="form-input"
              />
            </label>
            <label className="form-label">
              Enter the order wrt reactant 2:
              <input
                type="number"
                placeholder="Order (Reactant 2)"
                className="form-input"
              />
            </label>
            <label className="form-label">
              Enter the activation energy in kJ/mol:
              <input
                type="number"
                placeholder="Activation energy (kJ/mol)"
                className="form-input"
              />
            </label>
            <label className="form-label">
              Enter the arrhenius factor in the factor of 10^9 s^-1:
              <input
                type="number"
                placeholder="Arrhenius factor"
                className="form-input"
              />
            </label>
            <label className="form-label">
              Enter temperature at which tmr = 24 hrs in Kelvin:
              <input
                type="number"
                placeholder="Temperature (K)"
                className="form-input"
              />
            </label>
            <label className="form-label">
              Enter the Thermal Inertia Factor (Phi):
              <input
                type="number"
                placeholder="Thermal Inertia Factor (Phi)"
                className="form-input"
              />
            </label>
            <button type="submit" className="form-button">
              Submit
            </button>
          </form>
        )}

        {activeForm === "reactants-products" && (
          <form className="input-form">
            <label className="form-label">
              Select Reactant 1:
              <select className="form-select">
                <option value="">Select</option>
                <option value="Reactant1">Reactant 1</option>
              </select>
            </label>
            <label className="form-label">
              Enter the stoichiometric coefficient of reactant 1:
              <input
                type="number"
                placeholder="Coefficient (Reactant 1)"
                className="form-input"
              />
            </label>
            <label className="form-label">
              Enter the concentration of reactant 1 in mol/ml:
              <input
                type="number"
                placeholder="Concentration (Reactant 1)"
                className="form-input"
              />
            </label>
            <label className="form-label">
              Select Reactant 2:
              <select className="form-select">
                <option value="">Select</option>
                <option value="Reactant2">Reactant 2</option>
              </select>
            </label>
            <label className="form-label">
              Enter the stoichiometric coefficient of reactant 2:
              <input
                type="number"
                placeholder="Coefficient (Reactant 2)"
                className="form-input"
              />
            </label>
            <label className="form-label">
              Enter the concentration of reactant 2 in mol/ml:
              <input
                type="number"
                placeholder="Concentration (Reactant 2)"
                className="form-input"
              />
            </label>
            <label className="form-label">
              Select Product 1:
              <select className="form-select">
                <option value="">Select</option>
                <option value="Product1">Product 1</option>
              </select>
            </label>
            <label className="form-label">
              Enter the stoichiometric coefficient of product 1:
              <input
                type="number"
                placeholder="Coefficient (Product 1)"
                className="form-input"
              />
            </label>
            <label className="form-label">
              Select Product 2:
              <select className="form-select">
                <option value="">Select</option>
                <option value="Product2">Product 2</option>
              </select>
            </label>
            <label className="form-label">
              Enter the stoichiometric coefficient of product 2:
              <input
                type="number"
                placeholder="Coefficient (Product 2)"
                className="form-input"
              />
            </label>
            <button type="submit" className="form-button">
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default HomePage;
