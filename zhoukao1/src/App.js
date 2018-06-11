import React, { Component } from 'react';
import './static/css/style.css'
// import Prompt from './component/prompt.jsx'
// import Confirm from './component/confirm.jsx'
 import Alert from './component/alert.jsx'
class App extends Component {
  render() {
    return (
      <div className="wrap">
        <div className="content" id="content">
            <Alert/>
            {/* <Confirm/>
            <Prompt/> */}
        </div>
      </div>
    );
  }
}

export default App;
