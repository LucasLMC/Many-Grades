import React, { Component } from 'react';
import "./styles.css";

class CategoryList extends Component {

    constructor(){
        super()
        this.state = {categories: []}

        this._newCategories = this._newCategories.bind(this)
    }

    componentDidMount(){
        this.props.categories.register(this._newCategories)
    }

    componentWillUnmount(){
        this.props.categories.register(this._newCategories)
    }

    _newCategories(categories){
        this.setState({...this.state, categories})
    }

    _handleInputEvent(e) {
        if(e.key === "Enter"){
            let categoryValue = e.target.value
            this.props.addCategory(categoryValue)
        }
    }

    render() { 
        return (
            <section className="category_list">
                <ul className="category_list_ul">
                    {
                        this.state.categories.map((category,index) =>
                        {
                          return  <li key={index} className="category_list_item">{category} </li>
                        }
                        )}
                </ul>
                <input 
                    type="text"
                    className="category_list_input"
                    placeholder="Add category"
                    onKeyUp={
                        this._handleInputEvent.bind(this)
                    }
                />
            </section>
        );
    }
}
 
export default CategoryList;