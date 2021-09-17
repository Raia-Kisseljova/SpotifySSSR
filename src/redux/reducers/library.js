import { SET_FAVOURITE, initialState  } from "./index";

const libraryReducer = (state = initialState.library, action) => {
    switch (action.type) {
        case SET_FAVOURITE: 
        return {
            ...state,
            favourites: [...state.favourites, action.payload],
        }
        default:
            return state;
    }
}

export default libraryReducer