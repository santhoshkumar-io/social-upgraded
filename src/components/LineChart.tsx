import React from "react";
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
import { Line } from "react-chartjs-2";

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
  
    type: "spine",

    scales: {
      x: {
        ticks:{
          color: "#B9B9B9",
          textAlign:"left",
        },
        grid: {
          drawBorder: false,
          color: "#EEEEEE",
        },

        gridLines: {
          display: false,
        },
      },
      y: {
        ticks:{
          count:4,
          color: "#B9B9B9",
        },

        grid: {
          drawBorder: false,
          display: false,
        },
        beginAtZero: true,
        gridLines: {
          display: false,
        },
      },
    },
  
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },

    },
  };
  
  const labels = [
    "Nov",
    "Dec",
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "June",
  ];
  
  export const data = {
    labels,
    datasets: [
      {
        lineTension: 0.5,
        label: "",
        data: 
            [33, 25, 35, 51, 54, 76,34,12],
        borderColor: "#4BDE97",
      },
      {
        lineTension: 0.5,
        data:[33, 53, 85, 41, 44, 65,12,20],
  
        borderColor: "#5F2EEA",
      },
    ],
  };
  

export default function App() {
  return (
      <Line  options={options} data={data} height={180} width={650}/>
    
  );
}
