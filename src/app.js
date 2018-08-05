import React from 'react';
import './app.css';
import img from '../public/assets/download.png'
import Welcome from './welcome.js';



class App extends React.Component{
    render(){
        return(
            <div className="app">
             <h1>Hello React</h1>
               <img src={img} className="img"/>
               <Welcome name="Eric" />
            </div>
        )
    }
}
export default App;