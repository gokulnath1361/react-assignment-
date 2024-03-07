import react from 'react';
import HocWithColor from './hocwithcolor';
const ComponentC=()=>{
    return(
        <div>
            this is higher order component of componentC
        </div>
    );
}
export default HocWithColor(ComponentC,'brown');