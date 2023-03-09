export interface IUser {
    id: number,
    name: string
}
interface IState {
    user: IUser
}
const initUserState = {
    user:{
        id: 0,
        name: 'user'
    }
}
export enum IUserActionTypes{
    INIT,
    CHANGE
}
const user = (state: IState = initUserState, action: {type:IUserActionTypes,payload:any}) => {
    switch (action.type) {
        case IUserActionTypes.INIT:
            return state
    
        case IUserActionTypes.CHANGE:
            return {...state,...action.payload}
    
        default:
           return state
    }
}
export default user;