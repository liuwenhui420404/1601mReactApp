import React,{Component} from "react"
import ReactDOM from "react-dom"
import {Provider} from "react-redux"
import store from "./redux"
import Router from "./router"
import 'antd-mobile/dist/antd-mobile.css'
ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>,
    document.getElementById('root')
);