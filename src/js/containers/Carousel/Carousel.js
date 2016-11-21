import './Carousel.scss';
import React, { Component, PropTypes } from 'react';
import Slider from 'react-slick';

import PageOne from './PageOne.js';
import PageTwo from './PageTwo.js';
import PageThree from './PageThree.js';

export default class SimpleSlider extends Component {
  constructor(props) {
    super(props)
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
  }
  next() {
    this.refs.slider.slickNext()
  }
  previous() {
    this.refs.slider.slickPrev()
  }
  render() {
    const settings = {
      dots: true,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 500
    };
    
    return (
      <div>
        <Slider ref='slider' {...settings} className="carouselDiv">
          <div><PageOne next={this.next.bind(this)}/></div>
          <div><PageTwo next={this.next.bind(this)}/></div>
          <div><PageThree/></div>
        </Slider>
      </div>
    )
  }
}