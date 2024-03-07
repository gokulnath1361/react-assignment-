import {useState} from "react";
function UserDetails(){
    // const [user,setuser]=useState({
    //     username:"gokul",
    //     lastname:"kumar",
    //     age:'23',
    //     address:{
    //         vill:"parraipatti",
    //         dist:"vellore"
    //     }
    // })
    // function update(){
    //     setuser({
    //         username:"praba",
    //     lastname:"kumar",
    //     age:'25',
    //     address:{
    //         vill:"anaicut",
    //         dist:"chennai"
    //     }
    //     })
    // }
    const UserData=[
        {
            no: "1",
            username:"abc",
                lastname:"aa",
                age:'25',
                address:{
                    vill:"northstreet",
                    dist:"chennai"
                } 
        },
        {
            no:"2",
            username:"aaaaa",
                lastname:"bb",
                age:'23',
                address:{
                    vill:"southstreet",
                    dist:"chennai"
                } 
        },
        {
            no:"3",
            username:"abcde",
                lastname:"aa",
                age:'21',
                address:{
                    vill:"eaststreet",
                    dist:"chennai"
                } 
        },
        {
            no:"4",
            username:"asdf",
                lastname:"kkk",
                age:'25',
                address:{
                    vill:"northstreet",
                    dist:"chennai"
                } 
        },
    ]
    const [user,setuser]=useState(UserData)
    return(
        <>
        {/* <h1>username:{user[1].username}{user[1].lastname}</h1> */}
        {/* <h3>age:{user[].age}</h3> */}
        {/* <h2>address:{user.address.vill},{user.address.dist}</h2> */}
        {/* <button onClick={update}>click hear</button> */}
        <table border={2}>
            <thead>
                <td>sino</td>
                <td>name</td>
                <td>lastname</td>
                <td>age</td>
                <td>address</td>
            </thead>
            <tbody>
                {
                    user.map(details=>
                        <tr>
                        <td>{details.no}</td>
                        <td>{details.username}</td>
                        <td>{details.lastname}</td>
                        <td>{details.age}</td>
                        <td>{details.address.vill},{details.address.dist}</td>
                        </tr>
                        )
                }
            </tbody>
        </table>
        </>
    )
}
export default UserDetails;