import React, { useState } from 'react';
import Layout from '../../layout';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const AddPerformance = () => {
    const router = useRouter();
  const [isVal, setIsVal] = useState({ name: '', description: '' });
  const [message, setMessage] = useState('');

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setIsVal({ ...isVal, [name]: value });
  // };
  const handleChange = (e) => {
    if (e.target.name === 'description' && e.target.value.length > 100) {
        setIsVal({
            ...isVal,
            [e.target.name]: e.target.value.substring(0, 100)
        });
    } else {
        setIsVal({
            ...isVal,
            [e.target.name]: e.target.value
        });
    }
};

  const isFetch = async () => {
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_URL}/api/topperformance`, isVal);
      // console.log('Response:', res.data);
      setMessage('Performance data submitted successfully!');
    } catch (err) {
      console.error('Error submitting data:', err);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted data:', isVal);
    isFetch(); 
    setIsVal({ name: '', description: '' }); // Reset form values
    router.push("/admin/top-performance")
  };

  return (
    <Layout>
      {message && <p className="text-green-500">{message}</p>} {/* Display success message */}
      <form onSubmit={handleSubmit}>
        <div className="my-6 col-span-2">
          <label
            htmlFor="name"
            className="block text-white font-medium"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            value={isVal.name}
            onChange={handleChange}
            className="border border-gray-300 outline-none p-2.5 rounded-lg w-full mt-1.5 bg-transparent"
            placeholder="Please Enter Name"
            required
          />
        </div>

        <div className="my-6 col-span-2">
                    <label
                        htmlFor="description"
                        className="block text-white font-medium"
                    >
                        Data
                    </label>
                    <textarea
                        name="description"
                        value={isVal.description}
                        onChange={handleChange}
                        className="border border-gray-300 outline-none p-2.5 rounded-lg w-full mt-1.5 bg-transparent h-32 resize-none"
                        placeholder="Please Enter Description"
                        required
                    />
                    <span className="text-gray-500">{isVal.description.length}/100</span>
                </div>

        <button
          type="submit"
          className="bg-primary-main text-white p-2 w-44 rounded-md flex items-center justify-center gap-2"
        >
          Submit
        </button>
      </form>
    </Layout>
  );
};

export default AddPerformance;
