import React, { useEffect } from 'react';

function DOMManipulationComponent() {
    useEffect(() => {
      // Manipulate the DOM here.
      const element = document.getElementById('myElement');
      element.style.color = 'red';
  
      // Cleanup: reset the DOM changes when the component unmounts.
      return () => {
        element.style.color = ''; // Reset color when component unmounts.
      };
    }, []); // Empty dependency array means this effect runs once after the initial render.
  
    return <div id="myElement">Hello, World!</div>;
  }

export default DOMManipulationComponent