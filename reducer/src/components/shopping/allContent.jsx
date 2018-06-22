import React, { Component } from 'react'
import Store from '../../store/index'

export default class AllCount extends Component {
    constructor(props) {
        super(props)
        this.state={
            allNum:0,
            allCount:0
        }
        Store.subscribe(()=>{
            this.computed()
        })
    }
    computed(){
        let num=0;
        let  count=0;
        Store.getState().shopping.forEach(i=>{
            if(i.state){
                num+=i.num
                count+=parseInt(i.num)*parseInt(i.price)
            }
        });
        this.setState({
            allNum:num,
            allCount:count
        })
    }
    render() {
        return (
            <div className="foots">
                <p>总数量：{this.state.allNum}</p>
                <p>总价：{this.state.allCount}</p>
            </div>
        )
    }
}
