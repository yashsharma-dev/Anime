import React, { useState } from 'react';
import './Settings.css'; // Import the CSS file

function Settings() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [theme, setTheme] = useState('light');
    const [notifications, setNotifications] = useState({
        email: true,
        push: true,
    });

    const handleSaveProfile = () => {
       
        console.log('Profile saved:', { username, email });
    };

    const handleChangePassword = () => {
        
        console.log('Password changed');
    };

    const handleThemeChange = (e) => {
        setTheme(e.target.value);
       
    };

    const handleNotificationChange = (type) => {
        setNotifications((prev) => ({
            ...prev,
            [type]: !prev[type],
        }));
    };

    return (
        <div className="settings-container">
            <h1 className="settings-header">Settings</h1>

            <div className="settings-section">
                <h2>Profile</h2>
                <div className="form-group">
                    <label>Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button onClick={handleSaveProfile}>Save Profile</button>
            </div>

            <div className="settings-section">
                <h2>Change Password</h2>
                <div className="form-group">
                    <label>Current Password</label>
                    <input
                        type="password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>New Password</label>
                    <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Confirm New Password</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <button onClick={handleChangePassword}>Change Password</button>
            </div>

            <div className="settings-section">
                <h2>Theme</h2>
                <select value={theme} onChange={handleThemeChange}>
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                </select>
            </div>

            <div className="settings-section">
                <h2>Notifications</h2>
                <div className="form-group">
                    <label>
                        <input
                            type="checkbox"
                            checked={notifications.email}
                            onChange={() => handleNotificationChange('email')}
                        />
                        Email Notifications
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        <input
                            type="checkbox"
                            checked={notifications.push}
                            onChange={() => handleNotificationChange('push')}
                        />
                        Push Notifications
                    </label>
                </div>
            </div>

            <div className="settings-section">
                <h2>Account</h2>
                <button className="danger-button">Deactivate Account</button>
            </div>
        </div>
    );
}

export default Settings;