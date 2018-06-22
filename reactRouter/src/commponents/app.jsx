import React, { Component } from 'react'
import '../static/style.css'

import Heads from '../commponents/parent/heads'
// import Sections from '../commponents/parent/sections'
import Foots from '../commponents/parent/foots'

class App extends Component {
    constructor(props) {
        super(props)
        
    }
    render() {
        return  <div className="wrap">
        <Heads/>
        {/* <Sections>
        </Sections> */}
        {this.props.children} 
        <Foots/>
            </div>  
    }
}
export default App
