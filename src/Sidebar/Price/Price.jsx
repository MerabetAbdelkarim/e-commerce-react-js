import React from 'react'
import './Price.css';
import Input from '../../Components/Input';

function Price({handleChange}) {
  return (
    <div className='ml'>
        <h2 className="sidebar-title price-title">Price</h2>
        <div>
        <lable className="sidebar-label-container">
          <input 
            type="radio" 
            onChange={handleChange}
            value=""
            name='test2'
          />
          <span className="checkmark"></span>All
        </lable>
        
          <Input 
              type="radio"
              handleChange={handleChange}
              value={50}
              title="$0 - $50"
              name="test2"
            />
            <Input 
              type="radio"
              handleChange={handleChange}
              value={100}
              title="$50 - $100"
              name="test2"
            />
            <Input 
              type="radio"
              handleChange={handleChange}
              value={150}
              title="$100 - $150"
              name="test2"
            />
            <Input 
              type="radio"
              handleChange={handleChange}
              value={200}
              title="Over $150"
              name="test2"
            />
        </div>
    </div>
  )
}

export default Price