import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

    const [isOrganizer, setIsOrganizer] = useState(false);

    const [address, setAddress] = useState('KTM');
    const [age, setAge] = useState(21);
    
    const fullname = `${firstName} ${lastName}`;

    const [errors, setErrors] = useState({});

    // Image handler
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfileImage(URL.createObjectURL(file)); // Preview
            setProfileImageFile(file); // Store file object
        }
    };

    const handleCheckboxChange = (event) => {
        setIsOrganizer(event.target.checked);
    };

    const validateForm = () => {
        const newErrors = {};

        // Validate first name
        if (!/^[a-zA-Z]+$/.test(firstName)) {
            newErrors.firstName = 'First name should only contain letters.';
        }

        // Validate last name
        if (!/^[a-zA-Z]+$/.test(lastName)) {
            newErrors.lastName = 'Last name should only contain letters.';
        }

        // Validate email
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = 'Invalid email format.';
        }

        // Validate phone number
        if (!/^\d{10,}$/.test(phonenumber)) {
            newErrors.phonenumber = 'Phone number should only contain numbers and be at least 10 digits long.';
        }

        // Validate password match
        if (password !== confirmPassword) {
            newErrors.password = 'Passwords do not match.';
        }

        setErrors(newErrors);

        // Show toast notifications for errors
        Object.keys(newErrors).forEach((key) => {
            toast.error(newErrors[key], {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        });

        // Return true if no errors
        return Object.keys(newErrors).length === 0;
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
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
        formData.append('user_type', isOrganizer ? 'organizer' : 'attendee');

        try {
            await axios.post('http://localhost:3000/register', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });

            toast.success('Registration successful!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            window.location.href = '/login';
        } catch (err) {
            toast.error('Something went wrong in registration: ' + err.message, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
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
                            {errors.firstName && <p className="error">{errors.firstName}</p>}
                        </div>

                        <div className="last-name-input-container">
                            <label htmlFor="lastname">Last Name</label><br />
                            <input type="text" name="lastname" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                            {errors.lastName && <p className="error">{errors.lastName}</p>}
                        </div>

                        <div className="other-input-container">
                            <label htmlFor="email">Email</label><br />
                            <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} /><br />
                            {errors.email && <p className="error">{errors.email}</p>}

                            <label htmlFor="phonenumber">Phone Number</label><br />
                            <input type="tel" name='phonenumber' value={phonenumber} onChange={(e) => setPhoneNumber(e.target.value)} /><br />
                            {errors.phonenumber && <p className="error">{errors.phonenumber}</p>}

                            <label htmlFor="password">Password</label><br />
                            <input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} /><br />

                            <label htmlFor="c_password">Confirm Password</label><br />
                            <input type="password" name='c_password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} /><br />
                            {errors.password && <p className="error">{errors.password}</p>}
                        </div>

                        <div className="checkbox-container">
                            <label htmlFor="usertype">Signup as organizer?</label>
                            <input type="checkbox" name="usertype" onChange={handleCheckboxChange} />
                        </div>

                        <button className="register-btn" onClick={handleRegister}>Register</button><br />
                        <Link to="/login" className="login-link">Already have an account? Login</Link>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default RegisterForm;