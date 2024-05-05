import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import History from './Pages/History';
import Layout from './components/Layout';
import { Routes as Switch, Route } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import ToastContext, { ToastContextProvider } from './context/ToastContext';
import RandomGenerator from './Pages/RandomGenerator';
import MarsRoverPhotosSol from './Pages/MarsRoverPhotosSol';
import MarsRoverPhotosEarth from './Pages/MarsRoverPhotosEarth';
import MissionManifest from './Pages/MissionManifest';
import LandingPage from './Pages/LandingPage';

function App() {
  return (
    <>
    <AuthContextProvider>
      <ToastContextProvider>
    <Layout apod={['/apod', '/history', '/random'].includes(window.location.pathname)}
        rover={['/sol', '/earth', '/mission'].includes(window.location.pathname)}>

      <Switch>
        <Route path='/apod' element={<Home/>}></Route>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/history' element={<History/>}></Route>
        <Route path='/random' element={<RandomGenerator/>}></Route>
        <Route path='/sol' element={<MarsRoverPhotosSol/>}></Route>
        <Route path='/earth' element={<MarsRoverPhotosEarth/>}></Route>
        <Route path='/mission' element={<MissionManifest/>}></Route>
        <Route path='/landingPage' element={<LandingPage/>}></Route>
      </Switch>
    </Layout>
    </ToastContextProvider>
    </AuthContextProvider>
    </>
  );
}

export default App;
