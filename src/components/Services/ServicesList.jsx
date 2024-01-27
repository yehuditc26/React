
import React, { useState, useEffect } from "react";
import AddService from "./AddService";
import {
  Button,
  TextField,
  Typography,
  Box,
} from "@mui/material";
import AddServices from "./AddService";
import AppStoreService from "../../store/AppStoreService";


const ServicesList = () => {
  const [showAddForm, setShowAddForm] = useState(false);


  const handleAddService = (newService) => {
    setShowAddForm(false);
  };

  const handleButtonClick = () => {
    setShowAddForm(true);
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
            </li>
          )
          )
          }
        </ul>
      ) : (
        <p>עדין לא הוספת שרותים לרשימה </p>
      )}

      <div>
        {!showAddForm ? (
          <Button variant="contained" color="primary" onClick={handleButtonClick}>
            הוסף שרות
          </Button>
        ) : (
          <div>{showAddForm && <AddService onAddService={handleAddService} />}</div>
        )}
      </div>
    </div>
  );
}

export default ServicesList;
