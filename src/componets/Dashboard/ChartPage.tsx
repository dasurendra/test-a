import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js";
import { Boxes } from "../Layout/Boxes";
import { Typography } from "@mui/material";

// Register Chart.js components needed for the pie chart
ChartJS.register(ArcElement, Tooltip, Legend);

export const ChartPage = () => {
  const pieChartData = {
    labels: ["AWS", "Azure", "Google Cloud", "Other"],
    datasets: [
      {
        data: [40, 30, 20, 10],
        backgroundColor: [
          "#FF6384", // Pink
          "#36A2EB", // Blue
          "#FFCE56", // Yellow
          "#4BC0C0", // Turquoise
        ],
        borderColor: "#fff", // Optional: set border color
        borderWidth: 1, // Optional: set border width
      },
    ],
  };

  return (
    <Boxes>
      {/* Heading for Cost and Usage */}
      <div style={{ marginBottom: "16px" }}>
        <Typography variant="h5" gutterBottom>
          Cost Distribution
        </Typography>
      </div>

      {/* Chart Container */}
      <div
        style={{
          width: "100%",
          height: "100%", // Dynamically fit the container
          maxHeight: "400px", // Optional: Set max height for aesthetics
          overflow: "hidden", // Prevent overflow
        }}
      >
        <Pie
          data={pieChartData}
          options={{
            responsive: true,
            maintainAspectRatio: false, // Allow dynamic resizing
            plugins: {
              legend: {
                position: "top",
                labels: {
                  boxWidth: 20, // Optional: Set the width of legend boxes
                },
              },
              tooltip: {
                callbacks: {
                  label: (context) => {
                    return `${context.label}: ${context.raw}%`;
                  },
                },
              },
            },
          }}
        />
      </div>
    </Boxes>
  );
};
