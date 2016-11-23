import './Carousel.scss';
import React, { Component, PropTypes } from 'react';


class PageOne extends React.Component {
   render() {
      return (
         <div className="">
         	<div className="bodydiv">
	            <div className="welcomeLetter">Welcome to</div>
	            <div className="dropLetter">DROP!</div>
	            <div className="orderLetter">Order from your favourite delivery<br/>services with just one click!</div>
	         </div>
            <div className="bottomButton" onClick={this.props.next}>Get Started</div>
         </div>
      );
   }
}

export default PageOne;