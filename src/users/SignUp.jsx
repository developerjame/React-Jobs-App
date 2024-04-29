import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [name, namechange] = useState("");
    const [email, emaailchange] = useState("");
    const [password, passwordchange] = useState("");

    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        let regobj={name,email,password};
        //console.log(regobj);

        fetch("http://localhost:8000/users",{
            method:"POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(regobj)
        }).then((res)=>{
            toast.success('Registered successfully.');
            return navigate('/sign-in');
        }).catch((err)=>{
            toast.error('Failed :'+err.message);
        });
    }
  return (
    <section className='bg-indigo-50'>
      <div className='container m-auto max-w-2xl py-24'>
        <div className='bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0'>
          <form onSubmit={handlesubmit}>
            <h2 className='text-3xl text-center font-semibold mb-6'>Sign Up</h2>

            <div className='mb-4'>
              <label
                className='block text-gray-700 font-bold mb-2'
              >
                Name
              </label>
              <input
                id='name'
                name='name'
                className='border rounded w-full py-2 px-3'
                required
                value={name}
                onChange={e=>namechange(e.target.value)}
              />
            </div>
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
                onChange={e=>emaailchange(e.target.value)}
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
                onChange={e=>passwordchange(e.target.value)}
              />
            </div>
            {/* <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                Confirn Password
              </label>
              <input
                type='password'
                id='confirm_password'
                name='confirm_password'
                className='border rounded w-full py-2 px-3 mb-2'
                required
                value=''
              />
            </div> */}

            <div className='mb-12'>
              <button
                className='bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline'
                type='submit'
              >
                Sign Up
              </button>
            </div>
            <div>
                Already have an account?
                <Link
                    to={`/sign-in`}
                    className='text-black hover:text-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm'
                >
                Sign In
            </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
 };
export default SignUp;
