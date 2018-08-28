import { combineReducers } from 'redux'

import { HANDLE_CLICK } from './action'

const initialState = {

}

export default function handleClickApp(state = initialState, action) {
    console.log("This is the state " +  state)

    switch (action.type) {
        case HANDLE_CLICK:
        return  [
            ...state,
            {
                value: action.value,
                index: action.index
            }
        ],
        console.log("State " + state),
        console.log("--------------")
    default:
        return state
    }
}

