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

  // const handleAddFormClose = () => {
  //   setShowAddForm(false);
  //   setSelectedService(null);
  // };

  console.log(AppStoreService.services);

  return (
    <div dir='rtl'>
      <br />
      <h2>שרותים</h2>
      {AppStoreService.services.length > 0 ? (
        <ul>
          {AppStoreService.services.map((service, index) => (

            <div key={index} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
              <strong>{service.name}</strong> - {service.description}
            </div>
          )
          )
          }
        </ul>
      ) : (
        <p>עדין לא הוספת שרותים לרשימה </p>
      )}


    </div>
  );
}))

export default ServicesList;
