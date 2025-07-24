import { Routes, Route,  Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Doctors from './pages/Doctors';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Diseases from './pages/Diseases';
import ForgotPassword from './pages/ForgotPassword';
import HospitalPolicy from './pages/HospitalPolicy';
import DoctorDashboard from './pages/DoctorDashboard';
import Register from './pages/Register'; 
import ViewInfo from './pages/ViewInfo';
import TermsAndConditions from './pages/TermsAndConditions';
import './styles.css';

function App() {


  return (
    <div className="app">
      <Header />
      
      
       
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/diseases" element={<Diseases />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/policy" element={<HospitalPolicy />} />
            <Route path="/view-info" element={<ViewInfo />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route 
              path="/doctors/dashboard" 
              element={
                localStorage.getItem('doctorToken') ? (
                  <DoctorDashboard />
                ) : (
                  <Navigate to="/doctor-login" />
                )
              } 
            />
          </Routes>
     
      
      
      <Footer />
    </div>
  );
}

export default App;