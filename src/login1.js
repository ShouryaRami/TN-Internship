import React, { useState } from "react";
import './login.css'

function Login1( ){
    const[page,setPage]=useState(1)
    const handleOnClick = ()=> {
    setPage(page+1)}
    console.log(page)
    return(
    <>
        <h1> Student Login Form </h1>
        <div>
            <form>
        <div className="container">   
            <label>Username : </label>   
            <input type="text" placeholder="Enter Username" name="username" required/> 

            <label>Password : </label>   
            <input type="password" placeholder="Enter Password" name="password" required/>
            
            <button onClick={()=>(handleOnClick())} type="submit">Login</button>
        </div>
        </form>
        </div>
    </>
    )
}

export default Login1;