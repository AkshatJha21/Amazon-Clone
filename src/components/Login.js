import React, { useState } from 'react'
import logo from '../assets/amazon-logo-bw.png'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebaseConfig'
import './Login.css'

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then(auth => {
            navigate('/');
        })
        .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            //New User Successfully created
            console.log(auth);
            if (auth) {
                navigate('/');
            }
        })
        .catch(error => alert(error.message))
    }

  return (
    <div className='login'>
        <Link to='/'>
            <img className='login__logo' src={logo} alt="" />
        </Link>

        <div className="login__container">
            <h1>Sign In</h1>

            <form action="">
                <h5>Email</h5>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} />

                <h5>Password</h5>
                <input type="password" name="" id="" value={password} onChange={e => setPassword(e.target.value)}/>

                <button type='submit' className='login__signInButton' onClick={signIn}>Sign in</button>
            </form>

            <p>By signing in you agree to Amazon-Clone's Conditions of Use & Sale. Please see our Privacy Policy, our Cookies Policy and our Internet-based Ads Policy.</p>

            <button onClick={register} className='login__registerButton'>Create Your Amazon Account</button>
        </div>
    </div>
  )
}

export default Login