import React, { useState, useEffect } from "react";
import AppStoreService from "../../store/AppStoreService";
import { observer } from "mobx-react";


const ServicesList = (observer(() => {

  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleAddFormOpen = (service) => {
    setShowAddForm(true);
    setSelectedService(service);
  };

  const handleAddFormClose = () => {
    setShowAddForm(false);
    setSelectedService(null);
  };

  console.log(AppStoreService.services);

  return (
    <div dir='rtl'>
      <br />
      <h2>שרותים</h2>
      {AppStoreService.services.length > 0 ? (
        <ul>
          {AppStoreService.services.map((service, index) => (
            <li key={index}>
              <strong>{service.name}</strong> - {service.description}
              <button onClick={() => handleAddFormOpen(service)}>Open Form X</button>
            </li>
          )
          )
          }
        </ul>
      ) : (
        <p>עדין לא הוספת שרותים לרשימה </p>
      )}

      {showAddForm && (
        <div>
          {/* Render your form X component here */}
          {/* Pass the selectedService and handleAddFormClose as props */}
        </div>
      )}


    </div>
  );
}))

export default ServicesList;
