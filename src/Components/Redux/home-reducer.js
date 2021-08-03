const VISIBLE_DROPDOWN = 'VISIBLE_DROPDOWN'

const initialState = {
    visibleDropDown: false
}

const homeReducer = (state = initialState, action) => {

    switch (action.type) {
        case VISIBLE_DROPDOWN:
            return {...state, visibleDropDown: action.payload}

        default: return state
    }
}

export const setVisibleDropDown = (toggle) => {
    //debugger
    console.log('toggle: ', toggle)
    return {type: VISIBLE_DROPDOWN, payload: toggle}
}


export default homeReducer
