interface Booking {
  id: number;
  destination: string;
  date: string;
  children: number;
  adult: number;
}
interface Props {
  bookings: Booking[];
}

const BookingList = ({ bookings }: Props) => {
  return (
    <div className="overflow-x-auto mt-12 max-w-5xl mx-auto">
      <h1 className="text-center text-2xl font-bold text-black my-4">
        Bookings
      </h1>
      <hr />
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Destination</th>
            <th>Date and Time</th>
            <th>Children</th>
            <th>Adult</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {bookings.map((bk) => (
            <tr key={bk.id}>
              <td>{bk.destination}</td>
              <td>{bk.date}</td>
              <td>{bk.children}</td>
              <td>{bk.adult}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingList;
