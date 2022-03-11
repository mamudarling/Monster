
import React, { Component } from 'react'

const WithRouter = (OriginalComponent) =>{
  class WithRouter extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
           data : []
        }
      }
       handleClick = ()=>{
         this.setState({
           data:this.props.data
         })
       }
      render(){
          return(
              <OriginalComponent data={this.state.data} handleClick={this.handleClick}></OriginalComponent>
          )
      }
  }
  return WithRouter
}

export default WithRouter