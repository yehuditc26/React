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
      <div>
        <label htmlFor="service">שרות</label>
        <input
          type="text"
          id="service"
          value={service}
          onChange={(e) => setService(e.target.value)}
        />
      </div>
      <br></br>
      <div>
        <label htmlFor="description">תאור</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <button onClick={handleAddService}>שמור</button>
    </div>
  );
};

export default AddBusinessServices;
