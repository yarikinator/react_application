import React from 'react';
import './ButtonForm.css';
const ButtonForm = ({children, ...props}) => {
  return (
    <button {...props} className='btnForm'>
      {children}
    </button>
  )
}

export default ButtonForm