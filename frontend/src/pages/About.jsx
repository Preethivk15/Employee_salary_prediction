const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-100 via-blue-100 to-purple-200 p-6 rounded-lg max-w-7xl mx-auto shadow-lg">
      <div className="relative max-w-4xl mx-auto text-[#0e0904] rounded-lg shadow-lg p-6 sm:p-8"> {/* Update text color */}
        <h1 className="text-[#FFC07C] text-2xl sm:text-3xl font-mono font-extrabold text-center mb-6">
          About the Project
        </h1>

        <p className="text-[#0e0904] text-center text-lg sm:text-xl mb-6 font-mono"> {/* Update text color */}
          This project is an Employee Salary Prediction application built with a
          Flask backend and a React frontend. It utilizes a machine learning
          model to predict employee salaries based on factors like age, years of
          experience, gender, and education level. Below is an overview of the
          model development process, the tools used in this project, and the
          required Python packages for the Flask backend.
        </p>

        <section className="mb-6">
          <h2 className="text-[#FFC07C] text-xl sm:text-2xl font-mono font-semibold mb-4">
            Model Development Process
          </h2>
          <p className="text-[#0e0904] text-lg sm:text-xl mb-4 font-mono"> {/* Update text color */}
            The machine learning model was developed using the following steps:
          </p>
          <ul className="list-disc pl-6 text-[#0e0904] text-lg sm:text-xl mb-4 font-mono"> {/* Update text color */}
            <li>
              Data Collection: We gathered data on employee characteristics
              including age, years of experience, gender, and education level.
            </li>
            <li>
              Data Preprocessing: Cleaned the dataset by handling missing
              values, encoding categorical variables, and scaling numerical
              features.
            </li>
            <li>
              Model Selection: Chose the Random Forest regressor due to its
              ability to handle both linear and non-linear relationships, and
              its robustness against overfitting, especially in cases with a
              moderate number of features like this dataset.
            </li>
            <li>
              Model Training: Split the data into training and testing sets,
              trained the model on the training set, and evaluated it on the
              testing set.
            </li>
            <li>
              Hyperparameter Tuning: Tuned the model using cross-validation and
              grid search to optimize the performance.
            </li>
            <li>
              Model Deployment: The model was saved as a pickle file and
              deployed in the Flask backend for prediction.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-[#FFC07C] text-xl sm:text-2xl font-mono font-semibold mb-4">
            Tools Used in the Project
          </h2>
          <ul className="list-disc pl-6 text-[#0e0904] text-lg sm:text-xl mb-4 font-mono"> {/* Update text color */}
            <li>
              <strong>Frontend:</strong> React (v18), Tailwind CSS, React Router
              for dynamic page routing
            </li>
            <li>
              <strong>Backend:</strong> Flask, scikit-learn
            </li>
            <li>
              <strong>Deployment:</strong> Render (for hosting the Flask API)
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-[#FFC07C] text-xl sm:text-2xl font-mono font-semibold mb-4">
            Python Backend Dependencies (requirements.txt)
          </h2>
          <pre className="bg-white text-black p-4 rounded-md font-mono text-sm">
            <code>
              Flask==3.0.3
              <br />
              scikit-learn==1.5.2
              <br />
              joblib==1.4.2
              <br />
              numpy==1.25.0
              <br />
              matplotlib==3.9.2
              <br />
              Flask-Cors==4.0.1
              <br />
            </code>
          </pre>
        </section>
      </div>
    </div>
  );
};

export default About;
