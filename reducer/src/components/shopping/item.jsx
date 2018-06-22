import React, { Component } from 'react'
import Store,{actions} from '../../store/index'
export default class Item extends Component {
    constructor(props) {
        super(props)
        this.state={
            item:this.props.data
        }
    }
    changeHandle(){
        let obj={
            ...this.state.item,
            ...{state:!this.state.item.state}
        }
        this.setState({
            item:obj
        },()=>{
            console.log(this.state.item)
            Store.dispatch(actions.changeShopItem(this.state.item))
        })
    }
    changeNum(type){
        if(type=="+"){
            let obj={...this.state.item,...{num:this.state.item.num+1}}
            Store.dispatch(actions.changeShopItemNum(obj))
        }else{
            if(this.state.item.num>1){
                let obj={...this.state.item,...{num:this.state.item.num-1}}
            Store.dispatch(actions.changeShopItemNum(obj)) 
            }
            
        }
    }
    componentWillReceiveProps(props){
        this.setState({
            item:props.data
        })
    }
    render() {
        return (
            <div className="content">
                <div className="btn">
                    <input type="checkbox" onChange={this.changeHandle.bind(this)} checked={this.state.item.state}/>
                </div>
                <div className="right">
                        <dl>
                            <dt><img src={this.state.item.url} alt=""/></dt>
                            <dd>
                            <h3>{this.state.item.name}</h3>
                            <p>{this.state.item.cont}</p>
                            <p className="price">单价：{this.state.item.price}</p>
                            <p>
                                <button onClick={()=>{this.changeNum('-')}}>-</button>
                                <span>{this.state.item.num}</span>
                                <button onClick={()=>{this.changeNum('+')}}>+</button>

                            </p>
                            </dd>
                        </dl>
                </div>
            </div>
                
           
        )
    }
}
