import React, { Component } from "react";
import "./style.css";

class CadForm extends Component{

    constructor(props){
        super(props);
        this.title = "";
        this.text = "";
        this.category="No Category"
    }

    _handleChangeCategory(event){
        event.stopPropagation()
        this.category = event.target.value
    }
    _handleChangeTitle(event){
        event.stopPropagation()
        this.title = event.target.value
    }

    _handleChangeText(event){
        event.stopPropagation()
        this.text = event.target.value
    }

    _addNote(event){
        event.preventDefault()
        event.stopPropagation()
        this.props.createNote(this.title, this.text, this.category)
    }

    render(){
        return(
            <form className="cad_form"
                onSubmit = { this._addNote.bind(this) }
            >
                <select
                    onChange={ this._handleChangeCategory.bind(this) }
                    className="input_cad_form" 
                >
                    <option>No Category</option>
                    {
                        this.props.categories.map(
                            (category) => {
                                return <option>{category}</option>
                            })
                    }
                </select>
                <input
                    type="text"
                    placeholder="Título"
                    className="input_cad_form"
                    onChange={this._handleChangeTitle.bind(this)}
                />
                <textarea
                    rows={15}
                    placeholder="Escreva sua nota..."
                    className="input_cad_form"
                    onChange={this._handleChangeText.bind(this)}
                />
                <button className="input_cad_form submit_cad_form">
                    Criar Nota
                </button>
            </form>
        )
    }
}

export default CadForm;