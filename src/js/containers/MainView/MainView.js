import './MainView.scss';
import React, { Component, PropTypes } from 'react';
import {DropdownButton, FormGroup, FormControl, MenuItem, Modal, strong} from 'react-bootstrap'
import ReactScrollableList from '../../components/ScrollList/ScrollList.js'
import GoogleMap from 'google-map-react';
import StarRatingComponent from 'react-star-rating-component';

let brandItems = [];


for(let i=1000; i<10000; i++){
  brandItems.push({id: i, content: i});
}

export default class MainView extends React.Component {
  static defaultProps = {
    center: {lat: 59.938043, lng: 30.337157},
    zoom: 9,
    greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
  };
  constructor(props) {
    super(props);
    this.openHelpM = this.openHelpM.bind(this)
    this.closeHelpM = this.closeHelpM.bind(this)
    this.openTimeM = this.openTimeM.bind(this)
    this.closeTimeM = this.closeTimeM.bind(this)
    this.openPersonM = this.openPersonM.bind(this)
    this.closePersonM = this.closePersonM.bind(this)
    this.openNewPer = this.openNewPer.bind(this)
    this.closeNewPer = this.closeNewPer.bind(this)
    this.openAddrM = this.openAddrM.bind(this)
    this.closeAddrM = this.closeAddrM.bind(this)
    this.openNewAddr = this.openNewAddr.bind(this)
    this.closeNewAddr = this.closeNewAddr.bind(this)
    this.openCartM = this.openCartM.bind(this)
    this.closeCartM = this.closeCartM.bind(this)
    this.openNewCart = this.openNewCart.bind(this)
    this.closeNewCart = this.closeNewCart.bind(this)
    this.openSubmitM = this.openSubmitM.bind(this)
    this.closeSubmitM = this.closeSubmitM.bind(this)
    this.onStarClick = this.onStarClick.bind(this)
    this.state =  {
                    showHelpM: true,
                    showTimeM: false,
                    showPersonM: false,
                    showNewPer: false,
                    showAddrM: false,
                    showNewAddr: false,
                    showCartM: false,
                    showNewCart: false,
                    showSubmitM: false,
                    rating: 3
                  };
  }

  closeHelpM() {
    this.setState({ showHelpM: false });
  }

  openHelpM() {
    this.setState({ showHelpM: true });
  }
  closeTimeM() {
    this.setState({ showTimeM: false });
  }

  openTimeM() {
    this.setState({ showTimeM: true });
  }
  closePersonM() {
    this.setState({ showPersonM: false });
  }

  openPersonM() {
    this.setState({ showPersonM: true });
  }
  closeNewPer() {
    this.setState({ showNewPer: false });
    this.openPersonM();
  }

  openNewPer() {
    this.setState({ showNewPer: true });
    this.closePersonM();
  }

  closeAddrM() {
    this.setState({ showAddrM: false });
  }

  openAddrM() {
    this.setState({ showAddrM: true });
  }
  closeNewAddr() {
    this.setState({ showNewAddr: false });
    this.openAddrM();
  }

  openNewAddr() {
    this.setState({ showNewAddr: true });
    this.closeAddrM();
  }
  
  closeCartM() {
    this.setState({ showCartM: false });
  }

  openCartM() {
    this.setState({ showCartM: true });
  }
  closeNewCart() {
    this.setState({ showNewCart: false });
    this.openCartM();
  }

  openNewCart() {
    this.setState({ showNewCart: true });
    this.closeCartM();
  }

  closeSubmitM() {
    this.setState({ showSubmitM: false });
  }

  openSubmitM() {
    this.setState({ showSubmitM: true });
  }

  onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
    }

  render() {
    
    const { rating } = this.state;
    return (
      <div className="mainDiv">
      	<div className="menuDiv">
          <DropdownButton className="noButton" title="• • •" noCaret pullRight id="dropdown-no-caret">
            <MenuItem eventKey="1">
              <img className="menu_img" src="./images/Drop/setting.png"/>App settings</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="2">
              <img className="menu_img" src="./images/Drop/history.png"/>Order history</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="3" onClick={this.openSubmitM}>
              <img className="menu_img" src="./images/Drop/help.png"/>Help</MenuItem>
          </DropdownButton>
        </div>
      	<div className="titleDiv">
      		<div className="titleLetter">One swipe to order!</div>
      		
      	</div>
      	<div className="dropButtonDiv">
      		<div className="sliderDiv">
      			<img style={{padding: '90px 0px 0px', height: '340'+'px'}} src="./images/Drop/main_slider.png"/>
      		</div>
      		<div className="circleButtonDiv">
      			<img style={{height: '100'+'%'}} src="./images/Drop/main_slide_button.png"/>
      			<div className="dropButtonLetter">DROP!</div>
      		</div>
      	</div>
      	<div className="profileDiv">
      		<div className="profileItemDiv makeactive" onClick={this.openTimeM}>
      			<img style={{float: 'left', height: '100'+'%'}} src="./images/Drop/main_time_icon.png"/>
      			<div className="profileLetter">7:00pm - 9:00pm Today</div>
            </div>
      		<div className="profileItemDiv makeactive" onClick={this.openPersonM}>
      			<img style={{float: 'left', height: '100'+'%'}} src="./images/Drop/main_delivery_icon.png"/>
      			<div className="profileLetter">Duong Vung</div>
      		</div>
      		<div className="profileItemDiv makeactive" onClick={this.openAddrM}>
      			<img style={{float: 'left', height: '100'+'%'}} src="./images/Drop/main_location_icon.png"/>
      			<div className="profileLetter">Home</div>
      		</div>
      		<div className="profileItemDiv makeactive" onClick={this.openCartM}>
      			<img style={{float: 'left', height: '100'+'%'}} src="./images/Drop/main_shoppingcart_icon.png"/>
      			<div className="profileLetter">150,000d for 13 items</div>
      		</div>
      	</div>
        <Modal show={this.state.showHelpM} className="helpModal" animation={false} onHide={this.closeHelpM}>
                  <div onClick={this.closeHelpM}>
                    <div className="helpModalHeader">
                      Pull the <strong>Drop</strong> switch down and<br/>release to place your first order!
                    </div>
                    <img className="helpModal_img" src="./images/Drop/pull_down_finger_arrow.png"/>
                    <div className="helpModalBtn">Got it!</div>
                  </div>
                </Modal>
        <Modal show={this.state.showTimeM} className="modal modalPosition">
                  <Modal.Header bsClass="myModalHeader">
                    Deliver anytime after
                  </Modal.Header>
                  <Modal.Body>
                    <ReactScrollableList
                      listItems={brandItems}
                      heightOfItem={30}
                      maxItemsToRender={20}
                    />
                    
                  </Modal.Body>
                  <Modal.Footer bsClass="modalFooter">
                    <div className="modalBtn modalBtnLeft" onClick={this.closeTimeM}>Close</div>
                    <div className="modalBtn" onClick={this.closeTimeM}>OK</div>
                  </Modal.Footer>
                </Modal>
        <Modal show={this.state.showPersonM} className="modal modalPosition">
                  <Modal.Header bsClass="myModalHeader">
                    Delivery Person
                  </Modal.Header>
                  <Modal.Body>
                    <div className="mo_per_imgDiv">
                      <img className="mo_per_img" src="./images/Drop/info_button2.png"/>
                      <div className="mo_large_letter">Duong Vung</div> 
                    </div>
                    <div>can deliver your<br/><strong>13 items</strong> to <strong>Home</strong><br/>for <strong>150,000d</strong></div>
                    <div style={{margin: '20px'}} className="mo_large_letter">Or</div>
                    <div className="mo_per_imgDiv makeactive" onClick={this.openNewPer}>
                      <img className="mo_per_img" src="./images/Drop/add_button2.png"/>
                      <div className="mo_small_letter">Add a new delivery person</div> 
                    </div>
                  </Modal.Body>
                  <Modal.Footer bsClass="modalFooter">
                    <div className="modalBtn modalBtnLeft" onClick={this.closePersonM}>Close</div>
                    <div className="modalBtn" onClick={this.closePersonM}>OK</div>
                  </Modal.Footer>
                </Modal>
        <Modal show={this.state.showNewPer} className="modal modalPosition">
                  <Modal.Header bsClass="myModalHeader">
                    New Delivery Person
                  </Modal.Header>
                  <Modal.Body>
                    <div className="inputdiv">
                      <FormGroup>
                         <FormControl className="mo_inputElement ph_name_icon" type="text" placeholder="Name" />
                         <FormControl className="mo_inputElement ph_moblie_icon" type="number" placeholder="Mobile" />
                      </FormGroup>
                    </div>
                    
                  </Modal.Body>
                  <Modal.Footer bsClass="modalFooter">
                    <div className="modalBtn modalBtnLeft" onClick={this.closeNewPer}>Close</div>
                    <div className="modalBtn" onClick={this.closeNewPer}>Add</div>
                  </Modal.Footer>
                </Modal>
        <Modal show={this.state.showAddrM} className="modal modalPosition">
                <Modal.Header bsClass="myModalHeader">
                  Your Delivery Addresses
                </Modal.Header>
                <Modal.Body>
                  <ReactScrollableList
                    listItems={brandItems}
                    heightOfItem={30}
                    maxItemsToRender={20}
                  />
                  <div className="mo_per_imgDiv makeactive" onClick={this.openNewAddr}>
                    <img className="mo_per_img_center" src="./images/Drop/add_button2.png"/>
                  </div>
                </Modal.Body>
                <Modal.Footer bsClass="modalFooter">
                  <div className="modalBtn modalBtnLeft" onClick={this.closeAddrM}>Close</div>
                  <div className="modalBtn" onClick={this.closeAddrM}>OK</div>
                </Modal.Footer>
              </Modal>
        <Modal show={this.state.showNewAddr} className="modal modalPosition">
                <Modal.Header bsClass="myModalHeader">
                  New Address
                </Modal.Header>
                <Modal.Body>
                  <div className="inputThdiv">
                    
                    <FormControl className="inputThElement  ph_name_icon" type="text" placeholder="Address label" />
                  </div>
                  <div className="mo_mapDiv">
                    <div className="mo_map">
                       <GoogleMap
                         defaultCenter={this.props.center}
                         defaultZoom={this.props.zoom}>

                       </GoogleMap>
                    </div>
                    <FormControl componentClass="textarea" className="mapLetter ph_address_icon" type="text" placeholder="Your delivery address" />
                  </div>
                </Modal.Body>
                <Modal.Footer bsClass="modalFooter">
                  <div className="modalBtn modalBtnLeft" onClick={this.closeNewAddr}>Close</div>
                  <div className="modalBtn" onClick={this.closeNewAddr}>Add</div>
                </Modal.Footer>
              </Modal>
        <Modal show={this.state.showCartM} className="modal modalPosition">
                <Modal.Header bsClass="myModalHeader">
                  Shopping Cart
                </Modal.Header>
                <Modal.Body>
                  <ReactScrollableList
                    listItems={brandItems}
                    heightOfItem={30}
                    maxItemsToRender={20}
                  />
                  <div className="mo_per_imgDiv makeactive" onClick={this.openNewCart}>
                    <img className="mo_per_img_center" src="./images/Drop/add_button2.png"/>
                  </div>
                  <strong>Order total: 150,000d</strong>
                </Modal.Body>
                <Modal.Footer bsClass="modalFooter">
                  <div className="modalBtn modalBtnLeft" onClick={this.closeCartM}>Close</div>
                  <div className="modalBtn" onClick={this.closeCartM}>OK</div>
                </Modal.Footer>
              </Modal>
        <Modal show={this.state.showNewCart} className="modal modalPosition">
                <Modal.Header bsClass="myModalHeader">
                  Add Items to Cart
                </Modal.Header>
                <Modal.Body>
                  <ReactScrollableList
                    listItems={brandItems}
                    heightOfItem={30}
                    maxItemsToRender={20}
                  />
                  <strong>Selection total: 40,000d</strong>
                </Modal.Body>
                <Modal.Footer bsClass="modalFooter">
                  <div className="modalBtn modalBtnLeft" onClick={this.closeNewCart}>Close</div>
                  <div className="modalBtn" onClick={this.closeNewCart}>Add</div>
                </Modal.Footer>
              </Modal>
        <Modal show={this.state.showSubmitM} className="modal modalPosition">
          <Modal.Header bsClass="myModalHeader">
            Thank you for using Drop
          </Modal.Header>
          <Modal.Body>
            <div>To imporve our service<br/>could you please rate the<br/>quality of your last delivery?</div><br/>
            <div>The delivery was done by</div><br/>
            <div className="mo_large_letter">Duong Vung</div><br/>
            <StarRatingComponent 
                    name="rate1" 
                    starCount={4}
                    value={rating}
                    onStarClick={this.onStarClick}
                />
          </Modal.Body>
          <Modal.Footer bsClass="modalFooter">
            <div className="modalBtnOne" onClick={this.closeSubmitM}>Submit rating</div>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}
