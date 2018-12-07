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
	        <button 
	         	className="btnUndoCheckIn" 
	         	name="UndoCheckIn" 
	         	type="button" 
	         	onClick={this.props.deleteMethod}>Undo
	         </button>
	      </div>
	    );
	  }
}

export default MarkedSafe;
