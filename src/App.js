//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'
import Resume from './components/Resume'

// not sure if Footer is needed here?

function App() {
  //const location = useLocation
  return (
    <Router>
    <div className='pages'>
      <Header></Header>
      {/* <BrowserRouter basename="/Home"> */}
        <Routes>
          {/* <Switch location={location} key={location.pathname}> */}
          <Route path='/jenTruong/' element={<Home/>} />
          <Route path='/jenTruong/Home' element={<Home/>} />
          <Route path='/jenTruong/About' element={<About/>} />
          <Route path='/jenTruong/Work' element={<Work/>} />
          <Route path='/jenTruong/Contact' element={<Contact/>} />
          <Route path='/jenTruong/Resume' element={<Resume/>} />
          {/* </Switch> */}
        </Routes>
      {/* </BrowserRouter> */}
      <Footer></Footer>
    </div>
    </Router>
  );
}

export default App;
