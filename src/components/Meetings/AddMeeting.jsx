import React, { useState } from "react";
import { Button, TextField, Typography, Box, Alert } from "@mui/material";
import { addMeeting } from "../../store/Server";
import { observer } from 'mobx-react';
import AppStoreService from "../../store/AppStoreService";

const AddMeeting = observer(({ service }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [valid, setValid] = useState(true);

  const [selectedService, setSelectedService] = useState("");

  const handleServiceChange = (event) => {
    setSelectedService(event.target.value);
  };

  const handleAddService = async () => {
    if (name && phone && email && dateTime) {
      const newMeeting = {
        dateTime,
        clientName: name,
        clientPhone: phone,
        clientEmail: email,
        serviceName: selectedService,
      };
      const addMeetingResult = await addMeeting(newMeeting);
      console.log(addMeetingResult);
      if (addMeetingResult === "failed") {
        setValid(false)
        console.log(valid)
      }

      else {

        setShowAddForm(false);
        setName("");
        setPhone("");
        setEmail("");
      }

      setDateTime("");

    }
  };

  const handleButtonClick = () => {
    setShowAddForm(true);
  };

  const handleCancel = () => {
    setShowAddForm(false);
    setName("");
    setPhone("");
    setEmail("");
    setDateTime("");
  };

  return (
    <div dir="rtl">
      {!showAddForm ? (
        <Button variant="contained" color="primary" onClick={handleButtonClick}>
          לקביעת פגישה
        </Button>
      ) : (
        <div>
          {/* <TextField
            label="שרות"
            value={service}
            disabled
          /> */}
          <TextField
            label="שרות"
            value={selectedService}
            onChange={handleServiceChange}
            select
            SelectProps={{
              native: true,
              style: { width: "200px" }
            }}
          >
            {/* <option value=""></option> */}
            {AppStoreService.services.map((service, index) => (
              <option key={index} value={service.name}>
                {service.name}
              </option>
            ))}
          </TextField>

          <br />
          <TextField
            label="שם לקוח"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <TextField
            label="פלאפון"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <br />
          <TextField
            label="אמייל"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <TextField
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
            type="datetime-local"
            style={{ border: !valid ? "1px solid red" : "1px solid gray" }}
          />
          <br />
          {
            !valid && <Alert severity="error">
              קיימת כבר פגישה בזמן שנבחר:( <br /> בחר זמן אחר
            </Alert>
          }
          <Button variant="contained" color="secondary" onClick={handleCancel}>
            לבטל
          </Button>
          <Button variant="contained" color="primary" onClick={handleAddService}>
            הוסף פגישה
          </Button>
        </div>
      )}
    </div>
  );
});

export default AddMeeting;