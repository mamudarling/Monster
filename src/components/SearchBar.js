
import React, { Component } from "react";
import WithRouter from "./withRouter";

export class SearchBar extends Component {
 
  render() {
    const {data,handleClick} = this.props
    return <div>
      
           <input
          type="text"
          placeholder='enter Text'
          onClick={handleClick}
          
        />
         <div className="title">
       {data.map((value, key) => {
          return (
           <div>
                <p>{value.title} </p>
           </div>
        );
       })}
    </div>
        
      </div>;
  }
}

export default WithRouter(SearchBar);
