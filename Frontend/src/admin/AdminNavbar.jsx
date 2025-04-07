import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AdminNavbar.css';

function AdminNavbar() {
    const [user, setUser] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (storedUser) {
            setUser(storedUser);
        }
    }, []);

    const logout_handle = () => {
        localStorage.clear();
        navigate("/");
        setUser(null);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="admin-navbar">
            <div className="navbar-container">
                <div className="navbar-header">
                    <h1 className="navbar-title">Dashboard<span className="highlight"></span></h1>
                    <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
                        ☰
                    </button>
                </div>
                <div className={`navbar-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                    <div className="user-profile">
                        <img
                            src="https://img.freepik.com/free-photo/no-problem-concept-bearded-man-makes-okay-gesture-has-everything-control-all-fine-gesture-wears-spectacles-jumper-poses-against-pink-wall-says-i-got-this-guarantees-something_273609-42817.jpg?w=1800&t=st=1669749937~exp=1669750537~hmac=4c5ab249387d44d91df18065e1e33956daab805bee4638c7fdbf83c73d62f125"
                            alt="User"
                            className="user-avatar"
                        />
                        <div className="user-info">
                            <p className="user-name">{user?user.username:"Jim Smith1"}</p>
                            <span className="user-company">Pantazi LLC</span>
                        </div>
                    </div>
                    <hr className="divider" />
                    <div className="menu-items">
                        <Link to="/admindashboard" className="menu-item">
                            <span className="menu-icon">🏠</span>
                            <div className="menu-text">
                                <p className="menu-title">Dashboard</p>
                                <p className="menu-subtitle">Data overview</p>
                            </div>
                        </Link>
                        <Link to="/products_list" className="menu-item">
                            <span className="menu-icon">📦</span>
                            <div className="menu-text">
                                <p className="menu-title">Products</p>
                                <p className="menu-subtitle">View Products</p>
                            </div>
                        </Link>
                        <Link to="/user" className="menu-item">
                            <span className="menu-icon">👥</span>
                            <div className="menu-text">
                                <p className="menu-title">Users</p>
                                <p className="menu-subtitle">Manage users</p>
                            </div>
                            </Link>
                            <Link to="/setting" className="menu-item">
                            <span className="menu-icon">⚙️</span>
                            <div className="menu-text">
                                <p className="menu-title">Settings</p>
                                <p className="menu-subtitle">Edit settings</p>
                            </div>
                        </Link>
                        <a href="#" className="menu-item" onClick={logout_handle}>
                            <span className="menu-icon">🚪</span>
                            <div className="menu-text">
                                <p className="menu-title">Sign Out</p>
                            </div>
                        </a>
                        <Link to="/" className="menu-item">
                            <span className="menu-icon">🏡</span>
                            <div className="menu-text">
                                <p className="menu-title">Home Page</p>
                            </div>
                        </Link>
                    </div>
                    <p className="footer-text">v2.0.0.3 | &copy; 2022 Pantazi Soft</p>
                </div>
            </div>
        </div>
    );
}

export default AdminNavbar;