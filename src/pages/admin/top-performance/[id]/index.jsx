import React, { useState, useEffect } from 'react';
import Layout from '../../layout';
import axios from 'axios';
import { useParams, useRouter } from 'next/navigation';

const TopPer = () => {
    const params = useParams();
    const router = useRouter();
    const [isVal, setIsVal] = useState({
        name: '',
        description: ''
    });
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState(''); // Store API success message

    // const handleChange = (e) => {
    //     setIsVal({
    //         ...isVal,
    //         [e.target.name]: e.target.value
    //     });
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
        if (!params?.id) return;
        try {
            const { data } = await axios.patch(`${process.env.NEXT_PUBLIC_URL}/api/topperformance/${params.id}`, {
                name: isVal.name,
                description: isVal.description
            });
            // console.log(data, "Update Data");
            setMessage(data.message); // Set success message
            router.push("/admin/top-performance")
        } catch (error) {
            console.error(error, "Error Updating data");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isVal.name || !isVal.description) {
            alert("Please fill in both name and description fields");
            return;
        }
        isFetch();
    };

    useEffect(() => {
        if (!params?.id) return; // Check if ID is present
        async function getData() {
            try {
                const { data } = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/topperformance/${params.id}`);
                // console.log(data, 'Fetched Data');
                if (data) {
                    setIsVal({
                        name: data.data.name || '',
                        description: data.data.description || ''
                    });
                }
                setLoading(false);
            } catch (error) {
                console.error(error, "Error fetching data");
                setLoading(false);
            }
        }
        getData();
    }, [params?.id]); // Add params.id to avoid null/undefined access

    if (loading) {
        return <div>Loading...</div>; // Loading indicator
    }

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

                {/* <div className="my-6 col-span-2">
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
                </div> */}
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

export default TopPer;
