import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";
import './AbyssCore.css';




function AbyssCore() {
    const location = useLocation();
    const [username, setUsername] = useState("");
    const [userinfo, setuserinfo] = useState("");
    const [imageSrc, setImageSrc] = useState('');
    const [data, setData] = useState([]);

    useEffect(() => {
      
      const fetchData = async () => {
        try {
          const response = await axios.post("http://localhost:8080/information", {
            username: location.state.username
          });
          
          
          console.log(response.data);
          setuserinfo(response.data);
          


          // Handle the response data here
        } catch (error) {
          console.error('Error:', error.message);
          // Handle error
        }
        setUsername(location.state.username);
        
      };
      
  
      fetchData();
    }, [location]);
    const navigate =useNavigate()

    const [image, setImage] = useState(null);

    const fetchArray = async() => {
      fetch('http://localhost:8080/getallproducts') // Replace '/api/data' with your Spring Boot endpoint
        .then(response => response.json())
        .then(data => {
          setData(data);
          console.log(data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
      }
  

    
  


                




    return (
     <div>
    <div>
    <div >
    </div>      
    <div > 
        <label >Username:</label><strong>{userinfo.username} </strong>
        <br/>
        <br/>
     
        <label >email:</label><strong>{userinfo.email} </strong>
        <br/>
        <br/>
        
        <label >phone number:</label><strong>{userinfo.phonenumber} </strong>
        <br/>
        <br/>
        <label >account type:</label><strong>{userinfo.accounttype} </strong>

    </div>

<hr/>
<div >
    <button type="submit" >Delete user account</button>      <button type="submit" onClick={()=>navigate('/UserUpdate' , {state:{username}} )} >Modify user information</button>            <input type="text" placeholder="Search.." name="search" /><button type="submit" >Search</button>     <button type="submit" >Owned product</button>  <button type="submit" onClick={()=>navigate('/AddProduct' , {state:{username}} )}>Add product</button>
</div>
<table className="xcop">
  <tr className="xcop">
    <th className="xcop">product name</th>
    <th className="xcop">product price</th>
    <th className="xcop">seller</th>
    <th className="xcop">more ditals</th>
  </tr>
  <tr className="xcop">
    <td  className="xcop"></td>
    <td className="xcop"></td>
    <td className="xcop"></td>
  </tr>
  
</table>
</div>
</div>
      
    );
  }
  export default AbyssCore;