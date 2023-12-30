
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Route,  Routes } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import AllProjects from './components/AllProjects';

function App() {
  return (
    <>
      <Header/>
      <Routes>
         <Route path={'/'} element={< WelcomePage/>} />
         <Route path={'/allprojects'} element={ <AllProjects/>} />
         <Route path={'/reviews'} element={<Reviews/>} />
         <Route path={'/contact'} element={<Contact/>} />
      </Routes>   
      <Footer/>
      
    </>
  );
}

export default App;
