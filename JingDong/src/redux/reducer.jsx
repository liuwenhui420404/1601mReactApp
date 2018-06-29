import {
    ADDNUM,
    AJAX
} from "./type"

let initState={
    num:0,
    data:null
}

export default (state=initState,actions)=>{
    let {type,text}=actions
    switch(type){
        case ADDNUM:{
            return {...state,...{num:state.num+1}}
        }
        case AJAX:{
            return {...state,...{num:state.num+1,data:text}}
        }
        default:{
            return state
        }
    }
}