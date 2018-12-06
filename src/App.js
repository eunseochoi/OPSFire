import React, { Component } from 'react';
import CheckedIn from './components/CheckedIn.js';
import MarkedSafe from './components/MarkedSafe.js';
import './App.css';
class App extends Component {

  constructor(props) {
    super(props);
    let contacts = require('./ContactInfo.json');
    let notCheckedInArr = [];
    for(var i = 1; i < contacts.length; i++){
      notCheckedInArr.push(contacts[i]["B"]);
    }

    this.state = {
      noteText: '',
      notCheckedIn: notCheckedInArr,
      markedSafe: []
    }
  }

  updateNoteText(noteText) {
    this.setState({ noteText: noteText.target.value })
  }

  addNote() {
    if (this.state.noteText === '') {return}

    let notCheckedInArr = this.state.notCheckedIn;
    notCheckedInArr.push(this.state.noteText);
    this.setState( { noteText: ''});
    this.textInput.focus();


  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      let notCheckedInArr = this.state.notCheckedIn;
      notCheckedInArr.push(this.state.noteText);
      this.setState( { noteText: ''});

    }
  }

  checkIn(index) {
    let notCheckedInArr = this.state.notCheckedIn;
    let temp = notCheckedInArr[index];
    let markedSafeArr = [];
    notCheckedInArr.splice(index, 1);
    markedSafeArr.push(temp);
    this.setState({ markedSafe: markedSafeArr })
    alert(markedSafeArr.length);
    this.setState({ notCheckedIn: notCheckedInArr })
    
  }

  render() {

    let notCheckedIn = this.state.notCheckedIn.map((val, key) => {
      return <CheckedIn key={key} text={val} deleteMethod={ (notCheckedIn, markedSafe) => this.checkIn(key) } 
      />
    })

    let safepeople = this.state.markedSafe.map((val, key) => {
      return <MarkedSafe key={key} text={val}/>
    })

    return (
      <div className="container">

        <div className="header">OPS DDSBlaze</div>
        <div className="noCheck">
        { notCheckedIn }
        </div>

        <div className="MarkedSafe">
        { safepeople }
        </div>
        {/*<div className = "btnAdd" onClick={this.addNote.bind(this)}>add</div>*/}

        {/*<input type="text"
          ref={((input) => {this.textInput = input})}
          className="textInput"
          value={this.state.noteText}
          onChange={noteText => this.updateNoteText(noteText)}
          onKeyPress={this.handleKeyPress.bind(this)}/>*/}
      </div>
    );
  }
}

export default App;
