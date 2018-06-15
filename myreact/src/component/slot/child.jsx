import React, { Component } from 'react';
class Child extends Component {
  render() {
    return (
      <div className="child">
      <h1>子组件</h1>
      {this.props.one}
      {this.props.two}
      {this.props.children}
      </div>
    );
  }
}

export default Child;
