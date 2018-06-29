import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { hellow } from './test.js';
import './home.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            a: 2,
        }
    }
    render() {
        hellow();
        return (
            <div className="hello-world">hello woelds </div> 
        );
    }
}
ReactDom.render(<App />, document.getElementById("root"));





// if (process.env.NODE_ENV === 'development') {
//     if (module.hot) {
//         module.hot.accept(function() {
//             console.log('模块内容变更');
//             ReactDom.render(<App />, document.getElementById("root"));
//         })
//     }
// }

