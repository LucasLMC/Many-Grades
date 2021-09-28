import React, { Component } from "react";
import NoteList from "./components/NoteList";
import CadForm from "./components/CadForm";
import CategoryList from "./components/CategoryList";
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

  deleteNote(index){
    let notesArray = this.state.notes
    notesArray.splice(index,1)
    this.setState({
      notes:notesArray
    })
    console.log('Deltou')
  }

  render(){
    return (
      <section className="content">
          <CadForm createNote = {this.createNote.bind(this)}/>
          <main className="main_content">
            <CategoryList/>
            <NoteList 
              notes = {this.state.notes}
              deleteNote={this.deleteNote.bind(this)}
            />
          </main>
        </section>
    );
  }
}

export default App;
