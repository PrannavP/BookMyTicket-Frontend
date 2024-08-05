// register page component

import axios from "axios";
import { useState } from "react";

import '../../styles/registerform.css';

const RegisterForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phonenumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [address, setAddress] = useState('KTM');
    const [age, setAge] = useState(21);
    
    const fullname = `${firstName} ${lastName}`;

    const handleRegister = async (e) => {
        e.preventDefault();

        if(!firstName || !lastName || !email || !phonenumber || !password){
            alert('Please fill in all fields.');
            return;
        };

        if (password !== confirmPassword) { // Add this validation
            alert('Passwords do not match.');
            return;
        };

        // api register request
        try{
            await axios.post('http://localhost:3000/register', {
                full_name: fullname,
                email: email,
                password: password,
                contact_number: phonenumber,
                address: address,
                age: age
            });

            // after successful registration redirect to login page
            window.location.href = '/login';

        }catch(err){
            setError('Something went wrong in registration: ' + err.message);
        };
    };

    return(
        <>
        <div className="registerform-main-container">
            <div className="registerform-container">
                <div className="register-form-heading">
                    <h3>Create a new account</h3>
                </div>
                <div className="registerform-input-container">
                    <div className="first-name-input-container">
                        <label htmlFor="firstname">First Name</label><br />
                        <input type="text" name="firstname" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                    </div>

                    <div className="last-name-input-container">
                        <label htmlFor="lastname">Last Name</label><br />
                        <input type="text" name="lastname" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                    </div>

                    <div className="other-input-container">
                        <label htmlFor="email">Email</label><br />
                        <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} /><br />

                        <label htmlFor="phonenumber">Phone Number</label><br />
                        <input type="tel" name='phonenumber' value={phonenumber} onChange={(e) => setPhoneNumber(e.target.value)}/><br />

                        <label htmlFor="password">Password</label><br />
                        <input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} /><br />

                        <label htmlFor="c_password">Confirm Password</label><br />
                        <input type="password" name='c_password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} /><br />
                    </div>

                    <button className="register-btn" onClick={handleRegister}>Register</button>

                </div>
            </div>
        </div>
    </>
    );
};

export default RegisterForm;