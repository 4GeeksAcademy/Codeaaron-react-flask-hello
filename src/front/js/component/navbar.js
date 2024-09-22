import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../styles/navbar.css";

export const Navbar = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate(); 
    const [open, setOpen] = useState(false); 

    const handleLogout = () => {
        actions.logout();
        setOpen(false); 
        navigate("/logoutOk");
    };

    const toggleMenu = () => {
        setOpen(prevState => !prevState); 
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container d-flex justify-content-between align-items-center">
                    <Link to="/" className="navbar-brand">
                        <h1 className="text-light">Bienvenido</h1>
                    </Link>
                    
                    {store.auth === true && (
                        <button 
                            onClick={toggleMenu} 
                            className="btn btn-light"
                        >
                            Menu
                        </button>
                    )}
                </div>
            </nav>

            <div className={`menu ${open ? "open" : "closed"}`}>
                {open && (
                    <>
                        <button
                            aria-label="Close"
                            className="close-button"
                            onClick={toggleMenu}
                        >
                            &times;
                        </button>
                        <div className="menu-container">
                            <Link to="/" className="menu-item">Home</Link>
                            <Link to="/contact" className="menu-item">About us</Link>
                            <Link to="/services" className="menu-item">Services</Link>
                            <button onClick={handleLogout} className="menu-item btn btn-danger">Logout</button>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};