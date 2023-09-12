/**
 * 
 * @author - James Tatton
 * 
*/

// Importing all the required components and libraries
import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import About from './components/About';
import Portfolio from './components/Portfolio';
import MountainBiking from './components/MountainBiking';
import Wedding from './components/Wedding';
import LogIn from './components/LogIn';
import Footer from './components/Footer';
import Register from './components/Register';
import AdminHomePage from './components/AdminHome';
import Inquiries from './components/Inquiries';
import MtbInq from './components/MtbInq';
import WedInq from './components/WedInq';
import LogOut from './components/LogOut';
import MtbCollection from './components/MtbCollection';
import ScapeCollection from './components/ScapeCollection';
import WedCollection from './components/WedCollection';
import ImgUpld from './components/ImgUpld';
import VarContent from './components/VarContent';

// Creating the App component
function App() {

  // Setting the state variables
  const [authenticated, setAuthenticated] = useState(false);
  const [backImage, setBackImage] = useState('/');

  // Sets the backImage state variable to the current page
  useEffect(() => {
    setBackImage(window.location.pathname);
  })

  // Handles the authenticated state variable
  const handleAuthenticated = (isAuthenticated) => { setAuthenticated(isAuthenticated) };
  const handleBackImage = (backImage) => { setBackImage(backImage) };

  return (
    <div className="App">
      {/** The navbar component that is passed the authenticated state and the backImage state */}
      <NavBar backImage={backImage} authenticated={authenticated} handleAuthenticated={handleAuthenticated} />

      {/** Handles the routes depending on the pathname of the site passing all of the relevant states and handle functions to each of the components as props */}
      <Routes>
        <Route path="/" element={<HomePage handleBackImage={handleBackImage} />} />
        <Route path="/about" element={<About handleBackImage={handleBackImage} />} />
        <Route path="/portfolio" element={<Portfolio handleBackImage={handleBackImage} />} />
        <Route path="/mountainbiking" element={<MountainBiking handleBackImage={handleBackImage} />} />
        <Route path="/wedding" element={<Wedding handleBackImage={handleBackImage}/>} />
        <Route path="/login" element={<LogIn handleBackImage={handleBackImage} handleAuthenticated = {handleAuthenticated} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admnHm" element={<AdminHomePage handleBackImage={handleBackImage} authenticated = {authenticated}/>} />
        <Route path="/inqrs" element={<Inquiries handleBackImage={handleBackImage} authenticated = {authenticated}/>} />
        <Route path="/mtbinqrs" element={<MtbInq handleBackImage={handleBackImage} />} />
        <Route path="/wedinqrs" element={<WedInq handleBackImage={handleBackImage} />} />
        <Route path="/lgOut" element={<LogOut handleAuthenticated = {handleAuthenticated}/>} />
        <Route path="/mtbCollection" element={<MtbCollection handleBackImage={handleBackImage} />} />
        <Route path="/landscapeCollection" element={<ScapeCollection handleBackImage={handleBackImage} />} />
        <Route path="/weddingCollection" element={<WedCollection handleBackImage={handleBackImage} />} />
        <Route path='/ImgUpld' element={<ImgUpld handleBackImage={handleBackImage} authenticated={authenticated} />} />
        <Route path='/varCt' element={<VarContent handleBackImage={handleBackImage} authenticated = {authenticated}/>} />
        <Route path="*" element={<h1>404 - Not Found</h1>} />
      </Routes>

      {/** The footer component */}
      <Footer />
    </div>
  );
}

export default App;
