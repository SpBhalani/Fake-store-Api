import { actionType } from "../action/actionType";

const initialState = {
    product: [],

}

export const setDataReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionType.SET_DATA:
            return { ...state, product: payload };
        default:
            return state;
    }
}
export const setSelectedDataReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case actionType.SELECT_DATA:
            return { payload };
        case actionType.REMOVE_SELECTED_DATA:
            return {  };
        default:
            return state;
    }
}
