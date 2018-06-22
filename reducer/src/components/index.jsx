import React, { Component } from 'react'
import {
    Route,
    Link
} from 'react-router-dom'
class Index extends Component {
    render() {
        return (
            <div>
                首页
                <Link to="/Msg">通讯</Link>
            </div>
        )
    }
} 
export default ()=><Route path="/index" component={Index}></Route>