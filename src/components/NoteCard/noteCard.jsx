import React, { Component } from "react";
import "./style.css";
import { ReactComponent as DeleteIcon } from "../../assets/img/delete.svg"
class NoteCard extends Component {

  delete(){
    const index = this.props.index
    this.props.deleteNote(index)
  }
  render() {
    return (
      <section className="note-card">
        <header className="note_card_header">
          <h3 className="note_card_title">{this.props.title}</h3>
            <DeleteIcon onClick={ 
              this.delete.bind(this)
            }/>
            <h4>{this.props.category}</h4>
        </header>
        <p className="note_card_text">{this.props.text}</p>
      </section>
    );
  }
}

export default NoteCard;