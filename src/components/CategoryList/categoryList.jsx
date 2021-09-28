import React, { Component } from 'react';
import "./styles.css";


class CategoryList extends React.Component {
    render() { 
        return (
            <section className="category_list">
                <ul className="category_list_ul">
                    <li className="category_list_item">Categorias </li>
                    <li className="category_list_item">Categorias </li>
                    <li className="category_list_item">Categorias </li>
                </ul>
                <input 
                    type="text"
                    className="category_list_input"
                />
            </section>
        );
    }
}
 
export default CategoryList;