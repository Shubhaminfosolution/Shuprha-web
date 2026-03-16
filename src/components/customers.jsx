import axios from "axios";
import { useEffect, useState } from "react";

function Customers() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios.get("http://web-production/144cc.up.railway.app")
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