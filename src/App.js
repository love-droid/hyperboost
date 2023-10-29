import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Masterpage from "./Layout/Masterpage";
import React from 'react';
import Initial from "./Components/Initial/Initial";

function App() {
  return(
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Masterpage/>}>
          <Route path='/' element={<Initial/>}/>
          <Route path='/' element={<Card/>}/>
        </Route>
      </Routes>
    </Router>
    </>
  )
  }
export default App;

