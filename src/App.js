import React from 'react';
import GenerateColor from './components';

export default function App() {
  // State for tracking the key used to re-render the GenerateColor component
  const [key, setKey] = React.useState(0);

  // Function to generate a new color
  const generateNewColor = () => {
    // Update the key to a new value to force re-render of GenerateColor
    setKey((prevKey) => prevKey + 1);
  };
  // Style object for the button container
  const buttonStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
    marginLeft: '15px',
    width: '300px',
  };
  // Style object for the main container
  const container = {
    width: '300px',
  };

  // Rendering the main app component
  return (
    <div style={container}>
      <GenerateColor key={`color-${key}`} />
      <div style={buttonStyle}>
        <button onClick={generateNewColor}>Generate</button>
      </div>
    </div>
  );
}
