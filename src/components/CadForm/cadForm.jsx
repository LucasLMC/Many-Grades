import React, { Component } from "react";
import "./style.css";

class CadForm extends Component{

    constructor(props){
        super(props);
        this.title = "";
        this.text = "";
    }

    _handleMudancaTitulo(event){
        this.title = event.target.value
    }

    _handleMudancaTexto(event){
        this.text = event.target.value
    }

    _addNote(event){
        event.preventDefault()
        event.stopPropagation()
        this.props.createNote(this.title, this.text)
    }

    render(){
        return(
            <form className="cad_form"
                onSubmit = { this._addNote.bind(this) }
            >
                <input
                    type="text"
                    placeholder="Título"
                    className="input_cad_form"
                    onChange={this._handleMudancaTitulo.bind(this)}
                />
                <textarea
                    rows={15}
                    placeholder="Escreva sua nota..."
                    className="input_cad_form"
                    onChange={this._handleMudancaTexto.bind(this)}
                />
                <button className="input_cad_form submit_cad_form">
                    Criar Nota
                </button>
            </form>
        )
    }
}

export default CadForm;