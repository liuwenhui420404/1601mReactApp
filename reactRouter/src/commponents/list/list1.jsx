import React, { Component } from 'react'
import {
    Link
 } from "react-router-dom" 

export default class List1 extends Component {
    render() {
        return (
            <div className="sections List1">
                <ul>
                    <li><Link to="/list1/recommend">推荐</Link></li>
                    <li><Link to="/list1/hot">热门</Link></li>
                    <li><Link to="/list1/newest">最新</Link></li>
                    <li><Link to="/list1/screen">筛选</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}
