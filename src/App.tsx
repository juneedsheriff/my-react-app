 
import React from 'react';
 import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
 import { MantineProvider } from '@mantine/core';
import Sidebar from './components/Sidebar/Sidebar';
 import Subscribers from './components/Subscribers/Subscribers';
import Content from './Content';
import Staff from './components/Staff/Staff';
 
import {Outlet} from 'react-router-dom'
import {I18nProvider} from './buzops/i18n/i18nProvider'
import {MasterInit} from './buzops/layout/MasterInit'

function App() {
  return (
    <MantineProvider> 
    <Router>
    <div style={{display:'flex', justifyContent:'space-between'}}>
 
  <Sidebar />
      <Content>
        <Routes>
          <Route path="/subscribers" element={<Subscribers />} />
          <Route path="/staff" element={<Staff />} />
        </Routes>
      </Content>  
 

 
      <I18nProvider>
      <Outlet />
              <MasterInit />
            
      </I18nProvider>
        
    </div>
  </Router>
  </MantineProvider>
  );
}

export default App;
