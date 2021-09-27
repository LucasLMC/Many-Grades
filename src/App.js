import React, { Component } from "react";
import NoteList from "./components/NoteList/noteList";
import CadForm from "./components/CadForm/cadForm";
import './assets/App.css';
import './assets/index.css';
class App extends Component {
  
  constructor(){
    super()
    this.state = {
      notes : []
    }
  }

  
  createNote(title, text){
    const newNote = {title, text}
    const newNotesArray = [...this.state.notes, newNote]
    const newState = {
        notes:newNotesArray
    }
    this.setState(newState)
  }


  render(){
    return (
      <section className="content">
          <CadForm createNote = {this.createNote.bind(this)}/>
          <NoteList notes = {this.state.notes}/>
        </section>
    );
  }
}

export default App;
