import React, { Component } from 'react';


class Alert extends Component {
    constructor(props){
        super(props)
    }
clickone(e){
   const el=document.getElementById('promptone')
   const wrap=document.getElementById('content')
   console.log(wrap)
   el.style.display="block"
   wrap.style.background="rgba(0,0,0,0.3)"
}
clickto(){
    const el=document.getElementById('promptone') 
    el.style.display="none"
    const wrap=document.getElementById('content')
    wrap.style.background="#fff"
}
  render() {
    return(
        <ul>
            <li>
             <p onClick={this.clickone.bind(this)}>打开prompt提示框</p>
             <div className="alertone" id="promptone">
                <h2>请输入姓名</h2>
                 <input type="text" />  
                <span onClick={this.clickto.bind(this)}>确定</span>
                </div>
            </li>
            </ul>
    );
  }
}

export default Alert;
