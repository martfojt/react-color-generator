import randomColor from 'randomcolor';
import React, { useEffect, useState } from 'react';

export default function GenerateColor() {
  // State for the current color
  const [color, setColor] = useState('');

  // Effect hook to generate a new color
  useEffect(() => {
    // Generate a random color and set it to state
    const newColor = randomColor();
    setColor(newColor);
  }, []);

  // Style object for the color display block. Needs to stay here because of "backgroundColor: color," - can't figure out a way
  // to put it to style.css?
  const blockStyle = {
    backgroundColor: color,
    color: 'white',
    width: '300px',
    height: '150px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: '20px',
    border: '5px solid black',
    margin: '10px',
  };

  // Rendering the color block with the generated color
  return <div style={blockStyle}>Generated Color: {color}</div>;
}
