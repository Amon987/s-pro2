import axios from "axios";
import React, { useState } from "react";


function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [address, setaddress] = useState("");


  async function save(event) {
    event.preventDefault();
    try {
      // Parse the phone number as a number
      const phoneNumberAsNumber = parseInt(phonenumber);
  
      // Check if parsing is successful
      if (isNaN(phoneNumberAsNumber)) {
        throw new Error('Invalid phone number');
      }
  
      // Send the POST request with the parsed phone number
      await axios.post("http://localhost:8080/signup-account", {
        username: username,
        email: email,
        phoneNumber: phoneNumberAsNumber,
        password: password,
        address:address,
      });
      alert("Registration successful");
    } catch (error) {
      console.error('Error:', error.message);
      alert("Something went wrong");
    }
  }

  return (
    <div>
      <h1>Abyss Core</h1>
      <h3>للتداول بين الشركات والأشخاص</h3>
      <div>
        <br/>
        <br/>
        <label>Username:</label>
        <input
          type="text"
          placeholder="Username"
          style={{ borderRadius: "20px" }}
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
         <br/>
         <br/>
        <label>Email:</label>
        <input
          type="text"
          placeholder="Email"
          style={{ borderRadius: "20px" }}
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
         <br/>
         <br/>
        <label>tel:</label>
        <input
          type="number"
          placeholder="Phone number"
          style={{ borderRadius: "20px" }}
          value={phonenumber}
          onChange={(event) => {
            setPhoneNumber(event.target.value);
          }}
        />
         <br/>
         <br/>
        <label>Password:</label>
        <input
          type="password"
          placeholder="Password"
          style={{ borderRadius: "20px" }}
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
         <br/>
         <br/>
        <label>address</label>
        <input
          type="text"
          placeholder="address"
          style={{ borderRadius: "20px" }}
          value={password}
          onChange={(event) => {
            setaddress(event.target.value);
          }}
        />
         <br/>
         <br/>
        <button type="submit" class="btn btn-primary mt-4" onClick={save}>
          Sign Up
        </button>
        <a  href="/">log in</a>
      </div>
    </div>
  );
}

export default SignUp;