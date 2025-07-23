
import { useState } from 'react';
import './AuthCard.css';
import Navbar from './Navbar';

export default function AuthCard() {
  const [isSignup, setIsSignup] = useState(false);

  const toggleForm = () => setIsSignup(!isSignup);

  return (
    
    <>
    <Navbar/>
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2>{isSignup ? 'Create Account' : 'Login to Your Account'}</h2>

        <form>
          {isSignup && (
            <>
              <input type="text" placeholder="Full Name" required />
              <input type="tel" placeholder="Mobile Number" required />
            </>
          )}
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />

          <button type="submit">{isSignup ? 'Sign Up' : 'Login'}</button>
        </form>

        <p>
          {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
          <span onClick={toggleForm}>
            {isSignup ? 'Login' : 'Sign up'}
          </span>
        </p>
      </div>
    </div>
    </>
  );
}
