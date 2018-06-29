import React, { Component } from 'react'
import Heads from './parent/Heads'
import Sections from './parent/sections'

class App extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div className="wrap">
            <Heads/>
            <Sections/>
            {/* {this.props.children} */}
        </div>
    }
}

export default App