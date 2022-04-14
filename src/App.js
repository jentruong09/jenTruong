//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'
import Resume from './components/Resume'

// not sure if Footer is needed here?

function App() {
  //const location = useLocation
  return (
    <div className='pages'>
      <Header></Header>
      <BrowserRouter basename="/Home">
        <Routes>
          {/* <Switch location={location} key={location.pathname}> */}
          <Route path={process.env.PUBLIC_URL + '/'} element={<Home/>} />
          <Route path={process.env.PUBLIC_URL + '/Home'} element={<Home/>} />
          <Route path={process.env.PUBLIC_URL + '/About'} element={<About/>} />
          <Route path={process.env.PUBLIC_URL + '/Work'} element={<Work/>} />
          <Route path={process.env.PUBLIC_URL + '/Contact'} element={<Contact/>} />
          <Route path={process.env.PUBLIC_URL + '/Resume'} element={<Resume/>} />
          {/* </Switch> */}
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
