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
              categories = {this.categories}
              createNote = {this.notes.addNote.bind(this.notes)}/>
          <main className="main_content">
            <CategoryList 
              categories = {this.categories}
              addCategory = {this.categories.addCategory.bind(this.categories)}
            />
            <NoteList 
              notes = {this.notes}
              deleteNote={this.notes.deleteNote.bind(this.notes)}
            />
          </main>
        </section>
    );
  }
}

export default App;
