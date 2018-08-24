import React from 'react';
import './app.css';
import img from '../public/assets/download.png'

import store from './store/';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';


// import route Components here
import Blog from './blog';
import Welcome from './welcome.js';



class App extends React.Component{



    render(){
      console.log('I was triggered during render ', this);
        return(

        <Provider store={store}>
          <Router>
            <div className="app">
              <div className="container">
              <div className="header">
                <p className="link"><Link to="/">Home</Link></p>
                <p className="link"><Link to="/blog">Blog</Link></p>
                <p className="link"><Link to="/welcome">Welcome</Link></p>
              </div>
              <hr/>


               <h1>Welcome!</h1>
               <h2>This is my React blog</h2>
                 <img src={img} className="img"/>
                 <Route path="/blog" component={Blog} />
                 <Route path="/welcome" component={Welcome} />
              </div>
            </div>
          </Router>
        </Provider>  )

    }
}



export default App;