import React, { useState } from 'react';

import './style.css';

function SearchModal() {
  const [value, setValue] = useState();
  const handleChange = (e) => {
    console.log(e);

    setValue(e.target.value);
  }

  return (
    <div className='searchContainer'>
      <div className='item-container'>
        <input
          value={value}
          onChange={handleChange}
          className={'input'}
          placeholder='Search to route'

        />

        <div className='searched-box'>

        </div>
      </div>
    </div>
  )
}

export default SearchModal