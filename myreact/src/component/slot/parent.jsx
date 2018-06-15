import React, { Component } from 'react';
import Child from './child'
class Parent extends Component {
    // constructor(props){
    //     super(props)
    //     this.state={

    //     }
    // }
  render() {
      var one=<p>第一个标签</p>
      var two=<p>第二个标签</p>
    return (
      <div className="wrap">
      <h1>父组件</h1>
      <Child one={one} two={two}>
          <p>父组件定义</p>
       </Child>
      </div>
    );
  }
}

export default Parent;
