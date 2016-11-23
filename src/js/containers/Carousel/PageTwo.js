import './Carousel.scss';
import React, { Component, PropTypes } from 'react';
import { FormGroup, FormControl, Modal, Button } from 'react-bootstrap';
import ReactScrollableList from '../../components/ScrollList/ScrollList.js'
let brandItems = [];

  // brandItems.push({ id: '0', content: 'Awa' });
  // brandItems.push({ id: '1', content: 'La Vie' });
  // brandItems.push({ id: '2', content: 'Dasani' });
  // brandItems.push({ id: '3', content: 'Aquafina' });
  // brandItems.push({ id: '4', content: 'sapuwa' });
  // brandItems.push({ id: '5', content: 'Vinh Hao' });
  // brandItems.push({ id: '6', content: 'ANY BRAND' });
for(let i=1000; i<10000; i++){
  brandItems.push({id: i, content: i});
}


class PageTwo extends React.Component {
  constructor(props) {
    super(props);
    this.toSecondPage = this.toSecondPage.bind(this);
    this.toFirstPage = this.toFirstPage.bind(this);
    this.openOne = this.openOne.bind(this)
    this.closeOne = this.closeOne.bind(this)
    this.openTwo = this.openTwo.bind(this)
    this.closeTwo = this.closeTwo.bind(this)
    this.openThree = this.openThree.bind(this)
    this.closeThree = this.closeThree.bind(this)
    this.state = {
                    isSecondPage: false,
                    showModalOne: false,
                    showModalTwo: false,
                    showModalThree: false
                  };
  }

  toSecondPage() {
    this.setState({isSecondPage: true});
  }

  toFirstPage() {
    this.setState({isSecondPage: false});
  }

  closeOne() {
    this.setState({ showModalOne: false });
  }

  openOne() {
    this.setState({ showModalOne: true });
  }
  closeTwo() {
    this.setState({ showModalTwo: false });
    this.openThree();
  }

  openTwo() {
    this.setState({ showModalTwo: true });
  }
  closeThree() {
    this.setState({ showModalThree: false });
  }

  openThree() {
    this.setState({ showModalThree: true });
  }

  render() {
    const isSecondPage = this.state.isSecondPage;
    let currentPage = null;

    if (isSecondPage) {
      currentPage = <div className="bodydiv">
                <div className="backLetter"  onClick={this.toFirstPage}>&lt;Back</div>
                <div className="bikeimg">
                  <img style={{margin: 'auto', height: '100'+'%'}} src="./images/Drop/Scooter.png"/>
                </div>
                <div className="recommendLetter">We recommend</div>
                <div className="nameLetter">
                  <img style={{float: 'left', height: '100'+'%'}} src="./images/Drop/info_button.png"/>
                  Duong Vung
                </div>
                <div className="aquatonicLetter">for delivering</div>
                <div className="aquatonicLetter">Aquatonic in Dong Da, Hanoi</div>
                <div className="drinkimg" onClick={this.openOne}>
                  <img style={{float: 'left', height: '100'+'%'}} src="./images/Drop/drink_button.png"/>
                  Change product brand
                </div>
                <div className="drinkimg" onClick={this.openTwo}>
                  <img style={{float: 'left', height: '100'+'%'}} src="./images/Drop/change_delivery_button.png"/>
                  Change delivery area
                </div>
                <Modal show={this.state.showModalOne} className="modal modalPosition">
                        <Modal.Header bsClass="myModalHeader">
                          Choose a product brand
                        </Modal.Header>
                        <Modal.Body>
                          <ReactScrollableList
                            listItems={brandItems}
                            heightOfItem={30}
                            maxItemsToRender={20}
                          />
                          
                        </Modal.Body>
                        <Modal.Footer bsClass="modalFooter">
                          <div className="modalBtn modalBtnLeft" onClick={this.closeOne}>Close</div>
                          <div className="modalBtn" onClick={this.closeOne}>OK</div>
                        </Modal.Footer>
                      </Modal>
                <Modal show={this.state.showModalTwo} className="modal modalPosition">
                        <Modal.Header bsClass="myModalHeader">
                          Choose a delivery area
                        </Modal.Header>
                        <Modal.Body>
                          <ReactScrollableList
                            listItems={brandItems}
                            heightOfItem={30}
                            maxItemsToRender={20}
                          />
                          
                        </Modal.Body>
                        <Modal.Footer bsClass="modalFooter">
                          <div className="modalBtn modalBtnLeft" onClick={this.closeTwo}>Close</div>
                          <div className="modalBtn" onClick={this.closeTwo}>OK</div>
                        </Modal.Footer>
                      </Modal>
                <Modal show={this.state.showModalThree} className="modal modalPosition">
                        <Modal.Header bsClass="myModalHeader">
                          Duong Vung's profile
                        </Modal.Header>
                        <Modal.Body>
                          <div className="mo_imgDiv">
                            <img className="mo_img" src="./images/Drop/profile_location.png"/>
                            54 Thai thinh street,Nga Tu So,<br/>Dong Da, Hanoi
                          </div><br/>
                          <div className="mo_imgDiv">
                            <img className="mo_img" src="./images/Drop/profile_delivery.png"/>
                            432 deliveries in 3 months
                          </div><br/>
                          <div className="mo_imgDiv">
                            <img className="mo_img" src="./images/Drop/profile_product_list.png"/>
                            Product list
                          </div><br/>
                          <ReactScrollableList
                            listItems={brandItems}
                            heightOfItem={30}
                            maxItemsToRender={20}
                          />
                          
                        </Modal.Body>
                        <Modal.Footer bsClass="modalFooter">
                          <div className="modalBtnOne" onClick={this.closeThree}>Close</div>
                          
                        </Modal.Footer>
                      </Modal>
            </div>
    } else {
      currentPage = <div className="bodydiv">
                <div className="bikeimg">
                  <img style={{margin: 'auto', height: '100'+'%'}} src="./images/Drop/Scooter.png"/>
                </div>
                <div className="addLetter">Add your regular<br/>delivery person</div>
                <div className="inputdiv">
                  <FormGroup>
                    <FormControl className="inputElement ph_name_icon" type="text" placeholder="Delivery person's name" />
                    <FormControl className="inputElement ph_moblie_icon" type="number" placeholder="Delivery person's mobile" />
                  </FormGroup>
                </div>
                <div className="addimage" style={{cursor: 'pointer'}}>
                  <img style={{float: 'left', height: '100'+'%'}} src="./images/Drop/add_button.png"/>
                  Add as many as you need
                </div>
                <div className="orLetter">OR</div>
                <div className="findimage" onClick={this.toSecondPage}>
                  <img style={{float: 'left', height: '100'+'%'}} src="./images/Drop/search.png"/>
                  Let us recomment someone
                </div>
            </div>
    }

    return (
      <div>
         {currentPage}
         <div className="bottomButton" onClick={this.props.next}>Done</div>
        
      </div>
    );
  }
}
export default PageTwo;
