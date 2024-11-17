import { useEffect, useState } from "react";

const DataOverview = () => {
  const [data, setData] = useState([]);

  // Fetch Data from Backend
  useEffect(() => {
    fetch("https://employee-salary-prediction-backend.onrender.com/data")
      .then((response) => response.json())
      .then((data) => {
        const parsedData = JSON.parse(data);
        setData(parsedData);
      });
  }, []);

  return (
    <div className="bg-gradient-to-r from-pink-100 via-blue-100 to-purple-200 p-6 rounded-lg max-w-7xl mx-auto shadow-lg">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-extrabold text-purple-700 font-mono">
          Employee Salary Prediction 📈💰
        </h1>
      </div>

      {/* Data Overview Table */}
      <div className="mb-10">
        <h2 className="text-xl font-bold text-purple-600 mb-3 font-mono text-center">
          Employee Data Overview
        </h2>
        <div
          className="overflow-y-auto rounded-lg shadow-md"
          style={{ maxHeight: "408px" }}
        >
          <table className="min-w-full bg-white text-center text-gray-800 rounded-lg">
            <thead>
              <tr>
                <th className="px-4 py-2 font-bold text-lg font-mono text-purple-500">
                  Age
                </th>
                <th className="px-4 py-2 font-bold text-lg font-mono text-purple-500">
                  Experience
                </th>
                <th className="px-4 py-2 font-bold text-lg font-mono text-purple-500">
                  Education
                </th>
                <th className="px-4 py-2 font-bold text-lg font-mono text-purple-500">
                  Gender
                </th>
                <th className="px-4 py-2 font-bold text-lg font-mono text-purple-500">
                  Salary
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, idx) => (
                <tr key={idx} className="odd:bg-purple-50 even:bg-pink-50">
                  <td className="border border-purple-200 px-4 py-2 font-mono">
                    {row.Age}
                  </td>
                  <td className="border border-purple-200 px-4 py-2 font-mono">
                    {row["Years of Experience"]}
                  </td>
                  <td className="border border-purple-200 px-4 py-2 font-mono">
                    {row["Education Level"]}
                  </td>
                  <td className="border border-purple-200 px-4 py-2 font-mono">
                    {row["Gender"]}
                  </td>
                  <td className="border border-purple-200 px-4 py-2 font-mono">
                    {row.Salary}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DataOverview;