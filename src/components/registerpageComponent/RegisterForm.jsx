import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../../styles/registerform.css';

const RegisterForm = () => {
    const [profileImage, setProfileImage] = useState(null);
    const [profileImageFile, setProfileImageFile] = useState(null);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phonenumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [address, setAddress] = useState('KTM');
    const [age, setAge] = useState(21);
    
    const fullname = `${firstName} ${lastName}`;

    // Image handler
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfileImage(URL.createObjectURL(file)); // Preview
            setProfileImageFile(file); // Store file object
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        if (!profileImageFile || !firstName || !lastName || !email || !phonenumber || !password) {
            alert('Please fill in all fields.');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        const formData = new FormData();
        formData.append('full_name', fullname);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('contact_number', phonenumber);
        formData.append('address', address);
        formData.append('age', age);
        formData.append('profile_image', profileImageFile);

        try {
            await axios.post('http://localhost:3000/register', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            window.location.href = '/login';

        } catch (err) {
            alert('Something went wrong in registration: ' + err.message);
        }
    };

    return (
        <>
            <div className="registerform-main-container">
                <div className="registerform-container">
                    <div className="register-form-heading">
                        <h3>Create a new account</h3>
                    </div>
                    <div className="registerform-input-container">
                        <div className="image-upload-container">
                            <label htmlFor="profileImage" className="image-upload-label">
                                {profileImage ? (
                                    <img src={profileImage} alt="Profile" className="profile-image" />
                                ) : (
                                    <span className="upload-text">Upload Image</span>
                                )}
                            </label>
                            <input
                                type="file"
                                id="profileImage"
                                accept="image/*"
                                onChange={handleImageChange}
                            />
                        </div>

                        <div className="first-name-input-container">
                            <label htmlFor="firstname">First Name</label><br />
                            <input type="text" name="firstname" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        </div>

                        <div className="last-name-input-container">
                            <label htmlFor="lastname">Last Name</label><br />
                            <input type="text" name="lastname" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        </div>

                        <div className="other-input-container">
                            <label htmlFor="email">Email</label><br />
                            <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} /><br />

                            <label htmlFor="phonenumber">Phone Number</label><br />
                            <input type="tel" name='phonenumber' value={phonenumber} onChange={(e) => setPhoneNumber(e.target.value)} /><br />

                            <label htmlFor="password">Password</label><br />
                            <input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} /><br />

                            <label htmlFor="c_password">Confirm Password</label><br />
                            <input type="password" name='c_password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} /><br />
                        </div>

                        <button className="register-btn" onClick={handleRegister}>Register</button><br />
                        <Link to="/login" className="login-link">Already have an account? Login</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RegisterForm;