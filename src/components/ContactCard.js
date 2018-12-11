import React, { Component } from 'react';
import './ContactCard.css';

class ContactCard extends Component {

	constructor(props) {
    super(props);
    let contacts = require('./ContactInfo.json');
    let emergContact = new dict();
    for(var i = 1; i < contacts.length; i++){
    	emergContact["Name"][i-1] = contacts["B"][i];
    	emergContact["Phone Number"][i-1] = contacts["C"][i];
    	emergContact["email"][i-1] = contacts["D"][i];
    }
    this.state = {
    	employee: emergContact
    };
  }

	render() {
	    return (

	      <div className="ContactCard">
	        {this.props.text}
	        <div className="button">
		    </div>
	      </div>
	    );
	  }
}

export default ContactCard;
