import React,{Component} from 'react'
import './App.css';
import About from './Pages/about';
import Home from './Pages/home'
import AppRouter from './config/router';

class App extends Component {
  render(){
    return(
      <div>
        <AppRouter />
      </div>

    )
  }
}
export default App;
