
export default function userReducer(state= [], {type, payload}){
    
    switch (type) {
        case "GET_FOODS":
            // debugger
            return payload
       
        default:
            return state
           
    }
}