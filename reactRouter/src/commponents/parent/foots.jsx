import React, { Component } from 'react'
import {
   Link
} from "react-router-dom" 
 
export default class Foots extends Component {
    render() {
        return (
            <div className="foots">
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/list1">你的</Link></li>
                    <li><Link to="/list2">我的</Link></li>
                    <li><Link to="/list3">他的</Link></li>
                </ul>
            </div>
        )
    }
}
