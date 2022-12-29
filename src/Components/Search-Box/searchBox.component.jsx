import React from 'react';
import '../Search-Box/searchBox.styles.css';

export const SearchBox = ({HandleChange, placeholder}) => {
    return (
    <input type="search"
    className = "search-box"
    placeholder = {placeholder}
    onChange={HandleChange}
    />
    );
}
