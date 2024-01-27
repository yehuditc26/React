
import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Box,
} from "@mui/material";
import { addService } from "../../store/Server";

const AddServices = ({ onAddService }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleAddService = async () => {
    if (name && description) {
      const newService = { name, description };
      const addservice = await addService(newService);
      console.log(addservice);
      if (addservice === "failed") {
        // setValid(false)
      }
      onAddService(newService);
      setName("");
      setDescription("");
    }
  };

  return (
    <div dir='rtl'>
      <div>
        <TextField
          label="שרות"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <br />
      <div>
        <TextField
          label="תאור"
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ direction: 'rtl' }}
        />
      </div>
      <Button variant="contained" color="primary" onClick={handleAddService}>
        שמור
      </Button>
    </div>
  );
};

export default AddServices;

// const service = {
//     id: "11",
//     name: "פגישת ייעוץ פרונטלית",
//     description: "פגישת ייעוץ פרטנית בקליניקה"
//     price: 500,
//     duration: 60,
// };


