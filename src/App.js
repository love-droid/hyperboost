import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Masterpage from "./Layout/Masterpage";
import React from 'react';
import Firstpage from "./Components/Firstpage";
import { ChakraProvider } from '@chakra-ui/react'


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Masterpage />}>
            <Route path='/' element={<Firstpage />} />

          </Route>
        </Routes>
      </Router>
    </>
  )
}
export default App;

