

import Card from "../components/Card";
import { patients } from "../data/patients";
import { services } from "../data/services";


const Dashboard = () => {
   return (
      <div className="page">
         <h2>Dashboard Overview</h2>


         <div className="grid">
            <Card>
               <h3>Patients Summary</h3>
               <p>Total Patients: {patients.length}</p>
               <p>Active: {patients.filter((p) => p.status === "Active").length}</p>
            </Card>


            <Card>
               <h3>Services Summary</h3>
               <p>Services Offered: {services.length}</p>
            </Card>
         </div>
      </div>
   );
};


export default Dashboard;