import React, { useEffect } from 'react';
import { CanvasJS, CanvasJSChart } from 'canvasjs-react-charts';

function TimeBarChart() {
  useEffect(() => {
    const timeData = [
        { label: 'accounts.google.com', y: 6.08 },
        { label: 'app.joinhandshake.com', y: 664.09 },
        { label: 'bestbuy.com', y: 17.84 },
        { label: 'canvasjs.com', y: 55454.71 },
        { label: 'chartjs.org', y: 148.69 },
        { label: 'docs.google.com', y: 29.95 },
        { label: 'extensions', y: 4.08 },
        { label: 'github.com', y: 28.11 },
        { label: 'google.com', y: 11.56 },
        { label: 'localhost', y: 3299.47 },
        { label: 'mkfbdcmogmoejoaijgmjhoiolcmemepa', y: 2236.79 },
        { label: 'mui.com', y: 485.87 },
        { label: 'newtab', y: 134.84 },
        { label: 'stackoverflow.com', y: 87.85 },
        { label: 'wssd.k12.pa.us', y: 73.53 },
        { label: 'youtube.com', y: 42.45 },
        // Add more data points...
      ];

    const options = {
      animationEnabled: true,
      theme: 'dark1',
      title: {
        text: 'Time Spent on Different Domains',
      },
      axisX: {
        title: 'Domain',
        interval: 1,
        labelAngle: -45,
      },
      axisY: {
        title: 'Time Spent (seconds)',
        // suffix: 's',
        logarithmic: true,
        includeZero: true,
        suffix: 's',
      },
      data: [
        {
          type: 'column',
          dataPoints: timeData,
        },
      ],
    };

    const chart = new CanvasJS.Chart('chartContainer', options);
    chart.render();
  }, []);

  return <div id="chartContainer" style={{ height: '400px', width: '100%' }} />;
}

export default TimeBarChart;
