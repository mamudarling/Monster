import React from 'react';
import './Search.css'

const Search = ({text,onSearchChange}) => {
  return (
    <div>
         <div className='Search'>
           <input 
           className='search-box'
           type='search'
            placeholder={text}
            onChange={onSearchChange}/>
      </div>
    </div>
  )
}

export default Search