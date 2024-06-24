import React, { useContext } from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import DataContext from "../context/dataContext";
import { getDistinctValues,getCumulativeTypePrice } from '../utils/utils';
function ChartComponent() {
  const {expenseData} = useContext(DataContext);
    const chartData = [
        { label: 'Red', value: 12, color: 'rgba(255, 99, 132, 1)', borderColor: 'rgba(255, 255, 255, 1)' },
        { label: 'Blue', value: 19, color: 'rgba(54, 162, 235, 1)', borderColor: 'rgba(255, 255, 255, 1)' },
        { label: 'Yellow', value: 3, color: 'rgba(255, 206, 86, 1)', borderColor: 'rgba(255, 255, 255, 1)'},
        { label: 'Green', value: 5, color: 'rgba(75, 192, 192, 1)', borderColor: 'rgba(255, 255, 255, 1)' },
        { label: 'Purple', value: 2, color: 'rgba(153, 102, 255, 1)', borderColor: 'rgba(255, 255, 255, 1)'},
        { label: 'Orange', value: 3, color: 'rgba(255, 159, 64, 1)', borderColor: 'rgba(255, 255, 255, 1)' },
        
      ];

      const colors = [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(135, 206, 235, 1)', // Sky Blue
        'rgba(250, 128, 114, 1)', // Salmon
        'rgba(34, 139, 34, 1)',   // Forest Green
        'rgba(65, 105, 225, 1)',  // Royal Blue
        'rgba(218, 165, 32, 1)',  // Goldenrod
        'rgba(218, 112, 214, 1)', // Orchid
        'rgba(255, 127, 80, 1)',  // Coral
        'rgba(147, 112, 219, 1)', // Medium Purple
        'rgba(255, 140, 0, 1)',   // Dark Orange
        'rgba(255, 20, 147, 1)',  // Deep Pink
        'rgba(64, 224, 208, 1)',  // Turquoise
        'rgba(199, 21, 133, 1)'   // Medium Violet Red
      ];
      const labels = getDistinctValues(expenseData,'type');
      console.log(labels);
      //const labels = expenseData.map(data => data.type);
     // const values = expenseData.map(data => data.price);
       const values = getCumulativeTypePrice(labels,expenseData);
      const backgroundColors = chartData.map(data => data.color);
      const borderColors = chartData.map(data => data.borderColor);
    
      const data = {
        labels: labels,
        datasets: [
          {
            label: 'Total Expense',
            data: values,
            backgroundColor: colors,
            borderColor: borderColors,
            borderWidth: 1,
          },
        ],
      };
    
      return (
        <div className='d-flex justify-content-center'>
        <div style={{height:450,width:400, } } >
          <h2>Expense Analysis</h2>
          <Pie data={data} />
        </div>
        </div>
      );
    };

export default ChartComponent;
