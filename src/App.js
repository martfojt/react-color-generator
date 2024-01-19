import './style.css';
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

  // Rendering the main app component
  return (
    <div className="container">
      <GenerateColor key={`color-${key}`} />
      <div className="buttonStyle">
        <button onClick={generateNewColor}>Generate</button>
      </div>
    </div>
  );
}
