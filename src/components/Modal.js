import React, { useState } from 'react';

function Modal({ reset }) {
  const [isActive, setActive] = useState(true);

  const handleClick = () => setActive(false);

  return (
    <div className='alert' style={{ display: isActive ? 'block' : 'none' }}>
      <span className='closebtn' onClick={() => {handleClick(); reset()}}>
        &times;
      </span>
      You've won!
    </div>
  );
}

export default Modal;
