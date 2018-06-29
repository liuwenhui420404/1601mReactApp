import {
    createStore
} from 'redux'

let Initstate={
    name:"",
    num:1,
    shopping:[]
}
let reducer=(state=Initstate,action)=>{
    let {type,text}=action
    switch (type){
        case 'ACTION_TYPE':{
            let obj={...state,...{num:text}}
         return obj
        }
         case 'CHANGESHOPLIST':{
            let obj={...state,...{shopping:text}}
            console.log(obj)
            return obj
         }
         case 'CHANGESHOPITEM':{
             let arr=state.shopping.map((i)=>{
                if(i.id==text.id){
                    return text
                }else{
                    return i
                }
             })
            let obj={...state,...{shopping:arr}}
            // console.log(obj)
            return obj
         }
         case 'CHANGESHOPITEMSTATE':{
            let arr=state.shopping.map((i)=>{
               i.state=text
               return i
            })
           let obj={...state,...{shopping:arr}}
        //    console.log(obj)
           return obj
        }
        case 'CHANGESHOPITEMNUM':{

            let arr=state.shopping.map((i)=>{
                if(i.id==text.id){
                    return text
                }else{
                    return i
                }
             })
           let obj={...state,...{shopping:arr}}
        //    console.log(obj)
           return obj
        }
         
        default:
        return state
    }
}
export let actions={
    addNum(item){
        return{
            type:"ADDNUM",
            text:item
        }
    },
    changeShopList(item){
        return{
            type:"CHANGESHOPLIST",
            text:item
        }
    },
    changeShopItem(item){
        return{
            type:"CHANGESHOPITEM",
            text:item
        }
    },
    changeShopItemState(item){
        return{
            type:"CHANGESHOPITEMSTATE",
            text:item
        }
    },
    changeShopItemNum(item){
        return{
            type:"CHANGESHOPITEMNUM",
            text:item
        }
    }
}

export default  createStore(reducer)
