import { actionType } from "./actionType"

export const actionData = (data) =>{

    return{
        type : actionType.SET_DATA,
        payload : data
    }
}
export const selectedData = (data) =>{

    return{
        type : actionType.SELECT_DATA,
        payload : data
    }
}
export const removeSelectedData = () =>{

    return{
        type : actionType.REMOVE_SELECTED_DATA,
    }
}



