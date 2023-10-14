import { useState } from "react";
import BookingForm from "./apointment/components/BookingForm";
import BookingList from "./apointment/components/BookingList";

function App() {
  const [bookings, setBookings] = useState([
    {
      id: 1,
      destination: "Dhaka",
      date: "10-10-25 7:25 PM",
      children: 2,
      adult: 5,
    },
    {
      id: 2,
      destination: "Sajek",
      date: "20-12-24 7:25 PM",
      children: 2,
      adult: 5,
    },
    {
      id: 3,
      destination: "Bangkok",
      date: "10-10-25 7:25 PM",
      children: 2,
      adult: 5,
    },
  ]);
  return (
    <>
      <BookingForm
        onSubmit={(data) => {
          const date = data.date.getDate();
          const month = data.date.getMonth() + 1;
          const year = data.date.getFullYear();
          let hour = data.date.getHours();
          const minutes = data.date.getMinutes();

          let amOrPm = hour >= 12 ? "PM" : "AM";

          hour = hour % 12;

          // To display "0" as "12"
          hour = hour ? hour : 12;

          const format = `${date}-${month}-${year} ${hour}:${minutes} ${amOrPm}`;

          setBookings([
            ...bookings,
            {
              id: bookings.length + 1,
              ...data,
              date: format,
            },
          ]);
          // setBookings([...bookings, { id: bookings.length + 1, ...data }]);
        }}
      />
      <BookingList bookings={bookings} />
    </>
  );
}

export default App;
