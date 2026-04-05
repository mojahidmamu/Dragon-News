    import React from 'react';
import { Link } from 'react-router'; 
import { FcGoogle, FaGithub } from "react-icons/fc"; 
import { signInWithPopup} from "firebase/auth";
import {
  auth,
  googleProvider, 
  githubProvider,
} from "../../firebase/firebase.config";

    const Login = () => {

    // GitHub Login
    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
        .then((result) => {
            console.log("GitHub User:", result.user);
            alert(
            `✅ Welcome ${result.user.name} ! You have successfully logged in with GitHub.`,
            );
        })
        .catch((error) => {
            console.error("GitHub SignIn Error:", error);
            alert(error.message);
        });
    };

    // Google Login
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            console.log("Google User:", result.user);
            alert(
            `✅ Welcome ${result.user.displayName}. You have successfully logged in Google!`,
            );
        })
        .catch((error) => {
            console.error("Google SignIn Error:", error.message);
        });
    };



        return (
            <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Login now!</h1>
         
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <fieldset className="fieldset">
                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input type="password" className="input" placeholder="Password" />
                <div><a className="link link-hover">Forgot password?</a></div>
                <button className="btn btn-neutral mt-4">Login</button>
                <p className='font-semibold mt-4 text-xl'>Dont’t Have An Account ? <span className='text-red-500 underline'>
                    <Link to="/register">Register</Link>
                    </span> </p>
                </fieldset>
            </div>
             
             {/*  */}
             <div>
                 <button
                  onClick={handleGithubSignIn}
                  className="btn btn-outline btn-square"
                >
                  <FaGithub className="w-6 h-6" />
                </button>
               <button
                  onClick={handleGoogleSignIn}
                  className="btn btn-outline btn-square"
                >
                  <FcGoogle className="w-6 h-6" />
                </button>
             </div>
        </div>
    </div>
    </div>
        );
    };

    export default Login;