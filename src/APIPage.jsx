import React, { useEffect, useState } from "react";
import axios from "axios"

function APIPage() {
    const [users, setUsers]=useState([])

    useEffect(()=>{
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response=>{
            setUsers(response.data.items)
            console.log(response)
        })
        
        // .catch(error=>{console.error(error)})
    },[])

  return (
    <div className="container" >
        {users.map(user => (
        <div className="userBlock" key={user.id}>{user.name}</div>
      ))}
    </div>

  );
}

export default APIPage;