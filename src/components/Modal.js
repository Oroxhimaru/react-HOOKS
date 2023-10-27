import React, { useState } from 'react';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);  
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
   <div>
    <p>Toggling UI Elements: You can use useState to manage boolean values to control the visibility or behavior of UI elements.</p>
      <button onClick={toggleModal}>Toggle Modal</button>
      {isOpen && <div><br />Modal Content</div>}
    </div>
  );
}

export default Modal