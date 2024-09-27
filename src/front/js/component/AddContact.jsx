import React, { useContext, useState } from "react";
import { Context } from "../store/appContext.js";
import { useNavigate } from "react-router-dom";


export const AddContact = () => {
  const [ name, setName ]  = useState('');
  const [ phone, setPhone ]  = useState('');
  const [ email, setEmail ]  = useState('');
  const [ address, setAddress ]  = useState('');
  const { actions } = useContext(Context)
  const navigate = useNavigate()

  const handleName = (event) => setName(event.target.value);
  const handlePhone = (event) => setPhone(event.target.value);
  const handleEmail = (event) => setEmail(event.target.value);
  const handleAddress = (event) => setAddress(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    const dataToSend = {
      name, phone, email, address
    }
    actions.addContact(dataToSend)
    navigate('/contact')
  }

  return (
    <div className="container">
      <h1>Add Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="inputName" className="form-label">Name</label>
          <input type="text" className="form-control" id="inputName"
            value={name} onChange={handleName}/>
        </div>
        <div className="mb-3">
          <label htmlFor="inputPhone" className="form-label">Phone</label>
          <input type="text" className="form-control" id="inputPhone"
            value={phone} onChange={handlePhone}/>
        </div>
        <div className="mb-3">
          <label htmlFor="inputEmail" className="form-label">Email</label>
          <input type="email" className="form-control" id="inputEmail"
            value={email} onChange={handleEmail}/>
        </div>
        <div className="mb-3">
          <label htmlFor="inputAddress" className="form-label">Address</label>
          <input type="text" className="form-control" id="inputAddress"
            value={address} onChange={handleAddress}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}