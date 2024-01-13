import React, { useState } from "react";

const AddBusinessServices = ({ onAddService }) => {
  const [service, setService] = useState("");
  const [description, setDescription] = useState("");

  const handleAddService = () => {
    if (service && description) {
      const newService = { service, description };
      onAddService(newService);
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
    </div>
  );
};

export default AddBusinessServices;
