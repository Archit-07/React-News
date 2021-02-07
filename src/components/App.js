import React, { Component } from 'react';
import './App.css';
import News from './News/News'
import SideNews from './News/SideNews'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       news1: {
         type: 'top-headlines',
         query: 'sources=bbc-news'
       },
       news2:{
         type: 'top-headlines',
         query: 'country=de&category=business'
       },
       news3: {
         type: 'sources',
         query: 'language=en'
       }
    };
  }
  

  render() {
    return(
      <div className="container-fliuid">
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper indigo lighten-4">
              <a href="/" className="bran-logo" style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>My Feed!!!</a>
            </div>
          </nav>
        </div>
        <div className="row">
          <div className="col s8">
            <News dush={this.state.news1}/>
            <News dush={this.state.news2}/>
          </div>
          <div className="col s4">
            <SideNews sinews={this.state.news3}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
