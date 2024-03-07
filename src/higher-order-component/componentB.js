import react from 'react';
import HocWithColor from './hocwithcolor';
const ComponentB=()=>{
    return(
        <div>
            this is higher order component of componentB
        </div>
    );
}
export default HocWithColor(ComponentB,'orange');