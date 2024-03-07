import React from 'react'
import {BrowserRouter as Router,Route,Routes,Link,NavLink} from 'react-router-dom';
import Eventhandler from '../eventhandler/eventhandler';
import FormValidation from '../formvalidation/formvalidation';
import Employee from '../class-comp/employee';
import GetUserList from '../axios component/axios';
import Binding from '../bind_event_handler/binding';
import Purecomponent from '../pure_and_memo/purecomponent';
import ReactRouter from '../react_router/reactrouter';
import HigherOrder from '../higher-order-component/HigherOrder';
import ComponentHOC from '../higher-order-component/componentHOC';

function Main() {
  return (
    <div>
      <Router>
      <nav>
        <ul>
          <li>
            <NavLink className='active-class' to={'/eventhandler'}>Eventhandler</NavLink>
          </li>
          <li>
            <NavLink to={'/formvalidation'}>Formvalidation</NavLink>
          </li>
          <li>
            <NavLink to={'/classcomponent'}>classcomponent</NavLink>
          </li>
          <li>
            <NavLink to={'/binding event handler'}>Binding event handler</NavLink>
          </li>
          <li>
            <NavLink to={'/axios'}>Axios</NavLink>
          </li>
          <li>
            <NavLink to={'/purecomponent'}>Purecomponent</NavLink>
          </li>
          <li>
            <NavLink to={'/ReactRouter'}>ReactRouter</NavLink>
          </li>
          <li>
            <NavLink to={'/HigherOrder'}>Higherordercomponent</NavLink>
          </li>

        </ul>
      </nav>
      <Routes>
          <Route path='/eventhandler' element={<Eventhandler/>}></Route>
          <Route path='/formvalidation' element={<FormValidation/>}></Route>
          <Route path='/classcomponent' element={<Employee/>}></Route>
          <Route path='/binding event handler' element={<Binding/>}></Route>
          <Route path='/axios' element={<GetUserList/>}></Route>
          <Route path='/purecomponent' element={<Purecomponent/>}></Route>
          <Route path='/ReactRouter' element={<ReactRouter/>}></Route>
          <Route path='/HigherOrder' element={<ComponentHOC/>}></Route>
        </Routes>
        
      </Router>
    </div>
  )
}

export default Main;
