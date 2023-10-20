import React from 'react'
import './Colors.css';
import Input from '../../Components/Input';

function Colors({handleChange}) {
  return (
    <div className='ml'>
        <h2 className="sidebar-title color-title">Color</h2>
        <div>
          <lable className="sidebar-label-container">
            <input 
              type="radio" 
              onChange={handleChange}
              value=""
              name='test1'
            />
            <span className="checkmark all"></span>All
          </lable>
          <Input
          handleChange={handleChange}
          value="black"
          title="Black"
          name="test1"
          color="black"
        />

        <Input
          handleChange={handleChange}
          value="blue"
          title="Blue"
          name="test1"
          color="blue"
        />

        <Input
          handleChange={handleChange}
          value="red"
          title="Red"
          name="test1"
          color="red"
        />

        <Input
          handleChange={handleChange}
          value="green"
          title="Green"
          name="test1"
          color="green"
        />
          <label className='sidebar-label-container'>
            <input
              type='radio'
              onChange={handleChange}
              value="white"
              title="white"
              name="test1"
              color="white" 
            />
            <span className='checkmark' style={{backgroundColor: "white", border: "2px solid #000"}}></span>White
          </label>
          
        </div>
    </div>
  )
}

export default Colors