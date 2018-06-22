import React, { Component } from 'react'
import {
    Route
} from 'react-router-dom'
import Store from "../../store/index"
class Child2 extends Component {
    constructor(props) {
        super(props)
        console.log(Store.getState())
        this.state={
            num:Store.getState().num
        }
    }
    
    render() {
        return (
            <div>
                <h2>Child2子组件</h2>
                <div>
                    数据为：{this.state.num}
                </div>
            </div>
        )
    }
}

export default ()=><Route path="/Msg/Child2" component={Child2}></Route>
