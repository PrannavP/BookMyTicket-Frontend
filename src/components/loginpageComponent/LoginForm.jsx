// login form component

import { useState } from 'react';
import '../../styles/loginform.css';

const LoginForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if(!email || !password){
			alert('Please fill in all fields');
			return;
		}
		console.log(email);
		console.log(password);
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
						<input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)}/><br />

						<label htmlFor="password">Password</label><br />
						<input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
					</div>
					<div className="forgot-link-container">
						<p>Forgot Password?</p>
					</div>
					<div className="form-buttons">
						<button className='login-btn' onClick={handleSubmit}>Login</button><br />
						<p>Don't have an account? Register</p>
					</div>
				</div>
			</div>
		</>
    );
};

export default LoginForm;