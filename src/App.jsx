import React from 'react';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Home from './Pages/Home/Home';
import Sellbook from './Pages/Sellbook/Sellbook';

const routes = (
  <Router>
      <Routes>
         <Route path="/" exact element={<Home />} />
         <Route path="/sellbook" exact element={<Sellbook />} />
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