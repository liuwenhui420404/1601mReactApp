import React, { Component } from 'react'
import {
    Route
} from 'react-router-dom'

import Store, { actions } from '../../store/index'
class Child1 extends Component {
    constructor(props) {
        super(props)
        this.state={
            name:"张三",
            num:1
        }
        console.log(Store)
        Store.dispatch(actions.addNum(this.state.num))
    }
    render() {
        return (
            <div>
                <h2>Child1子组件</h2>
            </div>
        )
    }
}

export default ()=><Route path="/Msg/Child1" component={Child1}></Route>
