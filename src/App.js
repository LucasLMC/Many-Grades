import React, { Component } from "react";

import './assets/App.css';
import './assets/index.css';

import CadForm from "./components/CadForm";
import NoteList from "./components/NoteList";
import CategoryList from "./components/CategoryList";
import Categories from "./data/Categories";
import NoteGroup from "./data/Notes";
class App extends Component {
  
  constructor(){
    super()
    this.categories = new Categories()
    this.notes = new NoteGroup()
  }

  render(){
    return (
      <section className="content">
          <CadForm 
              categories = {this.categories.categories}
              createNote = {this.notes.addNote}/>
          <main className="main_content">
            <CategoryList 
              categories = {this.categories.categories}
              addCategory = {this.categories.addCategory}
            />
            <NoteList 
              notes = {this.notes.notes}
              deleteNote={this.notes.deleteNote}
            />
          </main>
        </section>
    );
  }
}

export default App;
