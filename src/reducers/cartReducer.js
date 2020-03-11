const cart = (state = {}, action) => {
    switch(action.type){
        case "CART":
            return {
                ...state,
                data: action.payload,
            }
        default:
            return state
    }
}

export default cart;