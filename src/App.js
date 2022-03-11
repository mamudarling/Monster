
import React, { Component } from 'react'
import CardList from './Monster/Components/Card-List/card-list-component';
import Searchbox from './Monster/Components/Search-box/search-box-component';

import './App.css'

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       monster:[],
       searchField:''
    }
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>response.json())
    .then((users)=>this.setState(()=>{
      return {monster:users}
    }))
  }
  onSearchChange= (event)=>{
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(()=>{
      return{searchField}
    })
  }

  render() {
    const {monster,searchField} = this.state
     const {onSearchChange} = this
    const filterMonster = monster.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField)
    })
    return (
      <div>
        <h1  className='app-title'>Monster Title</h1>
        <Searchbox text='Search Monster' onSearchChange={onSearchChange}/>
        <CardList monster={filterMonster}/>
      
      </div>
    )
  }
}

export default App

