const ADD_PIZZA = 'ADD_PIZZA'

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

        default: return state

    }
}

export const addPizza = (pizzaObj) => {
    return {
        type: ADD_PIZZA,
        payload: pizzaObj
    }
}

export default cartReducer