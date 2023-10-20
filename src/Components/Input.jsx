import React from 'react'

function Input({handleChange, value, title, color, name}) {
  return(
    <label htmlFor="" className="sidebar-label-container">
      <input 
        type='radio' 
        name={name} 
        onChange={handleChange} 
        value={value}
      />
      <span style={{backgroundColor: color}} className='checkmark'></span>{title}
    </label>
  );
}

export default Input