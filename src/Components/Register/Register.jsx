    import React, { useState } from 'react';
    import { useAuth } from '../contexts/AuthContext';
    import { useNavigate, Link } from 'react-router';

    const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const { register } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
        return setError('❌ Passwords do not match');
        }

        try {
        setError('');
        setLoading(true);
        await register(email, password, name);
        navigate('/login');
        } catch (err) {
        setError(err.message);
        } finally {
        setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black px-4">

        <div className="w-full max-w-md bg-gray-800 p-8 rounded-2xl shadow-2xl">

            {/* Title */}
            <h2 className="text-3xl font-bold text-center text-white mb-6">
            📝 Create an Account
            </h2>

            {/* Error */}
            {error && (
            <div className="bg-red-500 text-white p-3 rounded mb-4 text-center">
                {error}
            </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit}>

            {/* Name */}
            <div className="mb-4">
                <label className="text-gray-300 block mb-2">Full Name</label>
                <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                />
            </div>

            {/* Email */}
            <div className="mb-4">
                <label className="text-gray-300 block mb-2">Email</label>
                <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
            </div>

            {/* Password */}
            <div className="mb-4">
                <label className="text-gray-300 block mb-2">Password</label>
                <input
                type="password"
                placeholder="Create password"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
            </div>

            {/* Confirm Password */}
            <div className="mb-4">
                <label className="text-gray-300 block mb-2">Confirm Password</label>
                <input
                type="password"
                placeholder="Confirm password"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                />
            </div>

            {/* Button */}
            <button
                type="submit"
                disabled={loading}
                className="w-full bg-amber-500 hover:bg-amber-600 text-black font-semibold py-2 rounded-lg transition duration-300"
            >
                {loading ? 'Creating Account...' : 'Register'}
            </button>
            </form>

            {/* Login Link */}
            <p className="text-gray-400 text-center mt-6">
            Already have an account?{' '}
            <Link to="/login" className="text-amber-400 hover:underline">
                Login
            </Link>
            </p>

        </div>
        </div>
    );
    };

    export default Register;