import React from "react";

function NavTabs(props) {
  return(
    <div className="container sticky-top">
      <div className="row text-white" style ={{backgroundColor:'#5133a4'}}>
        <div className="col-12">
          <h1 className="display-4 text-center">Clicky Game</h1>
        </div>
      </div>      
      <div className="row text-white bg-danger">
        <div className="col-10" style ={{marginTop: '10px',marginBottom: '10px'}}>
          <span className="text-left font-weight-bold">{props.msg}</span>
        </div>
        <div className="col-2 text-right" style ={{marginTop: '10px',marginBottom: '10px'}}>
          <span className="text-right font-weight-bold">Score: {props.counter}</span> 
        </div>
      </div>
    </div>
  )
}

export default NavTabs;
