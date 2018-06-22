import React, { Component } from 'react'
import {
    Route,
    Link
} from 'react-router-dom'
class Msg extends Component {
    render() {
        return (
            <div>
                <h2>mag父组件</h2>
                <ul>
                    <li><Link to="/Msg/Child1">Child1</Link></li>
                    <li><Link to="/Msg/Child2">Child2</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}
import Child1 from './child1'
import Child2 from './child2'
export default ()=><Route path="/Msg" render={()=>{
    return <Msg>
                <Child1/>
                <Child2/>
           </Msg>
}}/>
