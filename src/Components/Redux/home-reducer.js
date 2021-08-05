const VISIBLE_DROPDOWN = 'VISIBLE_DROPDOWN'
const SET_ACTIVE_CATEGORY = 'SET_ACTIVE_CATEGORY'
const SET_PIZZA_ITEMS = 'SET_PIZZA_ITEMS'
export const GET_PIZZA_ITEMS = 'GET_PIZZA_ITEMS'

const initialState = {
    visibleDropDown: false,
    categoryItems: ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'],
    activeCategory: null,
    pizzaItems: null,
    sortBy: null
}

const homeReducer = (state = initialState, action) => {

    switch (action.type) {
        case VISIBLE_DROPDOWN:
            return {...state, visibleDropDown: action.payload}
        case SET_ACTIVE_CATEGORY:
            return {...state, activeCategory: action.payload}
        case SET_PIZZA_ITEMS:
            return {...state, pizzaItems: action.payload}

        default:
            return state
    }
}

export const setVisibleDropDown = (toggle) => ({type: VISIBLE_DROPDOWN, payload: toggle})
export const setActiveCategory = (categoryName) => {

    return {type: SET_ACTIVE_CATEGORY, payload: categoryName}
}
export const setPizzaItems = (pizzas) => {

    return {type: SET_PIZZA_ITEMS, payload: pizzas}
}
export const getPizzaItems = () => {
    return {type: GET_PIZZA_ITEMS}
}

export default homeReducer
