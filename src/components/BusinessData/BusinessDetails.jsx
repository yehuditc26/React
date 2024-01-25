
import React, { useState } from "react";
// import AddService from "./AddService";
import {
    Button,
    TextField,
    Typography,
    Box,
} from "@mui/material";
import AppStore from "../../store/AppStore";

const BusinessDetails = () => {
    const [showAddForm, setShowAddForm] = useState(false);
    const [services, setServices] = useState([]);
    const [name, setName] = useState("My Business");
    const [address, setAddress] = useState("123 Main Street");
    const [email, setEmail] = useState("info@mybusiness.com");
    const [phone, setPhone] = useState("555-1234");
    const [isEditing, setIsEditing] = useState(false);

    const handleAddService = (newService) => {
        setServices([...services, newService]);
        setShowAddForm(false);
    };

    const handleButtonClick = () => {
        setShowAddForm(true);
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        setIsEditing(false);
        // Perform save logic here, e.g. send the updated details to an API
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        switch (name) {
            case "name":
                setName(value);
                break;
            case "address":
                setAddress(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "phone":
                setPhone(value);
                break;
            default:
                break;
        }
    };

    return (
        <div dir='rtl'>
            <h2>פרטי העסק</h2>
            <Box mb={2}>
                <Typography variant="subtitle1" component="span">
                    כתובת:{" "}
                </Typography>
                {isEditing ? (
                    <TextField
                        variant="outlined"
                        size="small"
                        name="address"
                        value={address}
                        onChange={handleInputChange}
                    />
                ) : (
                    <Typography variant="body1" component="span">
                        {address}
                    </Typography>
                )}
            </Box>
            <Box mb={2}>
                <Typography variant="subtitle1" component="span">
                    מייל:{" "}
                </Typography>
                {isEditing ? (
                    <TextField
                        variant="outlined"
                        size="small"
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                    />
                ) : (
                    <Typography variant="body1" component="span">
                        {email}
                    </Typography>
                )}
            </Box>
            <Box mb={2}>
                <Typography variant="subtitle1" component="span">
                    טלפון:{" "}
                </Typography>
                {isEditing ? (
                    <TextField
                        variant="outlined"
                        size="small"
                        type="tel"
                        name="phone"
                        value={phone}
                        onChange={handleInputChange}
                    />
                ) : (
                    <Typography variant="body1" component="span">
                        {phone}
                    </Typography>
                )}
            </Box>
            {isEditing ? (
                <Button variant="contained" onClick={handleSave}>
                    Save
                </Button>
            ) : (
                AppStore.isLogin && (
                    <Button variant="contained" onClick={handleEdit}>
                        Edit
                    </Button>
                )
            )}

        </div>
    );
};

export default BusinessDetails;
