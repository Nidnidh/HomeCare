import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Patients from "./pages/Patients";
import PatientDetail from "./pages/PatientDetail";
import Services from "./pages/Services";
import BookingForm from "./pages/BookingForm";
import MyBookings from "./pages/MyBookings";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";



function App() {
  return (
    <Router>
      <Header />

      <div className="container" style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/patients/:id" element={<PatientDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/booking" element={<BookingForm />} />
          <Route path="/bookings" element={<MyBookings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
