const cart = (state = {data: []}, action) => {
    switch(action.type){
        case "CART":
            return {
                    data: [
                        ...state.data,
                        action.payload,
                    ]
            }
        default:
            return state
    }
}

export default cart;