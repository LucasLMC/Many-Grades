import React, { Component } from 'react';
import "./styles.css";

class CategoryList extends React.Component {
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
                        this.props.categories.map((category,index) =>
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