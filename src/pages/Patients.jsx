import { useState } from "react";
import { Link } from "react-router-dom";
import { patients } from "../data/patients";
import FilterBar from "../components/FilterBar";


const Patients = () => {
   const [search, setSearch] = useState("");
   const [statusFilter, setStatusFilter] = useState("All");
   const [careFilter, setCareFilter] = useState("All");


   const filtered = patients.filter((p) => {
      return (
         p.name.toLowerCase().includes(search.toLowerCase()) &&
         (statusFilter === "All" || p.status === statusFilter) &&
         (careFilter === "All" || p.care === careFilter)
      );
   });
   return (
      <div className="page">
         <h2>Patients</h2>


         <input
            placeholder="Search by name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
         />


         <FilterBar
            title="Status"
            options={["All", "Active", "Inactive"]}
            onSelect={setStatusFilter}
         />


         <FilterBar
            title="Type of Care"
            options={["All", "Elder Care", "Post-Surgery", "Physiotherapy", "General Care"]}
            onSelect={setCareFilter}
         />
         <ul className="list">
            {filtered.map((p) => (
               <li key={p.id}>
                  <Link to={`/patients/${p.id}`}>{p.name}</Link>
               </li>
            ))}
         </ul>
      </div>
   );
};


export default Patients;