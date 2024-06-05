import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import axios from 'axios';

function SignIn() {
    const [email, emailUpdate] = useState('');
    const [password, passwordUpdate] = useState('');

    const proceedLogin = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:8000/users', { em, password });
          const { token } = response.data;
          // Store token in localStorage
        } catch (error) {
          console.error('Login failed:', error);
        }
    };
  return (
    <section className='bg-indigo-50'>
      <div className='container m-auto max-w-2xl py-24'>
        <div className='bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0'>
          <form onSubmit={proceedLogin}>
            <h2 className='text-3xl text-center font-semibold mb-6'>Sign In</h2>

            <div className='mb-4'>
              <label
                className='block text-gray-700 font-bold mb-2'
              >
                Email
              </label>
              <input
                id='email'
                name='email'
                className='border rounded w-full py-2 px-3'
                required
                value={email}
                onChange={e=>emailUpdate(e.target.value)}
              />
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                Password
              </label>
              <input
                type='password'
                id='password'
                name='password'
                className='border rounded w-full py-2 px-3 mb-2'
                required
                value={password}
                onChange={e=>passwordUpdate(e.target.value)}
              />
            </div>

            <div className='mb-12'>
              <button
                className='bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline'
                type='submit'
              >
                Sign In
              </button>
            </div>
            <div>
                Don't have an account?
                <Link
                    to={`/sign-up`}
                    className='text-indigo-600 hover:text-black px-4 py-2 rounded-lg text-center text-sm'
                >
                Sign Up
            </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
 };
export default SignIn;
