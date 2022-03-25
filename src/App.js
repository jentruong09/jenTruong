//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
//import { Route, Switch, useLocation } from 'react-router'
// import Home from './components/Home'
// import About from './components/About'
// import Work from './components/Work'
// import Contact from './components/Contact'
// import Resume from './components/Resume'

// not sure if Footer is needed here?

function App() {
  //const location = useLocation
  return (
    <div className='page'>
      <div> 
        <Header></Header>
      </div>
      {/* <Switch location={location} key={location.pathname}>
        <Route exact path='/#Home' component={Home}/>
        <Route exact path='/#About' component={About}/>
        <Route exact path='/#Work' component={Work}/>
        <Route exact path='/#Contact' component={Contact}/>
        <Route exact path='/#Resume' component={Resume}/>
      </Switch> */}
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
