const VISIBLE_DROPDOWN = 'VISIBLE_DROPDOWN'
const SET_ACTIVE_CATEGORY = 'SET_ACTIVE_CATEGORY'
const SET_PIZZA_ITEMS = 'SET_PIZZA_ITEMS'
export const GET_PIZZA_ITEMS = 'GET_PIZZA_ITEMS'
export const SET_SORT_TYPE = 'SET_SORT_TYPE'
export const IS_LOADING = 'IS_LOADING'

const initialState = {
    visibleDropDown: false,
    categoryItems: ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'],
    activeCategory: 'Все',
    pizzaItems: null,
    sortTypeItems: ['popular', 'price', 'name'],
    sortBy: 'popular',
    isLoading: false
}

const homeReducer = (state = initialState, action) => {

    switch (action.type) {
        case VISIBLE_DROPDOWN:
            return {...state, visibleDropDown: action.payload}
        case SET_ACTIVE_CATEGORY:
            return {...state, activeCategory: action.payload}
        case SET_PIZZA_ITEMS:
            return {...state, pizzaItems: action.payload}
        case IS_LOADING:
            return {...state, isLoading: action.payload}
        case SET_SORT_TYPE:
            return {...state, sortBy: action.payload}

        default:
            return state
    }
}

export const setVisibleDropDown = (toggle) => {

    return {type: VISIBLE_DROPDOWN, payload: toggle}
}
export const setActiveCategory = (categoryName) => ({type: SET_ACTIVE_CATEGORY, payload: categoryName})
export const setActiveSortType = (sortType) => ({type: SET_SORT_TYPE, payload: sortType})
export const setPizzaItems = (pizzas) => ({type: SET_PIZZA_ITEMS, payload: pizzas})
export const showLoader = (toggle) => ({type: IS_LOADING, payload: toggle})

//to saga:
export const getPizzaItems = (activeCategory, sortBy) => ({type: GET_PIZZA_ITEMS, payload: {activeCategory, sortBy}})

export default homeReducer
