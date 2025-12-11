import { useParams } from "react-router-dom";
import { patients } from "../data/patients";


const PatientDetail = () => {
   const { id } = useParams();
   const patient = patients.find((p) => p.id == id);


   if (!patient) return <p>Patient not found</p>;


   return (
      <div className="page">
         <h2>{patient.name}</h2>


         <p><strong>Age:</strong> {patient.age}</p>
         <p><strong>Care Type:</strong> {patient.care}</p>
         <p><strong>Status:</strong> {patient.status}</p>
         <p><strong>Next Visit:</strong> {patient.nextVisit}</p>
         <p><strong>Caregiver:</strong> {patient.caregiver}</p>
         <p><strong>Remarks:</strong> {patient.remarks}</p>
      </div>
   );
};


export default PatientDetail;