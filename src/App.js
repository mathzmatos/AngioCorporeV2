import React, {useEffect, useState} from 'react';
import './App.css';
import Navbar from './Navbar';
import HeaderBox from './HeaderBox';
import AgendamentosBox from './AgendamentosBox';
import EspecialidadesBox from './EspecialidadesBox';
import ConveniosBox from './ConveniosBox';
import ExamesBox from './ExamesBox';
import Footer from './Footer';


function App() {
  return (
    
    <div>

      <Navbar />

      <HeaderBox />

      <AgendamentosBox />

      <EspecialidadesBox />

      <ConveniosBox />

      <ExamesBox />

      <Footer />
    

    </div>
  )
}

export default App;
