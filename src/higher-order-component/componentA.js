import react from 'react';
import HocWithColor from './hocwithcolor';
const ComponentA=()=>{
    return(
        <div>
            this is higher order component of componentA
        </div>
    );
}
export default HocWithColor(ComponentA,'red');