import React, { Component } from 'react'
import './SearchBox.css'

export class Searchbox extends Component {
  render() {
      const {onSearchChange,text} = this.props
    return (
      <div className='Search'>
           <input 
           className={`search-box ${this.props.className}`}
           type='search'
            placeholder={this.props.text}
            onChange={onSearchChange}/>
      </div>
    )
  }
}

export default Searchbox