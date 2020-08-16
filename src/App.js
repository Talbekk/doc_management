import React from 'react';
import MainContainer from './containers/MainContainer';
import './App.css';
import { AuthProvider } from "./utils/Auth";

const App = () => {

    return (
     <>
         <AuthProvider>
     <MainContainer/>
     </AuthProvider>
     </>
    );
    };

export default App;
