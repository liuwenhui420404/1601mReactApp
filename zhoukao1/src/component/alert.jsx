import React, { Component } from 'react';
class Alert extends Component {
    // constructor(props){
    //     super(props)
    // }
clickone(e){
   const el=document.getElementById('alertone')
   const wrap=document.getElementById('content')
   console.log(wrap)
   el.style.display="block"
   wrap.style.background="rgba(0,0,0,0.3)"
}
clickto(){
    const el=document.getElementById('alertone') 
    el.style.display="none"
    const wrap=document.getElementById('content')
    wrap.style.background="#fff"
}
  render() {
    return(
        <ul>
            <li>
             <p onClick={this.clickone.bind(this)}>打开alert提示框</p>
             <div className="alertone" id="alertone">
                <h2>提示</h2>
                  操作成功
                <span onClick={this.clickto.bind(this)}>确定</span>
                </div>
            </li>
            </ul>
    );
  }
}

export default Alert;
