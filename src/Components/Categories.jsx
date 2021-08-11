import React from 'react';
import PropTypes from 'prop-types'

const Categories = ({categoryItems, categoryToggle, activeCategory}) => {
    return (
        <div className="categories">
            <ul>
                {categoryItems && categoryItems.map( categoryName =>
                    <li onClick={() => categoryToggle(categoryName)} className={categoryName === activeCategory ? "active": ""} key={categoryName}>{categoryName}</li>)}
            </ul>
        </div>
    );
};

Categories.propTypes = {
    categoryItems: PropTypes.arrayOf(PropTypes.string),
    categoryToggle: PropTypes.func,
    activeCategory: PropTypes.string
}
export default Categories;