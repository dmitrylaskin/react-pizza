import React from 'react';

const Categories = ({categoryItems, categoryToggle, activeCategory}) => {
    return (
        <div className="categories">
            <ul>
                {categoryItems && categoryItems.map( categoryName => <li onClick={() => categoryToggle(categoryName)} className={categoryName === activeCategory ? "active": ""} key={categoryName}>{categoryName}</li>)}
            </ul>
        </div>
    );
};

export default Categories;