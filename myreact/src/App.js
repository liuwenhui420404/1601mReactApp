import React, { Component } from 'react'
// import Slot from './component/slot/parent'
// import Hocgetdata from './component/Getdata'
import './static/style.css'
import {
  BrowserRouter,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import Index from './component/Routers/index.jsx'
import List1 from './component/Routers/list1.jsx'
import List2 from './component/Routers/list2.jsx'
import List3 from './component/Routers/list3.jsx'
class App extends Component {
  render() {
    return (
      <div className="App">
       {/* <Slot/> */}
       {/* <Hocgetdata/> */}
       <BrowserRouter> 
       <div className="wrap">
       <section>
       <Switch>
          <Route exact path="/" component={Index}></Route>
          <Route exact path="/list1" component={List1}></Route>
          <Route exact path="/list2" component={List2}></Route>
          <Route exact path="/list3" component={List3}></Route>
        </Switch>
       </section>
       <footer>
         <ul>
           <li><Link to="/">首页</Link></li>
           <li><Link to="/list1">我的</Link></li>
           <li><Link to="/list2">首页</Link></li>
           <li><Link to="/list3">我的</Link></li>
         </ul>
       </footer>
       </div>
       </BrowserRouter>

      </div>
    );
  }
}

export default App;
