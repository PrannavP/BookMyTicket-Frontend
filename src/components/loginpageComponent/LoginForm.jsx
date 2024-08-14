// login form component

import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../../styles/loginform.css';
import axios from 'axios';

const LoginForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [success, setSuccess] = useState('');

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
			console.log(response.data);

			setTimeout(() => {
				if(response.data.login){
					localStorage.setItem('token', response.data.token);
					window.location.href = './dashboard';
				};
			}, 1200);
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
		};
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
						<input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} required={true} /><br />

						<label htmlFor="password">Password</label><br />
						<input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} required={true} />
					</div>
					<div className="forgot-link-container">
						<p>Forgot Password?</p>
					</div>
					<div className="form-buttons">
						<button className='login-btn' onClick={handleSubmit}>Login</button><br />
						<p><Link to='/register'>Don't have an account? Register</Link></p>
					</div>
					{error && <p className='errorMsg' onClick={handleErrorClick}>{error}</p>}
					{success && <p className='successMsg'>{success}</p>}
				</div>
			</div>
		</>
    );
};

export default LoginForm;