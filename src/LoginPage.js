import React, { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
export const LoginPage=(props) =>{
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const apiUrl='http://localhost:3000/login';
    const handleSubmit = async(e) => {
     e.preventDefault();
      try{
        const response= await axios.post(`${apiUrl}/addnuser`,
        {
          name,
          email,
          password,
        });
        alert("Loggedin successfully")
        console.log(response.data); 
      }
      catch
      {
        alert("Login failed");
      }
    };
  
    return (
      <body>
          <div className="em">
          <center>
          <h2 id="lab1">SIGN UP</h2>
      <form onSubmit={handleSubmit} >
          <label ><h3 id="lab1">NAME:</h3></label>
          <label><h3 id="lab4">AGE:</h3></label>
          <label ><h3 id="lab6">AADHAR ID:</h3></label>
          <label ><h3 id="lab2">E-MAIL:</h3></label>
          <label ><h3 id="lab2">PASSWORD:</h3></label>
          <label ><h3 id="lab3"> PHONE</h3></label>
          <label ><h3 id="lab2">ADDRESS:</h3></label>
           <Link to="/AppB"> <button type="submit"  id="but">CANCEL</button></Link>
          <button type="submit" id="">SUBMIT</button>
        </form>
        </center>
      </div>
      <img src='https://img.freepik.com/free-photo/front-view-beautiful-dog-with-copy-space_23-2148786501.jpg?size=626&ext=jpg&ga=GA1.1.1757744463.1693544121&semt=ais' id="image2"></img>
      </body>
    );
  }
  export default LoginPage;