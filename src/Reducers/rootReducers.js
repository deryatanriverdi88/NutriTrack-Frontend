const initialState = {
    current_user: {}
}



export default function rootReducer(state= initialState, action){
    switch (action.type) {
        case "SET_USER":
            return {
                ...state, 
                current_user: action.payload
            }
    
        default:
             return {
                 state
             };
    }
}