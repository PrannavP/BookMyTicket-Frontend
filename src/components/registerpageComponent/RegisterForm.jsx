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

    const [isOrganizer, setIsOrganizer] = useState(false);

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

    const handleCheckboxChange = (event) => {
        setIsOrganizer(event.target.checked);
        console.log(event.target.value);
    };

    // const handleRegister = async (e) => {
    //     e.preventDefault();

    //     if (!profileImageFile || !firstName || !lastName || !email || !phonenumber || !password) {
    //         alert('Please fill in all fields.');
    //         return;
    //     }

    //     if (password !== confirmPassword) {
    //         alert('Passwords do not match.');
    //         return;
    //     }

    //     const formData = new FormData();
    //     formData.append('full_name', fullname);
    //     formData.append('email', email);
    //     formData.append('password', password);
    //     formData.append('contact_number', phonenumber);
    //     formData.append('address', address);
    //     formData.append('age', age);
    //     formData.append('profile_image', profileImageFile);

    //     if(isOrganizer){
    //         formData.append("user_type", "organizer");
    //     }else{
    //         formData.append("user_type", "attendee");
    //     }

    //     try{
    //         await axios.post('http://localhost:3000/register', formData, {
    //             headers:{
    //                 'Content-Type': 'multipart/form-data',
    //             }
    //         });
            
    //         window.location.href = '/login';
    //     }catch(err){
    //         alert("Something went wrong in registration: " + err.message);
    //     }

    //     // organizer formdata
    //     // const organizerFormData = new FormData();
    //     // organizerFormData.append('organizer_name', fullname);
    //     // organizerFormData.append('contact', phonenumber);
    //     // organizerFormData.append('email', email);
    //     // organizerFormData.append('password', password);
    //     // organizerFormData.append('address', address);
    //     // organizerFormData.append('profile_image', profileImageFile);

    //     // console.log(profileImageFile);
    //     // for (let pair of organizerFormData.entries()) {
    //     //     console.log(pair[0] + ', ' + pair[1]);
    //     // }

    //     // // organizer user formdata
    //     // const organizerUserFormData = new FormData();
    //     // organizerFormData.append('full_name', fullname);
    //     // organizerFormData.append('contact_number', phonenumber);
    //     // organizerFormData.append('email', email);
    //     // organizerFormData.append('password', password);
    //     // organizerFormData.append('address', address);
    //     // organizerFormData.append('age', age);
    //     // organizerFormData.append('profile_image', profileImageFile);
    //     // organizerFormData.append('user_type', 'organizer');

    //     // if(isOrganizer){
    //     //     alert("Registering as organizer.");
    //     //     try{
    //     //         await axios.post("http://localhost:3000/organizer/register", organizerFormData, {
    //     //             headers: {
    //     //                 'Content-Type': 'multipart/form-data',
    //     //             } 
    //     //         });

    //     //         // await axios.post('http://localhost:3000/register', organizerUserFormData, {
    //     //         //     headers: {
    //     //         //         'Content-Type': 'multipart/form-data'
    //     //         //     }
    //     //         // });

    //     //         window.location.href = '/login';
    //     //     }catch(err){
    //     //         alert("Something went wrong in organizer registration. " + err.message);
    //     //     }
    //     // }else{
    //     //     alert("Registering as attendee.");
    //     //     try {
    //     //         await axios.post('http://localhost:3000/register', formData, {
    //     //             headers: {
    //     //                 'Content-Type': 'multipart/form-data'
    //     //             }
    //     //         });
    
    //     //         window.location.href = '/login';
    
    //     //     } catch (err) {
    //     //         alert('Something went wrong in registration: ' + err.message);
    //     //     }
    //     // }
    // };

    const handleRegister = async (e) => {
        e.preventDefault();
    
        // Validate input fields
        if (!profileImageFile || !firstName || !lastName || !email || !phonenumber || !password) {
            alert('Please fill in all fields.');
            return;
        }
    
        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        console.log(profileImageFile);
    
        // Prepare form data for attendee or organizer registration
        const formData = new FormData();
        formData.append('full_name', fullname);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('contact_number', phonenumber);
        formData.append('address', address);
        formData.append('age', age);
        formData.append('profile_image', profileImageFile);
        formData.append('user_type', isOrganizer ? 'organizer' : 'attendee');
    
        // Organizer specific form data
        const organizerFormData = new FormData();
        organizerFormData.append('organizer_name', fullname);
        organizerFormData.append('contact', phonenumber);
        organizerFormData.append('email', email);
        organizerFormData.append('password', password);
        organizerFormData.append('address', address);
        organizerFormData.append('profile_image', profileImageFile);
    
        try {
            if (isOrganizer) {
                // Call the first API for organizer registration
                alert('Registering as organizer.');
                await axios.post('http://localhost:3000/organizer/register', organizerFormData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    }
                });
            }
    
            // Call the second API to register the user (whether attendee or organizer)
            await axios.post('http://localhost:3000/register', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });
    
            // Redirect to login after successful registration
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

                        <div className="checkbox-container">
                            <label htmlFor="usertype">Signup as organizer?</label>
                            <input type="checkbox" name="usertype" onChange={handleCheckboxChange} />
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