import React, { useEffect } from 'react';
import { CanvasJS, CanvasJSChart } from 'canvasjs-react-charts';

const BlockedSite = ({ blockedSitesData }) => {
  useEffect(() => {
    // Check if blockedSitesData is defined and an array
    if (!blockedSitesData || !Array.isArray(blockedSitesData)) {
      console.error('Blocked sites data is missing or not an array', blockedSitesData);
      return;
    }

    // Prepare data for the chart
    const dataPoints = blockedSitesData.map((site, index) => ({
      label: site,
      y: index + 1, // You can replace this with the actual value you want to display
    }));

    // Create the chart
    const chart = new CanvasJSChart('chartContainer1', {
      data: [
        {
          type: 'bar',
          dataPoints,
        },
      ],
    });

    // Render the chart
    chart.render();

    // Cleanup the chart when the component is unmounted
    return () => {
      chart.render();
    };
  }, [blockedSitesData]);

  return <div id="chartContainer1" style={{ height: '300px', width: '100%' }} />;
};

export default BlockedSite;
