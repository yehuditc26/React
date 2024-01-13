import React, { useState } from "react";
import AddBusinessServices from "./AddService";

const ServiceList = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [services, setServices] = useState([]);

  const handleAddService = (newService) => {
    setServices([...services, newService]);
    setShowAddForm(false);
  };

  return (
    <div>
      <h2>Service List</h2>
      <button onClick={() => setShowAddForm(true)}>Add Service</button>

      {showAddForm && <AddBusinessServices onAddService={handleAddService} />}

      <h3>Services:</h3>
      {services.length > 0 ? (
        <ul>
          {services.map((service, index) => (
            <li key={index}>
              <strong>{service.service}</strong> - {service.description}
            </li>
          ))}
        </ul>
      ) : (
        <p>No services added yet.</p>
      )}
    </div>
  );
};

export default ServiceList;
