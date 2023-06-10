import './App.css';
import { screenType } from './Utils/screenType';
import { useEffect, useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import MainPage from './Pages/MainPage';
import ChatScreen from './Pages/ChatBox';
import ChatDetailBar from './Components/ChatDetailBar';
import { ApolloProvider } from '@apollo/client';
import { client } from './api/client'


export const DeviceContext = createContext();


const App = () => {
  const [ windowSize, setWindowSize ] = useState(window.innerWidth);
  const [ devices, setDevices ] = useState(screenType(window.innerWidth));
  const { isMobile } = devices;
 
  // Attach resize event listener on window on mount
  useEffect(() => {
    window.onresize = () => setWindowSize(window.innerWidth);
  }, [])

  // Whenever window is resize, set devices value by call the screenType which returns { isMobile, isTablet, isDesktop}. This will allow to adjust displayed component depending on the device size.
  useEffect(() => {
    setDevices(screenType(windowSize));
  }, [windowSize])

  return (
    <ApolloProvider client={ client }>
      <div className="App">
        <DeviceContext.Provider value={devices}>
          <Router>
            <Routes>
              <Route path="/" Component={ MainPage } />
              <Route path="/chat" Component={ isMobile ? ChatScreen : MainPage } />
              <Route path="/chatdetail" Component={ isMobile ? ChatDetailBar : MainPage } />
              <Route path="/signup" Component={ SignUp } />
              <Route path="signin" Component={ SignIn } />
            </Routes>
          </Router>
          </DeviceContext.Provider>
      </div>
    </ApolloProvider>
  );
}

export default App;