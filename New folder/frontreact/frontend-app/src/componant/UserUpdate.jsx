import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";




function UserUpdate() {

  
  
  const location = useLocation();
    useEffect(() => {
      const fetchData = async () => {
        try {
           const response = await axios.post("http://localhost:8080/information", {
            username: location.state.username
          });
          console.log(response.data);
          // Handle the response data here
        } catch (error) {
          console.error('Error:', error.message);
          // Handle error
        }
      };
      fetchData();
    }, [location ]);

    const handleFileChange = (e) => {
      setImageFile(e.target.files[0]);
    };

   

    const [imageFile, setImageFile] = useState(null);
    const [locationData, setLocationData] = useState({});

    
  const handleUpdate = async () => {
    
    const formData = new FormData();
    formData.append("image", imageFile);
    formData.append("username",location.state.username);

    // Make a POST request with fetch
    const response = await fetch("http://localhost:8080/uploadimage", {
        method: "POST",
        body: formData,
    })
    

    
    
        
    
    
}

  return (
    <div>
        <div className="div1">
        </div>      <div className="div2"> 
            <h3 >Username:</h3>
          
         
            <h3 >email:</h3>
            
            
            <h3 >phone number:</h3>
          
            <h3 >account type:</h3>
    
        </div>
  
    <hr/>

    <div className="div3">
    <br />
    <br />
    
    <label>Email:</label>                   <input type="text"placeholder="Email"/>
<br />
    <label>tel:</label>                     <input type="number"placeholder="phone number" />
    <br />
    <label>address:</label>                <input type="text"placeholder="adrress"/>
    <br />
    <label>Password:</label>                <input type="password"placeholder="password"/>
    <br />
    

                  <button type="submit" >back</button>                        <button type="submit" >update information</button>


                  <input type="file" accept="image/*"/>                      <button type="submit" >change profile image</button>      
    </div>
    </div>

  );

}

  
  export default UserUpdate;
  