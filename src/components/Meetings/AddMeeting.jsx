import React, { useState } from "react";
import { Button, TextField, Typography, Box } from "@mui/material";
import { addMeeting } from "../../store/Server";
import { observer } from 'mobx-react';



const AddMeeting = (observer(() => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddService = async () => {
    if (name && description) {
      const newService = { name, description };
      const addServiceResult = await addMeeting(newService);
      console.log(addServiceResult);
      if (addServiceResult === "failed") {
        // setValid(false)
      }
      // onAddService(newService);
      setName("");
      setDescription("");
    }
  };

  const handleButtonClick = () => {
    setShowAddForm(true);
  };

  const handleCancel = () => {
    setShowAddForm(false);
    setName("");
    setDescription("");
  };

  return (
    <div dir="rtl">
      {!showAddForm ? (
        <Button variant="contained" color="primary" onClick={handleButtonClick}>
          הוסף פגישה        </Button>
      ) : (
        <div>
          <TextField
            label="שרות"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <TextField
            label="תאור"
            multiline
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ direction: "rtl" }}
          />
          <br />
          <Button variant="contained" color="secondary" onClick={handleCancel}>
            ביטול
          </Button>
          <Button variant="contained" color="primary" onClick={handleAddService}>
            שמירה
          </Button>
        </div>
      )}
    </div>
  );
}))

export default AddMeeting;


