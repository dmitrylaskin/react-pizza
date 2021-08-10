const ADD_PIZZA = 'ADD_PIZZA'

const initialState = {
    addedPizzas: {},
    totalPrice: 0,
    totalCount: 0
}
const cartReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_PIZZA:
            const newItem = {
                ...state.addedPizzas,
                [action.payload.id]: !state.addedPizzas[action.payload.id] ? [action.payload] : [...state.addedPizzas[action.payload.id], action.payload]
            }
            const addedItems = [].concat.apply([], Object.values(newItem))

            return {
                ...state,
                addedPizzas: newItem,
                totalCount: [].concat.apply([], Object.values(newItem)).length,
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