import axios from "axios";
import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";








function Login() {



    

    const [username, setUsername] = useState("");
    const navigate = useNavigate();
    const [password, setPassword] = useState("");


     async function Log(event) {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/Login-account", {
            username: username,
            password: password
          });
          console.log(response.data);


          if (JSON.stringify(response.data) === "wrong password") {
            alert("wrong password");
          } else if (JSON.stringify(response.data) === "true") {
           // alert("successful Log in ");
            navigate('/AbyssCore' , {state:{username}} );
          } else {
            alert("wrong username or password");
          }
          
      
        } catch (error) {
          console.error('Error:', error.message);
          alert("Something went wrong");
        }
      }




    

    return (
      < >
        <h1>Abyss Core</h1>
    <h3>للتداول بين الشركات والاشخاص</h3>
    <div className="form" >

    <br/>
    <br/>
    <br/>

        <label>Username:</label><input type="text" placeholder="Username" 
        
        value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        
        />
        <br/>
        <br/>
        <br/>


        <label>Password :</label><input type="password" placeholder="password"
        
        value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        
        
        />
         <br/>
         <br/>

        

         <button type="submit" class="btn btn-primary mt-4" onClick={Log}>
          Log in
        </button>
                <a  href="/SignUp">sign up</a>
    </div>
      </>
    );
  }
  
  export default Login;








  