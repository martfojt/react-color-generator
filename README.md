# RANDOM COLOR GENERATOR IN REACT

## Overview

This project is a React application that generates randomly colored block, along with a hexadecimal value in the middle of the block.

## Usage

Simply click on "Generate" button.

 // Rendering the main app component
  return (
    <div className="buttonStyle">
      <GenerateColor key={`color-${key}`} />
      <div className="buttonStyle">
        <button onClick={generateNewColor}>Generate</button>
      </div>
    </div>
  );
}
