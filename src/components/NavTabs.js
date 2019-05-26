import React from "react";

function NavTabs(props) {
  return(
    <div className="container">
      <div className="row text-white bg-info">
        <div className="col-12">
          <h1 className="display-4 text-center">Clicky Game</h1>
          <p className="text-center font-weight-bold">Click on an Image to Earn Points, but don't click on the same image twice!</p>
        </div>
      </div>      
      <div className="row text-white bg-danger">
        <div className="col-6">
          <span className="text-left font-weight-bold">{props.msg}</span>
        </div>
        <div className="col-6 text-right">
          <span className="text-right font-weight-bold">Score: {props.counter}</span> 
        </div>
      </div>
    </div>
  )
}

export default NavTabs;
