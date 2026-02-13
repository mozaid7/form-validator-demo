import React, { useState } from "react";
import { FormValidator, CheckboxGroup } from "form-validator-widget";
import "./App.css";

function App() {
  const [submittedData, setSubmittedData] =
    useState<Record<string, any> | null>(null);

  const validationRules = {
    username: {
      required: true,
      minLength: 3,
      maxLength: 20,
      pattern: /^[a-zA-Z0-9_]+$/,
      messages: {
        required: "Username is required",
        minLength: "Username must be at least 3 characters",
        maxLength: "Username must be less than 20 characters",
        pattern: "Only letters, numbers, and underscores allowed",
      },
    },
    email: {
      required: true,
      email: true,
      messages: {
        required: "Email is required",
        email: "Please enter a valid email address",
      },
    },
    password: {
      required: true,
      minLength: 8,
      maxLength: 30,
      complexity: true,
      messages: {
        required: "Password is required",
        minLength: "Password must be at least 8 characters",
        maxLength: "Password must be less than 30 characters",
        complexity:
          "Password must contain uppercase, lowercase, number, and special character",
      },
    },
    age: {
      required: true,
      number: true,
      min: 18,
      max: 100,
      messages: {
        required: "Age is required",
        number: "Please enter a valid number",
        min: "You must be at least 18 years old",
        max: "Age cannot exceed 100",
      },
    },
    website: {
      required: false,
      url: true,
      messages: {
        url: "Please enter a valid URL (include https://)",
      },
    },
    phone: {
      required: true,
      tel: true,
      messages: {
        required: "Phone number is required",
        tel: "Please enter a valid phone number",
      },
    },
    birthDate: {
      required: true,
      date: true,
      minDate: "1900-01-01",
      maxDate: new Date().toISOString().split("T")[0],
      messages: {
        required: "Birth date is required",
        date: "Please enter a valid date",
        minDate: "Date cannot be before 1900",
        maxDate: "Date cannot be in the future",
      },
    },
    country: {
      required: true,
      select: true,
      messages: {
        required: "Please select a country",
      },
    },
    gender: {
      required: true,
      radioGroup: true,
      messages: {
        required: "Please select your gender",
      },
    },
    interests: {
      required: true,
      checkboxGroup: true,
      minSelected: 2,
      maxSelected: 4,
      messages: {
        required: "Please select at least one interest",
        minSelected: "Please select at least 2 interests",
        maxSelected: "Please select no more than 4 interests",
      },
    },
    terms: {
      required: true,
      messages: {
        required: "You must accept the terms and conditions",
      },
    },
  };

  const handleSubmit = (data: Record<string, any>) => {
    console.log("Form submitted:", data);
    setSubmittedData(data);
  };

  const interestOptions = [
    { value: "coding", label: "💻 Coding" },
    { value: "music", label: "🎵 Music" },
    { value: "sports", label: "⚽ Sports" },
    { value: "reading", label: "📚 Reading" },
    { value: "gaming", label: "🎮 Gaming" },
    { value: "travel", label: "✈️ Travel" },
  ];

  return (
    <div className="app">
      <header className="app-header">
        <h1>📋 Form Validator Widget</h1>
        <p className="subtitle">
          Complete demo with{" "}
          <span className="highlight">
            form-validator-widget@2.1.1
          </span>
        </p>
      </header>

      <div className="demo-container">
        <div className="form-section">
          <h2>🔧 Demo Form</h2>

          <FormValidator
            validationRules={validationRules}
            onSubmit={handleSubmit}
            theme="light"
            enableDebounce
            debounceDelay={500}
          >
            <div className="form-group">
              <label>Username *</label>
              <input name="username" type="text" />
            </div>

            <div className="form-group">
              <label>Email *</label>
              <input name="email" type="email" />
            </div>

            <div className="form-group">
              <label>Password *</label>
              <input name="password" type="password" />
            </div>

            <div className="form-group">
              <label>Age *</label>
              <input name="age" type="number" />
            </div>

            <div className="form-group">
              <label>Website (Optional)</label>
              <input name="website" type="url" />
            </div>

            <div className="form-group">
              <label>Phone *</label>
              <input name="phone" type="tel" />
            </div>

            <div className="form-group">
              <label>Birth Date *</label>
              <input name="birthDate" type="date" />
            </div>

            <div className="form-group">
              <label>Country *</label>
              <select name="country">
                <option value="">Select country</option>
                <option value="us">🇺🇸 United States</option>
                <option value="ca">🇨🇦 Canada</option>
                <option value="uk">🇬🇧 United Kingdom</option>
                <option value="au">🇦🇺 Australia</option>
                <option value="in">🇮🇳 India</option>
              </select>
            </div>

            <div className="form-group">
              <label>Gender *</label>
              <div className="radio-group">
                <label>
                  <input type="radio" name="gender" value="male" /> Male
                </label>
                <label>
                  <input type="radio" name="gender" value="female" /> Female
                </label>
                <label>
                  <input type="radio" name="gender" value="other" /> Other
                </label>
              </div>
            </div>

            <div className="form-group">
              <label>Interests *</label>
              <CheckboxGroup
                name="interests"
                options={interestOptions}
              />
            </div>

            <div className="form-group checkbox-single">
              <label>
                <input type="checkbox" name="terms" />
                Accept terms *
              </label>
            </div>

            <button type="submit" className="submit-btn">
              Submit Form
            </button>
          </FormValidator>

          {submittedData && (
            <div className="results-section">
              <h2>✅ Form Submitted</h2>
              <pre>{JSON.stringify(submittedData, null, 2)}</pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
