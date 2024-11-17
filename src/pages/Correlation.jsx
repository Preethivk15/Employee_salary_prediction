import { useState, useEffect } from "react";

const Correlation = () => {
  const [plotType, setPlotType] = useState("scatter");
  const [columns, setColumns] = useState([]);
  const [selectedColumn1, setSelectedColumn1] = useState("");
  const [selectedColumn2, setSelectedColumn2] = useState("");
  const [plotUrl, setPlotUrl] = useState("");

  useEffect(() => {
    fetch("https://employee-salary-prediction-backend.onrender.com/api/get-columns")
      .then((response) => response.json())
      .then((data) => {
        setColumns(data.columns);
      })
      .catch((error) => console.error("Error fetching columns:", error));
  }, []);

  const handleGeneratePlot = () => {
    const requestData = {
      plotType,
      column1: selectedColumn1,
      column2: selectedColumn2,
    };

    fetch("https://employee-salary-prediction-backend.onrender.com/api/generate-plot", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        setPlotUrl(url);
      })
      .catch((error) => {
        console.error("Error generating plot:", error);
      });
  };

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-r from-pink-100 via-blue-100 to-purple-200 p-6 rounded-lg max-w-7xl mx-auto shadow-lg">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-extrabold text-[#FFC07C] font-mono">
          Correlation Plot Generator 📊🔍
        </h1>
      </div>

      {/* Plot Type & Column Selection */}
      <div className="relative max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 sm:p-8">
        <h2 className="text-xl font-bold text-[#FFC07C] mb-4 font-mono text-center">
          Select Plot Type & Columns
        </h2>

        <div className="flex flex-col sm:flex-row justify-between mb-6">
          <div className="mb-4 sm:mb-0">
            <label htmlFor="plotType" className="text-[#FFC07C] font-mono mb-2 block">
              Select Plot Type:
            </label>
            <select
              id="plotType"
              className="border p-2 text-[#0e0904] font-mono rounded"
              value={plotType}
              onChange={(e) => setPlotType(e.target.value)}
            >
              <option value="scatter">Scatter Plot</option>
              <option value="box">Box Plot</option>
              <option value="heatmap">Heatmap</option>
              <option value="line">Line Plot</option>
              <option value="histogram">Histogram</option>
            </select>
          </div>

          <div className="mb-4 sm:mb-0">
            <label htmlFor="column1" className="text-[#FFC07C] font-mono mb-2 block">
              Select Column 1:
            </label>
            <select
              id="column1"
              className="border p-2 text-[#0e0904] font-mono rounded"
              value={selectedColumn1}
              onChange={(e) => setSelectedColumn1(e.target.value)}
            >
              {columns.map((col) => (
                <option key={col} value={col}>
                  {col}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4 sm:mb-0">
            <label htmlFor="column2" className="text-[#FFC07C] font-mono mb-2 block">
              Select Column 2:
            </label>
            <select
              id="column2"
              className="border p-2 text-[#0e0904] font-mono rounded"
              value={selectedColumn2}
              onChange={(e) => setSelectedColumn2(e.target.value)}
            >
              {columns.map((col) => (
                <option key={col} value={col}>
                  {col}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          className="bg-[#FFC07C] text-[#0e0904] p-2 rounded font-mono"
          onClick={handleGeneratePlot}
        >
          Generate Plot
        </button>

        {plotUrl && (
          <div className="mt-6">
            <h3 className="text-[#FFC07C] font-mono text-xl mb-4">Generated Plot:</h3>
            <img src={plotUrl} alt="Generated Plot" className="max-w-full h-auto" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Correlation;
