import axios from "axios";
import { useEffect, useState } from "react";

function Customers() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/api/users/`)
      .then(res => {
        setCustomers(res.data);
      });
  }, []);

  return (
    <div>
      <h2>Customers</h2>
      {customers.map(c => (
        <p key={c.id}>{c.name} - {c.email}</p>
      ))}
    </div>
  );
}

export default Customers;