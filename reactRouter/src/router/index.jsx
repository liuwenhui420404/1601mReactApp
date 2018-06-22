import React from "react"
import {
    HashRouter as Router,
    Route,
    Switch
} from "react-router-dom"

import App from "../commponents/app.jsx"
import Index from "../commponents/index.jsx"  
import List1 from "../commponents/list/list1.jsx"
import List2 from "../commponents/list/list2.jsx"
import List3 from "../commponents/list/list3.jsx"
import Recommend from '../commponents/secondRouter/list1recommend.jsx'
import Hot from '../commponents/secondRouter/list1hot.jsx'
import Newest from '../commponents/secondRouter/list1newest.jsx'
import Screen from '../commponents/secondRouter/list1screen.jsx'


function RouterCom(){
    return  <Router>
        <App>
            <Switch>
                <Route exact path='/' component={Index}/>
                <Route  path='/list1' component={SecondRouter}/>
                <Route  path='/list2' component={List2}/>
                <Route  path='/list3' component={List3}/>
            </Switch>
        </App>   
             </Router>
}

// 创建pc的二级路由
var SecondRouter=()=>{
    return <List1>
                <Route path='/list1/recommend' component={Recommend}/>
                <Route path='/list1/hot' component={Hot}/>
                <Route path='/list1/newest' component={Newest}/>
                <Route path='/list1/screen' component={Screen}/>
            </List1>
}

export default RouterCom