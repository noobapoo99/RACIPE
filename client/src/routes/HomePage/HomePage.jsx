import React, { useState } from "react";
import "./homePage.css";

function HomePage() {
  const [activeForm, setActiveForm] = useState("rate-reaction");

  const handleToggleForm = (form) => {
    setActiveForm(form);
  };

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
                placeholder="Process temperature (K)"
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
