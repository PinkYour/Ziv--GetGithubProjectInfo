export interface IAdmin {
    id: number,
    name: string
}
interface IState {
    admin: IAdmin
}
const initAdminState: IState = {
    admin: {
        id: 0,
        name: 'admin'
    }
}
export enum IAdminActionTypes{
    INIT,
    CHANGE,
}    
const admin = (state: IState = initAdminState, action: {type:IAdminActionTypes,payload:any}) => {
    switch (action.type) {
        case IAdminActionTypes.INIT:
            return state
    
        case IAdminActionTypes.CHANGE:
            return {...state,...action.payload}
    
        default:
           return state
    }
}
export default admin