import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useEffect } from "react";




function AddProduct() { 
    
    
    const [productname, setproductname] = useState("");
    const [productdescription, setproductdescription] = useState("");
    const [price, setprice] = useState("");
    const [seller, setseller] = useState("");
    
    const location = useLocation();
    const [username, setUsername] = useState("");
    const [userinfo, setuserinfo] = useState("");
    const [imageSrc, setImageSrc] = useState('');

    useEffect(() => {
      
      const fetchData = async () => {
        try {
          const response = await axios.post("http://localhost:8080/information", {
            username: location.state.username
          });
          setseller(location.state.username);
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

    async function save(event) {
        event.preventDefault();
       
          await axios.post("http://localhost:8080/addproduct", {
            productname: productname,
            description:productdescription,
            price:price,
            seller:username,
          });
          alert("product added successful");
        } 
      
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    return (
    <div>
        <br />
        <br />
        <br />
        <div>
        <label>product name:</label> <input type="text" placeholder="Username" 
        
        value={productname}
          onChange={(event) => {
            setproductname(event.target.value);
          }}
         ></input>
         <br />
         <label>product description:</label> <input type="text" placeholder="Username" 
        
        value={productdescription}
          onChange={(event) => {
            setproductdescription(event.target.value);
          }}
         ></input>
         <br />
         <label>price:</label> <input type="text" placeholder="Username" 
        
        value={price}
          onChange={(event) => {
            setprice(event.target.value);
          }}
         ></input>
         <br />
         <button type="submit"  onClick={save}>
          Add new product
        </button>
     </div>
    
    </div>

  );

}

  
  export default AddProduct;
  