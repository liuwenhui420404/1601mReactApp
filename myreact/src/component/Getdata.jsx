import React, { Component } from 'react'
import axios from 'axios'
import Hocdata from '../component/Hocgetdata/Hocgetdata'

class Hocgetdata extends Component {
    constructor(props){
        super(props)
        this.state={
            data:null
        }
        axios.get('mock/data.json').then(res=>{
           this.setState({
               data:res.data
           })
        })
    }
  render() {
    return 
      <div className="App">
      <h2>hoc获取数据</h2>
      <p>{this.state.data.obj.name}</p>
      </div>
  }
}

export default Hocdata(Hocgetdata,{type:"get",url:"mock/data.json"});
