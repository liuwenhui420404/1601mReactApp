import React, { Component } from 'react';


class Alert extends Component {
    constructor(props){
        super(props)
    }
clickone(e){
//    const el=document.getElementById('confirmone')
//    const wrap=document.getElementById('content')
//    console.log(wrap)
//    el.style.display="block"
//    wrap.style.background="rgba(0,0,0,0.3)"
}
clickto(){
    // const el=document.getElementById('confirmone') 
    // el.style.display="none"
    // const wrap=document.getElementById('content')
    // wrap.style.background="#fff"
}
  render() {
    return(
        <ul>
            <li>
             {/* <p onClick={this.clickone.bind(this)}>打开confirm提示框</p> */}
             <div className="alertone" id="confirmone">
                <h2>提示</h2>
                  确认执行此操作？
                {/* <span onClick={this.clickto.bind(this)}>确定</span> */}
                </div>
            </li>
            </ul>
       
        
    );
  }
}

export default Alert;
