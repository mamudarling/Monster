import React from 'react'

const Card = ({monster}) => {
    const {id,name,email} = monster;
  return (
    <div className='card-container' key={id}>
    <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2`} className='image'/>
   <h2>{name}</h2>
   <p>{email}</p>
  </div>
  )
}

export default Card