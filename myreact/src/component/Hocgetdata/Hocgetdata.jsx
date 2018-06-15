import React, { Component } from 'react'
//import axios from 'axios'

export default function(Com,config){
    return class extends Component{
        constructor(props){
            super(props)
            this.state={
                Com:null
            }
        }
        componentWillMount(){
            this.ajax(config).then((data)=>{
                this.setState({
                    Com:Com
                })
            })
        }
        ajax({type,url,data}){
            return new Promise((resolve,reject)=>{
                var xhr=new XMLHttpRequest()
                if(type === 'get'){
                    xhr.open(type,url)
                    xhr.send()
                }else{
                    xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded')
                    xhr.open(type,url)
                    xhr.send(data)
                }
                xhr.onreadystatechange=function(){
                    if(xhr.readyState===4){
                        if(xhr.status===200){
                            resolve(xhr.responseText)
                        }else{
                            reject(xhr.status)
                        }
                    }else{
                        reject(xhr.readyState)
                    }
                }
            })
        }
        render(){
            let el=this.state.com?<Com/>:null
            return el
        }
    }
}