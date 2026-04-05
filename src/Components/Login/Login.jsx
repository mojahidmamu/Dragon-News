    import React, { useState } from 'react';
    import { FaGithub } from 'react-icons/fa';
    import { FcGoogle } from 'react-icons/fc';
    import { Link, useLocation, useNavigate } from 'react-router';
    import { useAuth } from '../contexts/AuthContext';
    import { toast } from 'react-toastify';

    const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    const { login } = useAuth();

    const from = location.state?.from?.pathname || '/';

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     try {
    //     setError('');
    //     setLoading(true);
    //     await login(email, password);
    //     navigate(from, { replace: true });
    //     } catch (error) {
    //     setError('❌ Email or Password is incorrect', error);
    //     } finally {
    //     setLoading(false);
    //     }
    // };

const handleSubmit = async (e) => {
  e.preventDefault();

  // 🔴 Empty field check
  if (!email || !password) {
    return toast.error("❌ Please fill all fields");
  }

  // 🔴 Email validation (basic)
  if (!email.includes("@")) {
    return toast.error("❌ Invalid email address");
  }

  try {
    setLoading(true);

    // ✅ Firebase login
    await login(email, password);

    // ✅ Success toast
    toast.success("🎉 Login successful!");

    // 👉 Redirect to previous page or home
    navigate(from, { replace: true });

  } catch (error) {
    // 🔴 Login failed
    toast.error("❌ Email or Password is incorrect");

  } finally {
    setLoading(false);
  }
};

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black px-4">

        <div className="w-full max-w-md bg-gray-800 p-8 rounded-2xl shadow-2xl">

            {/* Title */}
            <h2 className="text-3xl font-bold text-center text-white mb-6">
            🔐 Login to your account
            </h2>

            {/* Error */}
            {error && (
            <div className="bg-red-500 text-white p-3 rounded mb-4 text-center">
                {error}
            </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit}>

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
                placeholder="Enter your password"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
            </div>

            {/* Forgot password */}
            <div className="text-right mb-4">
                <a href="#" className="text-sm text-amber-400 hover:underline">
                Forgot password?
                </a>
            </div>

            {/* Button */}
            <button
                type="submit"
                disabled={loading}
                className="w-full bg-amber-500 hover:bg-amber-600 text-black font-semibold py-2 rounded-lg transition duration-300"
            >
                {loading ? 'Logging in...' : 'Login'}
            </button>
            </form>

            {/* Divider */}
            <div className="divider text-gray-400 my-6">OR</div>

            {/* Social Login */}
            <div className="flex gap-4">
            <button className="flex-1 flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg transition">
                <FcGoogle size={20} /> Google
            </button>

            <button className="flex-1 flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg transition">
                <FaGithub size={20} /> GitHub
            </button>
            </div>

            {/* Register */}
            <p className="text-gray-400 text-center mt-6">
            Don’t have an account?{' '}
            <Link to="/register" className="text-amber-400 hover:underline">
                Register
            </Link>
            </p>
        </div>
        </div>
    );
    };

    export default Login;