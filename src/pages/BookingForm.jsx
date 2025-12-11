


import { useLocation } from "react-router-dom";
import { useState } from "react";
import { services } from "../data/services";


const BookingForm = () => {
   const location = useLocation();
   const preset = location.state?.selectedService || "";


   const [form, setForm] = useState({
      name: "",
      service: preset,
      date: "",
      phone: "",
      address: "",
   });


   const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
   };


   const handleSubmit = (e) => {
      e.preventDefault();


      if (!form.name || !form.service || !form.date || !form.phone) {
         alert("Please fill all required fields.");
         return;
      }


      if (isNaN(form.phone)) {
         alert("Phone must be numeric.");
         return;
      }


      const old = JSON.parse(localStorage.getItem("bookings") || "[]");
      old.push(form);
      localStorage.setItem("bookings", JSON.stringify(old));


      alert("Booking Successful!");
   };


   return (
      <div className="page">
         <h2>Booking Form</h2>


         <form className="form" onSubmit={handleSubmit}>
            <input
               name="name"
               placeholder="Patient Name"
               value={form.name}
               onChange={handleChange}
               required
            />


            <select name="service" value={form.service} onChange={handleChange}>
               <option value="">Select Service</option>
               {services.map((s) => (
                  <option key={s.name} value={s.name}>{s.name}</option>
               ))}
            </select>


            <input
               type="date"
               name="date"
               value={form.date}
               onChange={handleChange}
               required
            />


            <input
               name="phone"
               placeholder="Contact Number"
               value={form.phone}
               onChange={handleChange}
               required
            />


            <textarea
               name="address"
               placeholder="Address"
               value={form.address}
               onChange={handleChange}
            />


            <button type="submit">Submit</button>
         </form>
      </div>
   );
};


export default BookingForm;