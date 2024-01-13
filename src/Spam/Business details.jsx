import React, { useState } from "react";
// import AddBusinessServices from "./AddBusinessService";
import AddBusinessServices from "./Spam Currct ADD";


const BusinessDetails = () => {

  // const ServiceList = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [services, setServices] = useState([]);

  const handleAddService = (newService) => {
    setServices([...services, newService]);
    setShowAddForm(false);
  };
  //

  const [name, setName] = useState("My Business");
  const [address, setAddress] = useState("123 Main Street");
  const [email, setEmail] = useState("info@mybusiness.com");
  const [phone, setPhone] = useState("555-1234");

  const [isEditing, setIsEditing] = useState(false);



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
    <div>
      <h2>פרטי העסק</h2>
      <div>
        <label htmlFor="name">שם העסק: </label>
        {isEditing ? (
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleInputChange}
          />
        ) : (
          <span>{name}</span>
        )}
      </div>
      <div>
        <label htmlFor="address">כתובת: </label>
        {isEditing ? (
          <input
            type="text"
            id="address"
            name="address"
            value={address}
            onChange={handleInputChange}
          />
        ) : (
          <span>{address}</span>
        )}
      </div>
      <div>
        <label htmlFor="email">מייל: </label>
        {isEditing ? (
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
        ) : (
          <span>{email}</span>
        )}
      </div>
      <div>
        <label htmlFor="phone">טלפון: </label>
        {isEditing ? (
          <input
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            onChange={handleInputChange}
          />
        ) : (
          <span>{phone}</span>
        )}
      </div>
      {isEditing ? (
        <button onClick={handleSave}>שמור</button>
      ) : (
        <button onClick={handleEdit}>עריכה</button>
      )}

{/* * */}
<div>
      <h2>Service List</h2>
      <button onClick={() => setShowAddForm(true)}>Add Service</button>

      {showAddForm && <AddBusinessServices onAddService={handleAddService} />}

      <h3>Services:</h3>
      {services.length > 0 ? (
        <ul>
          {services.map((service, index) => (
            <li key={index}>
              <strong>{service.service}</strong> - {service.description}
            </li>
          ))}
        </ul>
      ) : (
        <p>No services added yet.</p>
      )}
    </div>
{/* * */}
    </div>

    
  );
};

export default BusinessDetails;
