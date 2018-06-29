import React, { Component } from 'react'
import { Carousel } from 'antd-mobile';
import {connect} from "react-redux"
import {actions,AJAXDATA} from '../../redux/index'
class Sections extends Component {
    constructor(props) {
        super(props)
         this.state={
            data:null
        }
        // console.log(props)
        this.props.dispatch(actions[AJAXDATA]())
        // console.log(this.props)
    }
    render() {
        let el = null;
        let ban = null;
        if(this.state.data){
          el=  this.state.data.map((i,ind)=>{
               return  <li  key={ind}>
                            <dl>
                                <dt><img src={i.img} alt=""/></dt>
                                <dd>{i.name}</dd>
                            </dl> 
                   </li>
            })
           ban=this.state.data.map((item,ind)=>{
               return <div key={ind}><img src={item.url} alt=""/></div>
           })
        }
        return (
            <div className="sections">
                <div className="banner">
                    <Carousel autoplay>
                        {/* <div><img src="https://m.360buyimg.com/mobilecms/s640x312_jfs/t20764/291/922066312/167509/db5ed0ba/5b1bf1baN5c9ac27d.jpg!cr_1125x549_0_72!q70.jpg.dpg" alt=""/></div>
                        <div><h3>2</h3></div>
                        <div><h3>3</h3></div>
                        <div><h3>4</h3></div> */}
                        {ban}
                    </Carousel>
                </div>
                <div className="content">
                    <h2>爱生活</h2>
                    <ul>
                         {/* <dl>
                                <dt><img src="https://m.360buyimg.com/n1/s110x110_jfs/t15787/353/109633918/16701/5a8390ef/5a27ae6dNc530b5bb.jpg!q70.jpg.dpg" alt=""/></dt>
                                <dd>iPhoneX</dd>
                            </dl>
                            <dl>
                                <dt><img src="https://m.360buyimg.com/n1/s110x110_jfs/t15787/353/109633918/16701/5a8390ef/5a27ae6dNc530b5bb.jpg!q70.jpg.dpg" alt=""/></dt>
                                <dd>iPhoneX</dd>
                            </dl>
                            <dl>
                                <dt><img src="https://m.360buyimg.com/n1/s110x110_jfs/t15787/353/109633918/16701/5a8390ef/5a27ae6dNc530b5bb.jpg!q70.jpg.dpg" alt=""/></dt>
                                <dd>iPhoneX</dd>
                            </dl> */}
                            {el}
                    </ul>
                </div>
            </div>
        )
    }
    componentWillReceiveProps(props){
        this.setState({
            data:props.data
        })
        console.log(props.data);
      }
}
export default connect((state)=>state)(Sections)
