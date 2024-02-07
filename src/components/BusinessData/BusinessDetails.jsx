import React, { useState, useEffect } from "react";
import { Button, TextField, Typography, Box, } from "@mui/material";
import AppStore from "../../store/AppStoreLogin";
import AppStoreBusinessData from "../../store/AppStoreBusinessData";
import { addBusinessDetails } from "../../store/Server";
import { getBusinessDetails } from "../../store/Server";

const BusinessDetails = () => {

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const businessDetails = await getBusinessDetails();
            const Data = AppStoreBusinessData.businessData
            console.log(businessDetails);
            setName(Data.Name);
            setAddress(Data.Address);
            setEmail(Data.Email);
            setPhone(Data.Phone);
        }
        fetchData();
    }, []);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = async () => {
        setIsEditing(false);

        if (name && phone && email && address) {
            const newMeeting = {
                Name: name,
                Phone: phone,
                Email: email,
                Address: address
            };
            const addBusinessDetailsResult = await addBusinessDetails(newMeeting);
            console.log(addBusinessDetailsResult);
            if (addBusinessDetailsResult === "failed") {
                console.log('fail')
            }

            else {
                console.log('success')

            }
        }


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
                    שם:{" "}
                </Typography>
                {isEditing ? (
                    <TextField
                        variant="outlined"
                        size="small"
                        name="name"
                        value={name}
                        onChange={handleInputChange}
                    />
                ) : (
                    <Typography variant="body1" component="span">
                        {name}
                    </Typography>
                )}
            </Box>
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
                    שמירה
                </Button>
            ) : (
                AppStore.isLogin && (
                    <Button variant="contained" onClick={handleEdit}>
                        עריכה
                    </Button>
                )
            )}

        </div >
    );
};

export default BusinessDetails;
