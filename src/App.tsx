import React from 'react';
import './App.css';
import Home from './pages/Home';
import AppContextProvider from './context/AppContextProvider';

const App: React.FC = () => {
  return (
    <AppContextProvider>
        <Home />
    </AppContextProvider>
  );
}

export default App;
