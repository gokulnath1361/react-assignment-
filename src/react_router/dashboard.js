import React from 'react';
import { useNavigate} from 'react-router-dom';

 function Dashboard() {
    let navigate=useNavigate();
    function gotohomepage(){
        navigate('/home');
    }
  return (
    <div>
      this is dashboard page
      <button onClick={gotohomepage}>goto home page</button>
    </div>
  )
}
export default Dashboard
