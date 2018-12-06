import React, { Component } from 'react';
import './Note.css';

class Note extends Component {

	constructor(props) {
    super(props);
    this.state = {
      isCheckedIn: false
    };
     this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
  }
	render() {
	    return (

	      <div className="Note" //onClick={this.props.deleteMethod}
	      >
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

export default Note;
