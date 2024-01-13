import React, { useState } from "react";

const AddBusinessServices = () => {
  const [services, setServices] = useState([]);
  const [service, setService] = useState("");
  const [description, setDescription] = useState("");

  const handleAddService = () => {
    if (service && description) {
      const newService = { service, description };
      setServices([...services, newService]);
      setService("");
      setDescription("");
    }
  };

  return (
    <div>
      <h2>Add Business Services</h2>
      <div>
        <label htmlFor="service">Service:</label>
        <input
          type="text"
          id="service"
          value={service}
          onChange={(e) => setService(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <button onClick={handleAddService}>Add Service</button>
      <h3>Added Services:</h3>
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

export default AddBusinessServices;
