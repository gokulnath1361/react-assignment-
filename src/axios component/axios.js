import react, { useEffect, useState } from "react";
import axios from "axios";
const table={
    marginLeft:250,
}
function GetUserList(){
    const UserList="https://swapi.dev/api/people/";
    // console.log(UserList);
    const [userDetails,setuserDetails]=useState([]);
    useEffect(()=>
    {
        fetchData();

    });
    async function fetchData(){
        try{
             const response=await axios.get(UserList);
             console.log(response.data.results);
             setuserDetails(response.data.results);
        }
        catch(e){
              console.log(`error:$(e)`);
        }
    }    
    return(
        <>
        <h1>userdetails</h1>
               {/* <>
                 <h1>name:{user.name}</h1>
                 <h1>age:{user.height}</h1>
                 <hr/>
                 </> */}
                 <h3>Axios is a popular JavaScript library used for making HTTP requests in web applications, including React applications. It simplifies the process of sending HTTP requests and handling responses, making it a convenient choice for interacting with APIs and fetching data in React applications.</h3>
                <table border={1} cellPadding={5} cellSpacing={1} style={table}>
                    <thead>
                        <tr>
                        <th>name</th>
                        <th>height</th>
                        </tr>
                    </thead>
                    <tbody>{
                    userDetails.map(user=>
                        <tr>
                            <td>{user.name}</td>
                            <td>{user.height}</td>
                        </tr>
                    )}
                    </tbody> 

                </table>
        </>
    )
}
export default GetUserList;