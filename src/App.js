import logo from './logo.svg'; 
import {BrowserRouter as Router,Route,Routes,Link,NavLink} from 'react-router-dom';
import './App.css';
import Employee from './class-comp/employee';
import Student from './functional component/student';
import StudentDetails from './functional component/studentdetails';
import UserDetails from './functional component/hook_example';
import GetUserList from './axios component/axios';
import Styling from './styling/styling';
import ComponentHOC from './higher-order-component/componentHOC';
import FormValidation from './formvalidation/formvalidation';
import Home from './react_router/home';
import About from './react_router/about';
import ContactUs from './react_router/contactus';
import Dashboard from './react_router/dashboard';
import Eventhandler from './eventhandler/eventhandler';
import Purecomponent from './pure_and_memo/purecomponent';
import Binding from './bind_event_handler/binding';
import ComponentOne from './contextapi/ComponentOne';
import Main from './mainpage/main';



function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <Employee></Employee>
      </header> */
      <>
      {/* <UserDetails></UserDetails> */}
      {/* <GetUserList></GetUserList> */}

      {/* <Employee></Employee> */}
      {/* <Student name='gokul'age='25'></Student> */}
      {/* <StudentDetails></StudentDetails> */}
      {/* <Styling></Styling> */}
      {/* <ComponentHOC></ComponentHOC> */}
      {/* <FormValidation></FormValidation> */}
     
      {/* <Router>
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
      </Router> */}
      {/* <Eventhandler></Eventhandler> */}
      {/* <Purecomponent></Purecomponent> */}
      {/* <Binding></Binding> */}
       {/* <ComponentOne></ComponentOne> */}
       <h1>ReactJs</h1>
       <Main></Main>
      </>
      }
    </div>
  );
}

export default App;
