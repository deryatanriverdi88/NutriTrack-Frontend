
export default function userReducer(state= {}, {type, payload}){
    
    switch (type) {
        case "SET_USER":
            // debugger
            return payload 
        case 'CLEAR_USER':
             return {}
        default:
            return state
           
    }
}