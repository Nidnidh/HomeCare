
import bgImage from "../images/image7.jpg";
const MyBookings = () => {
   const bookings = JSON.parse(localStorage.getItem("bookings") || "[]");
   return (
      <div
         className="page"
         style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "70vh",
            padding: "20px",
         }}
      >
         <h2>My Bookings</h2>


         {bookings.length === 0 ? (
            <p>No bookings yet.</p>
         ) : (
            <ul className="list">
               {bookings.map((b, i) => (
                  <li key={i}>
                     <strong>{b.name}</strong> booked <strong>{b.service}</strong> on {b.date}
                  </li>
               ))}
            </ul>
         )}
      </div>
   );
};


export default MyBookings;