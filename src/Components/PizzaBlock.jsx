import React, {useState} from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import AddBtn from "./AddBtn";

const PizzaBlock = ({pizzaItem, onAddPizza}) => {

    const pizzaTypes = ["традиционное", "тонкое"]
    const [activePizzaType, setActivePizzaType] = useState(0)
    const [activePizzaSize, setActivePizzaSize] = useState(pizzaItem.sizes[0])

    const onChangeType = (type) => {
        setActivePizzaType(type)
    }
    const onChangeSize = (size) => {
        setActivePizzaSize(size)
    }
    const addPizzaHandler = () => {
        const pizzaObj = {
            id: pizzaItem.id,
            imageUrl: pizzaItem.imageUrl,
            name: pizzaItem.name,
            type: activePizzaType,
            size: activePizzaSize,
            price: pizzaItem.price,
        }
        onAddPizza(pizzaObj)
    }

    return (
        <div key={pizzaItem.id} className="pizza-block">
            <img
                className="pizza-block__image"
                src={pizzaItem.imageUrl}
                alt="Pizza"
            />
            <h4 className="pizza-block__title">{pizzaItem.name}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {pizzaItem.types.map(type => <li onClick={() => onChangeType(type)} key={type} className={cn({'active' : activePizzaType === type, 'disabled' : pizzaItem.types.length === 1})}>
                                                    {pizzaTypes[type]}
                                                </li>)}
                </ul>
                <ul>
                    {pizzaItem.sizes.map( size => <li onClick={() => onChangeSize(size)} key={size} className={cn({'active' : activePizzaSize === size})}>
                                                    {size} см.
                                                </li>)}
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {pizzaItem.price}</div>

                <AddBtn id={pizzaItem.id} onClick={addPizzaHandler} className="button--outline button--add">
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Добавить</span>
                    <i>2</i>
                </AddBtn>

            </div>
        </div>
    );
};

PizzaBlock.propTypes = {
    pizzaItem : PropTypes.shape({
        id: PropTypes.number,
        imageUrl: PropTypes.string,
        name: PropTypes.string,
        types: PropTypes.arrayOf(PropTypes.number),
        sizes: PropTypes.arrayOf(PropTypes.number),
        price: PropTypes.number,
        category: PropTypes.number,
        rating: PropTypes.number
    })
}

export default PizzaBlock;