import React from 'react';
import './app.css';
import img from '../public/assets/download.png'
import Welcome from './welcome.js';



class App extends React.Component{

    constructor(props) {
      super(props);

      this.state = {
        name: 'Eric'
      };


    }

    newName() {
      if(this.state.name === 'Eric') {
        this.setState({
          name: 'Ricky'
        });
      } else {
        this.setState({
          name: 'Eric'
        });
      }
    }

    render(){
        return(
            <div className="app">
             <h1>Hello React</h1>
               <img src={img} className="img"/>
               <Welcome name={this.state.name} />
               <div>
               <button onClick={this.newName.bind(this)}>Swap Name</button>
               </div>
            </div>)

    }
}
export default App;