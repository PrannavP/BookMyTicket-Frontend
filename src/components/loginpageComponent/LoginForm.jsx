// login form component

import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../../styles/loginform.css';
import axios from 'axios';

const LoginForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	// const [isOrganizer, setIsOrganizer] = useState(false);
	const [error, setError] = useState('');
	const [success, setSuccess] = useState('');

	// login when clicked enter in input form
	const handleKeyDown = (event) => {
		if(event.key === "Enter"){
			// trigger the submit function
			event.preventDefault();
			handleSubmit(event);
		}
	};

	// const handleCheckboxChange = (event) => {
	// 	setIsOrganizer(event.target.checked);
	// 	console.log(event.target.checked);
	// };

	const handleSubmit = async (e) => {
		e.preventDefault();
		setSuccess();
		setError('');
		if(!email || !password){
			alert('Please fill in all fields');
			return;
		}
		
		// api login request
		try{
			const response = await axios.post('http://localhost:3000/login', {
				email,
				password
			});
			
			setSuccess('Login Successful');
			// console.log(response.data);

			setTimeout(() => {
				// redirection
				if(response.data.login && response.data.user.role === 'attendee'){
					localStorage.setItem('token', response.data.token);
					window.location.href = './attendeedashboard';
				}else{
					localStorage.setItem('token', response.data.token);
					window.location.href = './organizerdashboard';
				}
			}, 1200)

		}catch(err){
			if(err.response && err.response.data && err.response.data.error){
				setError(err.response.data.error);
				// console.log(error);
			}else{
				setError('Please enter valid credentials!');
			}
		}finally{
			setEmail('');
			setPassword('');
		}
	};

	const handleErrorClick = () => {
		setError('');
	};

    return (
		<>
			<div className="main-container">
				<div className="brand-container">
					<div className="brand-name-container">
						<h3>BookMyEvent</h3>
					</div>
					<div className="brand-slogan-container">
						<p>Discover and Book Your Next Event</p>
					</div>
				</div>

				<div className="loginform-container">
					<div className="login-form-heading">
						<h3>Login into your account</h3>
					</div>
					<div className="input-container">
						<label htmlFor="name">Email</label><br />
						<input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} onKeyDown={handleKeyDown} required={true} /><br />

						<label htmlFor="password">Password</label><br />
						<input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} onKeyDown={handleKeyDown} required={true} />
					</div>
					<div className="forgot-link-container">
						<p>Forgot Password?</p>
					</div>
					{/* <div className="login-checkbox-container">
						<label htmlFor="usertype">Login as organizer?</label>
						<input type="checkbox" name='usertype' onChange={handleCheckboxChange} />
					</div> */}
					<div className="form-buttons">
						<button className='login-btn' onClick={handleSubmit}>Login</button><br />
						<p><Link to='/register'>Dont have an account? Register</Link></p>
					</div>
					
					{error && <p className='errorMsg' onClick={handleErrorClick}>{error}</p>}
					{success && <p className='successMsg'>{success}</p>}
				</div>
			</div>
		</>
    );
};

export default LoginForm;