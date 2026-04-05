    import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router';

    const Register = () => {

        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [confirmPassword, setConfirmPassword] = useState('');
        const [error, setError] = useState('');
        const [loading, setLoading] = useState(false);
        const {register} = useAuth();
        const navigate = useNavigate();


        const handleSubmit = async (e) => {
            e.preventDefault();
            
            if (password !== confirmPassword) {
            return setError('Passwords do not match');
            }

            try {
            setError('');
            setLoading(true);
            await register(email, password, name);
            navigate('/login');  
            } catch (error) {
            setError(error.message);
            } finally {
            setLoading(false);
            }
        };


        return (
            <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-red-500">Register now!</h1>
                    {error && (
                    <div className="bg-red-600 text-white p-3 rounded mb-4">
                        {error}
                    </div>
                    )}
                </div>
                
                {/*  */}
                <form action="" onSubmit={handleSubmit} className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    {/* Name */}
                    <div className="mb-4">
                        <label className="block text-gray-300 mb-2">Name</label>
                        <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-amber-500 focus:outline-none"
                        required
                        />
                    </div>
                    {/* Email */}
                    <div className="mb-4">
                        <label className="block text-gray-300 mb-2">Email</label>
                        <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-amber-500 focus:outline-none"
                        required
                        />
                    </div>
                    {/* Password */}
                    <div className="mb-4">
                        <label className="block text-gray-300 mb-2">Password</label>
                        <input
                        type="text"
                        value={email}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-amber-500 focus:outline-none"
                        required
                        />
                    </div>
                    {/* Confirm Password */}
                    <div className="mb-4">
                        <label className="block text-gray-300 mb-2">Confirm Password</label>
                        <input
                        type="text"
                        value={email}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-amber-500 focus:outline-none"
                        required
                        />
                    </div>


                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold py-2 rounded-lg transition duration-300"
                    >
                        {loading ? 'Loading...' : 'Register'}
                    </button>
                </form>
                {/*  */}
                <p className="text-gray-400 text-center mt-4">
                    Already have an account ? {' '}
                    <Link to="/login" className="text-amber-500 hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
        );
    };

    export default Register;