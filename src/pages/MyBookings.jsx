const MyBookings = () => {
   const bookings = JSON.parse(localStorage.getItem("bookings") || "[]");


   return (
      <div className="page">
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