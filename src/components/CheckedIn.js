import React, { Component } from 'react';
import './CheckedIn.css';

class CheckedIn extends Component {

	constructor(props) {
    super(props);
    this.state = {
    };
  }

	render() {
	    return (

	      <div className="CheckedIn">
	        {this.props.text}
	         <button 
	         	className="btnCheckIn" 
	         	name="isCheckedIn" 
	         	type="button" 
	         	onClick={this.props.deleteMethod}>Check In
	         </button>
	      </div>
	    );
	  }
}

export default CheckedIn;
