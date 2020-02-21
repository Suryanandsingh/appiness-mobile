import { LOGIN_SUCCESSFUL, AUTO_LOGOUT } from "../type";


const initialState = {
    isAuthenticated: false,
    userDatails:[]
}

export default function(state=initialState, action){
    switch(action.type){
        case LOGIN_SUCCESSFUL:
            return{
                ...state,
                userDatails: action.payload,
                isAuthenticated: true
            }
        case AUTO_LOGOUT:
            return{
                ...state,
                isAuthenticated: action.payload
            }
        default:
            return state;
    }
}