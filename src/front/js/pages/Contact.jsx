import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";


export const Contact = () => {
    const { store, actions } = useContext(Context)
    const navigate = useNavigate()
    
    const handleEdit = (contact) => {
        actions.setCurrentContact(contact)
        navigate('/edit-contact')
      };
      const handleDelete = (id) => {
        actions.deleteContact(id)
      };


    return (
        <div className="container">
            <h1>Contact List</h1>
            <div>
                <Link to="/add-contact">
                    <button className="btn btn-success mt-3 w-100 mb-sm-2">Add new contact</button>
                </Link>
                {store.contacts.map((item) =>
                    <div key={item.id} className="card">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="https://picsum.photos/200" className="col-5 rounded-circle p-2" alt="..." />
                            </div>
                            <div className="col-6 d-flex flex-column justify-content-between text-start">
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">{item.address}</p>
                                <i className="fas fa-map-marker-alt"></i>
                                    <p className="card-text">{item.phone}</p>
                                <i className="fas fa-phone"></i>
                                    <p className="card-text">{item.email}</p>
                                <i className="fas fa-envelope"></i>
                                </div>
                            </div>
                            <div className="col-2">
                                <span onClick={() => handleEdit(item)}>
                                    <i className="fas fa-pencil-alt text-success mx-1"></i>
                                </span>
                                <span onClick={() => handleDelete(item.id)}>
                                    <i className="fas fa-trash-alt text-danger mx-1"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>

    )
}