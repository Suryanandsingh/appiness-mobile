import { MAIL, PASSWORD } from '../../Constant'
import { USER1 } from '../Data/userDetails';
import { LOGIN_SUCCESSFUL, AUTO_LOGOUT } from '../type';


export function login(username, password){
    return dispatch => {
        if(!MAIL.test(username)){
            alert('Invalid email')
        }else if(password.length<5){
            alert('Password should contain at least 5 characters.')
        }else{
            if(username === USER1.username && password === USER1.password){
                dispatch({
                    type: LOGIN_SUCCESSFUL,
                    payload: USER1
                })
            }else{
                alert('Wrong credentials!')
            }
        }
    }
}

export function autoLogout(){
    return dispatch => {
        dispatch({
            type: AUTO_LOGOUT,
            payload: false
        })
    }
}