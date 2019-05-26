import React from "react";

function Footer() {
  return(
    <div className="container fixed-bottom"style ={{paddingLeft: '35px', paddingRight: '35px'}}>
      <div className="row text-white" style ={{backgroundColor:'#5133a4'}}>
        <div className="col-12">
          <p className="text-center font-weight-bold" style ={{marginTop: '10px',marginBottom: '10px'}}>Click on an Image to Earn Points, but don't click on the same image twice!</p>
        </div>
      </div> 
    </div>
  )
}

export default Footer;
