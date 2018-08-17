import React from 'react';
import './app.css';
import img from '../public/assets/download.png'
import Welcome from './welcome.js';
import store from './store/';



class App extends React.Component{

    /*constructor(props) {
      super(props);

      this.state = {
        name: 'Eric'
      };


    }

    newName() {
      console.log('I am changning the name ', this);
      if(this.state.name === 'Eric') {
        this.setState({
          name: 'Ricky'
        });
      } else {
        this.setState({
          name: 'Eric'
        });
      }
    }*/

    render(){
      console.log('I was triggered during render ', this);
        return(
            <div className="app">
             <h1>Hello Reacsadt</h1>
               <img src={img} className="img"/>
               <Welcome store={store} />
               <div>
               <button>Swap Name</button>
               </div>
            </div>)

    }
}



export default App;