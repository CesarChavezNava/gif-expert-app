import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
    const initialState = '';
    const [inputValue, setInputValue] = useState(initialState);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 2) {
            setCategories( categories => [...categories, inputValue]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={handleInputChange} />
            <h2>Add Category</h2>
        </form>
    )
}

AddCategory.prototype = {
    setCategories: PropTypes.func.isRequired
}
