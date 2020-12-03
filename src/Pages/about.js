import React,{Component} from 'react';
import {Link} from "react-router-dom";

class About extends Component {
  GoToHome = () =>{
    this.props.history.push('/')
    //console.log(this.props)
  }
    render(){
      return(
        <div>
          <h1>This is about Page</h1>
          <Link to="/"> go to home</Link>
          <button onClick={this.GoToHome}>go to home</button>
          

        </div>
      )
    }
  }
  export default About;
  