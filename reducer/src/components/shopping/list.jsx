import React, { Component } from 'react'
import axios from 'axios'
import Item from './item'
import Store,{actions} from '../../store/index'
class List extends Component {
    constructor(props) {
        super(props)
        this.state={
            data:Store.getState().shopping,
            allState:this.initAllTest()
        }
        Store.subscribe(()=>{
            this.subscribeHandle()
        })
    } 
    componentDidMount(){
        axios.get("/api/shopping").then(res=>{
            console.log(res.data)
            Store.dispatch(actions.changeShopList(res.data))
            
        })
    }
    subscribeHandle(){
        this.setState({
            data:Store.getState().shopping,
            allState:this.initAllTest()
        })
    }
    initAllTest(){
        let allState=Store.getState().shopping.every((i)=>{
            return i.state
        })
        return allState
    }
    checkdAll(){
        if(!this.state.allState){
            Store.dispatch(actions.changeShopItemState(true))
        }else{
            Store.dispatch(actions.changeShopItemState(false))
        }
    }
    render() {
        let el=this.state.data.map((i)=>{
            return <Item data={i} key={i.id}/>
        })
        return (
            <div className="sections">
                <h4>
                    全选：
                    <input type="checkbox" onChange={this.checkdAll.bind(this)} checked={this.state.allState}/>
                </h4>
                {el}
            </div>
        )
    }
}

export default List
