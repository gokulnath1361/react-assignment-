import React from 'react'
import {BrowserRouter as Router,Route,Routes,Link,NavLink} from 'react-router-dom';
import Home from './home';
import About from './about';
import ContactUs from './contactus';
import Dashboard from './dashboard';
function ReactRouter() {
  return (
    <div>
        <h3>React Router is a popular routing library for React applications. It allows you to handle routing and navigation within your single-page React applications. With React Router, you can create complex navigation structures, handle different views or pages, and maintain a clean and organized URL structure.</h3>
      <nav>
        <ul>
          <li>
            <NavLink className='active-class' to={'/home'}>homepage</NavLink>
          </li>
          <li>
            <NavLink to={'/about'}>aboutus</NavLink>
          </li>
          <li>
            <NavLink to={'/contactus'}>contectus</NavLink>
          </li>
          <li>
            <NavLink to={'/dashboard'}>dashboard</NavLink>
          </li>

        </ul>
      </nav>
        <Routes>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contactus' element={<ContactUs/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
        </Routes>
    </div>
  )
}

export default ReactRouter
