export type UpNameState ={
    upName:{
        name:string
    }
}
const initState={
    upName:{
        name:''
    }
    
}

export enum UpNameActionType {
    INIT,
    UPNAME,
}

const upName=(state:UpNameState=initState,action:{type:UpNameActionType,payload:any})=>{
    switch (action.type) {
        case UpNameActionType.UPNAME:
            // console.log(action.payload);
            return {...action.payload}
        case UpNameActionType.INIT:
            // console.log(state);
            return state
    
        default:
           return state
    }
}
export default upName;