/* eslint-disable react/jsx-no-undef */
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs';
import Banner from './components/Banner';
import Copyright from './components/Copyright';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Section from './components/Section';
import Topics from './components/Topics';
import Course from './components/Course';
import Login from './components/Login';
// import info from './Routes/info'
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Section />
              <AboutUs />
              <Topics />
              <Banner />
            </>
          }
        />
        <Route path="/course" element={<Course />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
      <Copyright />
    </>
  );
}

export default App;
