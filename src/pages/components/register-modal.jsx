import React, { useContext , useState} from 'react';
import { RouteContext } from '../../../context/context';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { RxCross2 } from 'react-icons/rx';
import Link from 'next/link';

const RegisterModal = () => {
  
  const { register , registerClose , LoginPopupOpen } = useContext(RouteContext)
// const router = useRouter()
const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_URL}/api/register`, formData);
        registerClose
      } catch (error) {
        console.log(error)
      }
  };
  return (
    <>
      {register && (
        <div
          id="default-modal"
          tabIndex={-1}
          aria-hidden="true"
          className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-screen bg-gray-800 bg-opacity-90"
        >
          <div className="relative p-4 w-full max-w-xl">
            {/* Modal content */}
            <div className="relative bg-secondary-main text-white rounded-xl overflow-hidden">
            <div className="bg-primary-main/80 md:h-56 md:w-56 rounded-full absolute -left-10 top-0" style={{filter:"blur(136.3035430908203px"}} />
              <div className="flex items-center justify-between px-4 md:px-5 pt-4 rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                <h1 className="text-2xl font-bold">Register</h1>
                <p className=" text-white mt-3">Enter your Credentials to access your live account</p>
                </h3>
                <button
                  onClick={registerClose}
                  className="text-gray-400 hover:text-gray-900 rounded-lg  w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center p-2 dark:hover:text-primary-main"
                  type="button"
                >
                <RxCross2 />
                 
                  <span className="sr-only ">Close modal</span>
                </button>
              </div>
             <div>
            <div className="rounded-lg shadow-lg w-full flex flex-col items-center">
           
                <form
                    onSubmit={handleSubmit}
                    className="bg-secondary-main p-8 rounded-lg shadow-lg w-full"
                >
                <div className="mb-4">
                <label className="block text-white font-semibold mb-2" htmlFor="name">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border bg-transparent rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="Enter your email"
                    required
                />
                </div>
                    <div className="mb-4">
                    <label className="block text-white font-semibold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border bg-transparent rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        placeholder="Enter your email"
                        required
                    />
                    </div>
                    <div className="mb-4">
                    <label className="block text-white font-semibold mb-2" htmlFor="number">
                    Phone Number
                    </label>
                    <input
                        type="tel"
                        id="number"
                        name="number"
                        value={formData.number}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border bg-transparent rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        placeholder="Enter your email"
                        required
                    />
                    </div>


                    <div className="mb-6">
                    <label className="block text-white font-semibold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border bg-transparent rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        placeholder="Enter your password"
                        required
                    />
                    </div>

                    <button
                    type="submit"
                    className="w-full bg-primary-main text-white py-2 rounded-md hover:bg-[#7A97AD] transition duration-300"
                    >
                    Register
                    </button>
                </form>
               <div className='flex md:gap-2 md:py-[10px]'>
               <span className='md:text-[18px] '>{`I Have an account? `} </span>
               <button onClick={LoginPopupOpen} className='text-primary-main hover:text-[#7A97AD] md:text-[18px]'>Login</button>
               </div>
            </div>
             </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RegisterModal;
