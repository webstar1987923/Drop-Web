import './Carousel.scss';
import React, {PropTypes, Component} from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';
import shouldPureComponentUpdate from 'react-pure-render/function';
import GoogleMap from 'google-map-react';

class PageThree extends Component {
  static defaultProps = {
    center: {lat: 59.938043, lng: 30.337157},
    zoom: 9,
    greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
  };

  shouldComponentUpdate = shouldPureComponentUpdate;

  constructor(props) {
    super(props);
  }
   
   render() {
      return (
         <div className="">
         	<div className="bodydiv">
	            <div className="bikeimg">
                  <img style={{margin: 'auto', height: '100'+'%'}} src="./images/Drop/Address_icon.png"/>
               </div>
	            <div className="contactLetter">Your contact details</div>
	            <div className="inputThdiv">
                  <FormGroup>
                     <FormControl className="inputThElement ph_name_icon" type="text" placeholder="Your name" />
                     <FormControl className="inputThElement ph_moblie_icon" type="number" placeholder="Your mobile number" />
                     
                  </FormGroup>

               </div>
               <div className="mapDiv">
                  <div className="map">
                     <GoogleMap
                       defaultCenter={this.props.center}
                       defaultZoom={this.props.zoom}>

                     </GoogleMap>
                  </div>
                  
                  <FormControl componentClass="textarea" className="mapLetter ph_address_icon" type="text" placeholder="Your delivery address" />
               </div>

	         </div>
            <a href="MainView"><div className="bottomButton">Done</div></a>
         </div>
      );
   }
}

export default PageThree;