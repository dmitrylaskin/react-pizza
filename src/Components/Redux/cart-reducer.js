const ADD_PIZZA = 'ADD_PIZZA'
const CLEAN_CART = 'CLEAN_CART'
const REMOVE_PIZZA_GROUP = 'REMOVE_PIZZA_GROUP'
const REMOVE_GROUP_PIZZA_ITEM = 'REMOVE_GROUP_PIZZA_ITEM'
const ADD_GROUP_PIZZA_ITEM = 'ADD_GROUP_PIZZA_ITEM'

const initialState = {
    addedPizzas: {},
    totalPrice: 0,
    totalCount: 0
}
const cartReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_PIZZA:
            const currentPizzaItems = !state.addedPizzas[action.payload.id] ? [action.payload] : [...state.addedPizzas[action.payload.id].items, action.payload]
            const newItems = {
                ...state.addedPizzas,
                [action.payload.id]: {items: currentPizzaItems, price: currentPizzaItems.reduce((sum, value) => value.price + sum, 0)}
            }
            const addedItems = [].concat.apply([], Object.values(newItems))
            const items = Object.values(newItems).map(obj => obj.items)


            return {
                ...state,
                addedPizzas: newItems,
                totalCount: [].concat.apply([], items).length,
                totalPrice: addedItems.reduce((sum, value) => value.price + sum, 0)
            }
        case CLEAN_CART:
            return {
                addedPizzas: {},
                totalPrice: 0,
                totalCount: 0
            }
        case REMOVE_PIZZA_GROUP:
            const restItems = {
                ...state.addedPizzas
            }
            const groupPrice = restItems[action.payload].price
            const groupCount = restItems[action.payload].items.length
            delete restItems[action.payload]
            return {
                ...state,
                addedPizzas: restItems,
                totalPrice: state.totalPrice - groupPrice,
                totalCount: state.totalCount - groupCount
            }
        case ADD_GROUP_PIZZA_ITEM:
            const groupPizzaItemsPlus = [...state.addedPizzas[action.payload].items, state.addedPizzas[action.payload].items[0]]

            return {
                ...state,
                addedPizzas: {
                    ...state.addedPizzas,
                    [action.payload]: {
                        ...state.addedPizzas[action.payload],
                        items: groupPizzaItemsPlus,
                        price: groupPizzaItemsPlus.reduce((sum, value) => value.price + sum, 0)
                    }
                },
                // totalCount: ?
                // totalPrice: ?
            }
        case REMOVE_GROUP_PIZZA_ITEM:
            const groupPizzaItemsMinus = state.addedPizzas[action.payload].items.length === 1 ? state.addedPizzas[action.payload].items : [...state.addedPizzas[action.payload].items.slice(1)]
            return {
                ...state,
                addedPizzas: {
                    ...state.addedPizzas,
                    [action.payload]: {
                        ...state.addedPizzas[action.payload],
                        items: groupPizzaItemsMinus,
                        price: groupPizzaItemsMinus.reduce((sum, value) => value.price + sum, 0)
                    }
                },
                // totalCount: ?
                // totalPrice: ?
            }

        default: return state

    }
}

export const addPizza = (pizzaObj) => {
    return {
        type: ADD_PIZZA,
        payload: pizzaObj
    }
}
export const cleanCart = () => ({type: CLEAN_CART})
export const removePizzaGroup = (id) => ({type: REMOVE_PIZZA_GROUP, payload: id})
export const addGroupPizzaItem = (id) => {
    return {type: ADD_GROUP_PIZZA_ITEM, payload: id}
}
export const removeGroupPizzaItem = (id) => ({type: REMOVE_GROUP_PIZZA_ITEM, payload: id})

export default cartReducer