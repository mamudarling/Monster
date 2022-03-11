import React, { useEffect, useState } from 'react'
import CardList from './MonsterFunctional/Card-list.component/Card-list';
import Search from './MonsterFunctional/Search-Monster/Search';
import './App.css'

const AppFunction = () => {
  const [searchField,setSearchField] = useState('')
  const [monster,setMonster] = useState([])
  const onSearchChange = (event) =>{
    const searchField = event.target.value.toLocaleLowerCase();
    setSearchField(searchField)
  
  }
  const filterMonster = monster.filter((monster)=>{
    return monster.name.toLocaleLowerCase().includes(searchField)
  })

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>response.json())
    .then((users)=>setMonster(users))
  },[])
  return (
    <div>
        <div>
        <h1  className='app-title'>Monster Title</h1>
        <Search text='Search Monster' onSearchChange={onSearchChange}/>
        <CardList monster={filterMonster}/>
      </div>
    </div>
  )
}

export default AppFunction