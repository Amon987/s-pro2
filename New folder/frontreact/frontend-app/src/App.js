import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserUpdate from "./componant/UserUpdate";

import Login from "./componant/Login";

import SignUp from "./componant/SignUp";
import AbyssCore from "./componant/AbyssCore";
import AddProduct from "./componant/AddProduct";
function App() {
  return (
    <div >
   
      
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/SignUp" element={<SignUp/>} />
        <Route path="/AbyssCore" element={<AbyssCore/>}/>
        <Route path="/UserUpdate" element={<UserUpdate/>} />
        <Route path="/AddProduct" element={<AddProduct/>} />
        
      
      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
