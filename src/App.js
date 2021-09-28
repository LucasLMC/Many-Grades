import React, { Component } from "react";

import './assets/App.css';
import './assets/index.css';

import CadForm from "./components/CadForm";
import NoteList from "./components/NoteList";
import CategoryList from "./components/CategoryList";
class App extends Component {
  
  constructor(){
    super()
    this.state = {
      notes : [],
      categories: [],
    }
  }
  
  createNote(title, text, category){
    const newNote = {title, text, category}
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
  }

  addCategory(name){
    const newCategoryArray = [...this.state.categories, name]
    const newState = {...this.state, categories:newCategoryArray}
    this.setState(newState)
  }

  render(){
    return (
      <section className="content">
          <CadForm 
              categories = {this.state.categories}
              createNote = {this.createNote.bind(this)}/>
          <main className="main_content">
            <CategoryList 
              categories = {this.state.categories}
              addCategory = {this.addCategory.bind(this)}
            />
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
