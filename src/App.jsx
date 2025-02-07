import React from 'react';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Home from './Pages/Home/Home';
import Sellbook from './Pages/Sellbook/Sellbook';
import Login from './Pages/Login/Login';
import Signup from './Pages/SignUp/SignUp';
import AllProducts from './Pages/AllProducts/AllProducts';

const routes = (
  <Router>
      <Routes>
         <Route path="/" exact element={<Home />} />
         <Route path="/sellbook" exact element={<Sellbook />} />
         <Route path="/login" exact element={<Login />} />
         <Route path="/signup" exact element={<Signup/>} />
         <Route path="/product" exact element={<AllProducts/>} />
     </Routes>
  </Router>
);
const App = () => {
    return (
        <div>
            {routes}
           </div>
    )
}

export default App;