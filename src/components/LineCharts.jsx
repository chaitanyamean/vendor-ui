import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { tokens } from "../theme";
import { useTheme } from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Vendor Incident Charts',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Siteminder',
      data: [100, 150, 222, 32, 3, 12, 3],
      borderColor: 'rgb(76, 206, 172)',
      backgroundColor: 'rgba(76, 206, 172, 0.5)',
    },
    {
      label: 'Zendesk',
      data: [200, 350, 22, 132, 32, 112, 321],
      borderColor: 'rgb(104, 112, 250)',
      backgroundColor: 'rgba(104, 112, 250, 0.5)',
    },
  ],
};

export function LineChart() {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return <Line options={options} data={data} />;
}
