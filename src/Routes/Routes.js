import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import MainPage from '../components/Main'; 
import Histoire from '../components/Histoire'; 
import Victoire from '../components/Victoire';
import PremierM from '../components/PremierM';
import Leg from '../components/Legendes';


const MyRoutes = () => { 
  return (
    <Router>
      <Routes>
        <Route path="/src/components/Main.js" element={<MainPage />} /> 
        <Route path="/src/components/Histoire.js" element={<Histoire />} />
        <Route path="/src/components/PremierM.js" element={<PremierM />} />
        <Route path="/src/components/Victoire.js" element={<Victoire />} />
        <Route path="/src/components/Legendes.js" element={<Leg/>} />

        
      </Routes>
    </Router>
  );
}

export default MyRoutes;

