import { useState } from "react";
import Popup from "./Popup";

const SalaryPrediction = () => {
  const [formData, setFormData] = useState({
    Age: "",
    Years_of_Experience: "",
    gender: "",
    education: "",
  });

  const [predictedSalary, setPredictedSalary] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const API_URL = "https://employee-salary-prediction-backend.onrender.com/predict";

  const quotes = [
    "The harder you work for something, the greater you'll feel when you achieve it.",
    "Success is not the key to happiness. Happiness is the key to success.",
    "Don't watch the clock; do what it does. Keep going.",
    "The only way to do great work is to love what you do.",
    "Your salary is your personal business. Your work is your public business.",
    "Money is a tool. Used properly it makes something beautiful; used wrong, it makes a mess!",
    "The best way to predict the future is to create it.",
    "Choose a job you love, and you will never have to work a day in your life.",
  ];

  const getRandomQuote = () => {
    return quotes[Math.floor(Math.random() * quotes.length)];
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const predictSalary = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Age: parseInt(formData.age),
          "Years of Experience": parseInt(formData.experience),
          Gender: formData.gender,
          "Education Level": formData.education,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to predict salary");
      }

      const data = await response.json();
      setPredictedSalary(data.predicted_salary);
      setIsPopupVisible(true);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    predictSalary();
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-100 via-yellow-100 to-purple-200 flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-gray-100 rounded-lg shadow-lg p-6"> {/* Form container with background and rounded corners */}
        <h1 className="text-3xl font-extrabold text-purple-700 font-mono mb-4 sm:mb-6 text-center">
          EMPLOYEE SALARY PREDICTION
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          {/* Age */}
          <div>
            <label className="block text-purple-600 text-sm font-mono sm:text-base font-extrabold mb-2" htmlFor="age">
              Age
            </label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="form-input w-full px-3 py-2 border bg-transparent text-[#0e0904] font-mono rounded-md shadow-sm focus:outline-none focus:ring-[#FFC07C] focus:border-[#FFC07C] sm:text-sm"
              required
            />
          </div>
          {/* Experience */}
          <div>
            <label className="block text-purple-600 text-sm font-mono sm:text-base font-extrabold mb-2" htmlFor="experience">
              Years of Experience
            </label>
            <input
              type="number"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="form-input w-full px-3 py-2 border bg-transparent text-[#0e0904] font-mono rounded-md shadow-sm focus:outline-none focus:ring-[#FFC07C] focus:border-[#FFC07C] sm:text-sm"
              required
            />
          </div>
          {/* Gender */}
          <div>
            <label className="block text-purple-600 text-sm font-mono sm:text-base font-extrabold mb-2" htmlFor="gender">
              Gender
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="form-select w-full px-3 py-2 border bg-transparent rounded-md font-mono shadow-sm text-[#0e0904] focus:outline-none focus:ring-[#FFC07C] focus:border-[#FFC07C] sm:text-sm"
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          {/* Education Level */}
          <div>
            <label className="block text-purple-600 text-sm font-mono sm:text-base font-extrabold mb-2" htmlFor="education">
              Education Level
            </label>
            <select
              name="education"
              value={formData.education}
              onChange={handleChange}
              className="form-select w-full px-3 py-2 border bg-transparent rounded-md font-mono shadow-sm text-[#0e0904] focus:outline-none focus:ring-[#FFC07C] focus:border-[#FFC07C] sm:text-sm"
              required
            >
              <option value="">Select Education Level</option>
              <option value="Bachelor's">Bachelors</option>
              <option value="Master's">Masters</option>
              <option value="PhD">PhD</option>
            </select>
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full px-4 py-2 text-[#0e0904] font-bold rounded-md shadow-sm ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            } bg-[#FFC07C] hover:bg-[#FFC07C] focus:outline-none font-mono focus:ring-2 focus:ring-[#FFC07C] focus:ring-opacity-50`}
          >
            {loading ? "Predicting..." : "Predict Salary"}
          </button>
        </form>

        {error && (
          <p className="text-red-500 text-center mt-4 text-sm sm:text-base">
            Error: {error}
          </p>
        )}

        <Popup isVisible={isPopupVisible} onClose={() => setIsPopupVisible(false)}>
          <p className="text-[#0e0904] text-center font-bold font-mono text-sm sm:text-base">
            <strong>Predicted Salary: </strong><bold>₹{predictedSalary?.toFixed(2)}</bold>
          </p>
          <p className="text-[#000000] text-center font-mono font-bold text-sm sm:text-base mt-2">
            {getRandomQuote()}
          </p>
        </Popup>
      </div>
    </div>
  );
};

export default SalaryPrediction;
