import { useState } from "react";
import { services } from "../data/services";
import { Link } from "react-router-dom";


const Services = () => {
   const [tab, setTab] = useState("All");


   const filtered = services.filter((s) =>
      tab === "All" ? true : s.category === tab
   );


   return (
      <div className="page">
         <h2>Services</h2>


         <div className="filter-bar">
            {[
               "All",
               "Popular",
               "Recommended",
            ].map((t) => (
               <button key={t} onClick={() => setTab(t)}>{t}</button>
            ))}
         </div>
        <div className="grid mb-12">
            {filtered.map((s) => (
               <div className="card" key={s.name}>
                  <h3>{s.name}</h3>
                  <p>{s.description}</p>
                  <p><strong>Duration:</strong> {s.duration}</p>
                  <p><strong>Cost:</strong> {s.cost}</p>


                  <Link to="/booking" state={{ selectedService: s.name }}>
                     <button>Book This Service</button>
                  </Link>
               </div>
            ))}
         </div>
      </div>
   );
};


export default Services;