import React, { useEffect } from 'react';
import { CanvasJS, CanvasJSChart } from 'canvasjs-react-charts';

const CategoryPieChart = ({ categoryData }) => {
  useEffect(() => {
    // Your code here
  }, [categoryData]);

  const options = {
    // Your chart options
    data: [{
      type: 'pie',
      showInLegend: true,
      legendText: '{label}',
      dataPoints: [
        { label: 'Other', y: 62567.51 },
        { label: 'Technology', y: 115.96 },
        { label: 'Entertainment', y: 42.45 },
        // Add more data points as needed
      ],
    }],
  };

  return (
    <div>
      <CanvasJSChart options={options} />
    </div>
  );
};

export default CategoryPieChart;
