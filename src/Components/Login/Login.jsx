import React, { useState } from 'react'
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router';  
import { useAuth } from '../contexts/AuthContext';
// import { signInWithPopup} from "firebase/auth"; 

    const Login = () => {
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [error, setError] = useState('');
        const [loading, setLoading] = useState(false);
        const navigate = useNavigate();
        const location = useLocation();
        const { login } = useAuth();

        const from = location.state?.from?.pathname || '/';

        const handleSubmit = async (e) => {
            e.preventDefault();
            
            // if (password !== confirmPassword) {
            // return setError('Passwords do not match');
            // }

            try {
            setError('');
            setLoading(true);
            await login(email, password, name);
            navigate(from, {replace: true});  
            } catch (error) {
                setError("Email or Password wrong", error);
            } finally {
                setLoading(false);
            }
        };

    // // GitHub Login
    // const handleGithubSignIn = () => {
    //     signInWithPopup(auth, githubProvider)
    //     .then((result) => {
    //         console.log("GitHub User:", result.user);
    //         alert(
    //         `✅ Welcome ${result.user.name} ! You have successfully logged in with GitHub.`,
    //         );
    //     })
    //     .catch((error) => {
    //         console.error("GitHub SignIn Error:", error);
    //         alert(error.message);
    //     });
    // };

    // // Google Login
    // const handleGoogleSignIn = () => {
    //     signInWithPopup(auth, googleProvider)
    //     .then((result) => {
    //         console.log("Google User:", result.user);
    //         alert(
    //         `✅ Welcome ${result.user.displayName}. You have successfully logged in Google!`,
    //         );
    //     })
    //     .catch((error) => {
    //         console.error("Google SignIn Error:", error.message);
    //     });
    // };



        return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            {error && (
            <div className="bg-red-600 text-white p-3 rounded mb-4">
                {error}
            </div>
            )}
            </div>  

             {/*  */}
            <form action="" onSubmit={handleSubmit} className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
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

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold py-2 rounded-lg transition duration-300"
                    >
                        {loading ? 'Loading...' : 'Login'}
                    </button>
            </form>
            {/*  */}
                <p className="text-gray-400 text-center mt-4">
                    No Account ? {' '}
                    <Link to="/register" className="text-amber-500 hover:underline">
                        Register
                    </Link>
                </p>
        </div>
    </div>
        );
    };

    export default Login;