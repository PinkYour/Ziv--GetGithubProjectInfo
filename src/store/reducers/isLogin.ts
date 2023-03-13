export interface isLogin {
    id: number,
    name: string
}
interface IState {
    isLogin: isLogin
}
const initAdminState: IState = {
    isLogin: {
        id: 0,
        name: 'admin'
    }
}
export enum IAdminActionTypes{
    INIT,
    CHANGE,
}    
const isLogin = (state: IState = initAdminState, action: {type:IAdminActionTypes,payload:any}) => {
    switch (action.type) {
        case IAdminActionTypes.INIT:
            return state
    
        case IAdminActionTypes.CHANGE:
            return {...state,...action.payload}
    
        default:
           return state
    }
}
export default isLogin