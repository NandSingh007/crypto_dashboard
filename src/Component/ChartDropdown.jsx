// Import necessary dependencies from React
import React from 'react';
import { useState, useCallback } from 'react';
import { Dropdown } from 'react-bootstrap';

// Define the ChartDropdown component
function ChartDropdown({ onChildDataOfChart }) {

  // Initialize the state variable 'chartType' with default value 'line'
  const [chartType, setChartType] = useState('line');

  // Define an array of available chart types
  const ArrayChart = ["vertical", "line", "horizontal"];

  // Define the click event handler for dropdown items
  const handleClick = useCallback((item) => {
    // Update the chart type state with the selected item
    setChartType(item);
    // Call the callback function provided by the parent component with the selected item
    onChildDataOfChart(item);
  }, [onChildDataOfChart]);

  // Define the styles for the dropdown button
  const buttonStyles = {
    backgroundColor: '#1c7471', // Replace with your desired color
    border: '1px solid #eaeaea4b',
    padding: "8px 12px",
    color: 'white' //
  };

  // Render the ChartDropdown component
  return (
    <Dropdown>
      {/* Render the dropdown button */}
      <Dropdown.Toggle style={buttonStyles} id="dropdown-basic">
        {chartType}
      </Dropdown.Toggle>
      {/* Render the dropdown menu */}
      <Dropdown.Menu>
        {
          // Map through the array of chart types and render each item as a dropdown item
          ArrayChart.map((item, i) => (
            <Dropdown.Item key={i} onClick={() => handleClick(item)}>{item}</Dropdown.Item>
          ))
        }
      </Dropdown.Menu>
    </Dropdown>
  );
}

// Export the ChartDropdown component as the default export
export default ChartDropdown;





