import React, { Component } from 'react'
import {
    Route
} from "react-router-dom"
import List from './list'
import Allcount from './allContent'
class Shopping extends Component {
    render() {
        return (
            <div className="wrap2">
               <List/> 
               <Allcount/> 
            </div>
        )
    }
}
export default ()=><Route path="/shopping"component={Shopping} />
