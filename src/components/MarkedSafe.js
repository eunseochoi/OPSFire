import React, { Component } from 'react';
import './MarkedSafe.css';

class MarkedSafe extends Component {

	constructor(props) {
    super(props);
    this.state = {
    };
  }
	render() {
	    return (
	      <div className="MarkedSafe">
	        {this.props.text}
	        <div className="buttons">
	        <button 
	         	className="btnUndoCheckIn" 
	         	name="UndoCheckIn" 
	         	type="button" 
	         	onClick={this.props.deleteMethod}>  Undo  
	         </button>
	         <button
		         	className="btnContactInfo"
		         	name="viewContactInfo"
		         	type="button">
		     </button>
		     </div>
	      </div>
	    );
	  }
}

export default MarkedSafe;
