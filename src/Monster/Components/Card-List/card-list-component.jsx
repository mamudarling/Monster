import React, { Component } from 'react'
import Card from '../Card/Card.component'
import './CardList.css'
class CardList extends Component {
  render() {
      const {monster} = this.props
    return (
      <div className='card-list'>
          {
              monster.map((monster)=>{
                  return(
                       <Card monster={monster}/>
                  )
              })
          }
      </div>
    )
  }
}

export default CardList