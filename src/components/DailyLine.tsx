import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);


export const options = {
  
    type: "spine",

    scales: {
      x: {
        grid: {
          drawBorder: false,
          color: "#EEEEEE",
          display:false,
        },
        ticks: {
            display: false,
          },

        gridLines: {
          display: false,
        },

      },
      y: {
          
        ticks: {
            display: false,
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
  
  

export default function App() {


    const [canv,setCanv]:any = useState(document.getElementById('canvas'))
    const [gra,setGra]:any = useState(null)
    const [data,setData]:any = useState({
        labels,
        datasets: [
    
          {
            lineTension: 0.5,
            data:[33, 53, 85, 41, 44, 65,12,20],
            backgroundColor:"#FFFFFFa1",
            borderColor: "#FFFFFF",
            fill:"start",
            pointRadius:0,
            padding:0,
            
          },
        ],
      })



    useEffect(()=>{
        var canvas:any = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        var gradient = ctx.createLinearGradient(0, 0, 0, 1100);
        gradient.addColorStop(0.18, 'rgba(255,255,255,0)');   
        gradient.addColorStop(0, 'rgba(255,255,255,.5)');
        setData(  {...data, datasets: [
    
            {
              lineTension: 0.5,
              data:[33, 53, 85, 41, 44, 65,12,20],
              backgroundColor:gradient,
              borderColor: "#FFFFFF",
              fill:"start",
              
            },
          ]})
    },[canv])


    

  return (
      <Line id="canvas" options={options} data={data} height={180} width={315} />
    
  );
}
