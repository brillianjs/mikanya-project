// Import necessary dependencies
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register required chart elements and scales
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Define days of the week
const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

// Simulated internet usage data for two datasets (replace with your actual data)
const internetData = {
  labels: daysOfWeek,
  datasets: [
    {
      label: "Data Usage",
      data: [300, 400, 200, 600, 800, 350, 500], // Replace with actual mobile data usage
      borderColor: "purple",
      backgroundColor: "purple",
    },
  ],
};

// Chart options
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Weekly Internet Usage Statistics",
    },
  },
};

// Export the component
export function ChartDataUsage() {
  return <Line options={options} data={internetData} />;
}
