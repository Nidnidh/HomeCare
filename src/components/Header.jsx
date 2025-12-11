import { Link } from "react-router-dom";


const Header = () => {
   return (
      <header className="header">
         <h1>Jhilmil Homecare Dashboard</h1>
         <p>Your trusted homecare companion</p>
         <nav>
            <Link to="/">Home</Link>
            <Link to="/patients">Patients</Link>
            <Link to="/services">Services</Link>
            <Link to="/bookings">My Bookings</Link>
         </nav>
      </header>
   );
};


export default Header;