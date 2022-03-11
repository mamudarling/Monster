
import React, { Component } from "react";
import WithRouter from "./withRouter";

export class SearchMouseOver extends Component {
 
  render() {
    const {data,handleClick} = this.props
    return <div>
      {/* {console.log(this.props)} */}
           <input
          type="text"
          placeholder='enter Text'
          onMouseOver={handleClick}
          
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

export default WithRouter(SearchMouseOver);
