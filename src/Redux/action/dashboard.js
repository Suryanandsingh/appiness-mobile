import { EMPLOYEEE_DETAILS } from "../type"
import { EMPLOPYEE_DETAILS_DATA } from '../Data/employeesDetails';



export function getEmployeeDeatils(){
    return dispatch=>{
        dispatch({
            type: EMPLOYEEE_DETAILS,
            payload: EMPLOPYEE_DETAILS_DATA.user
        })
    }
}