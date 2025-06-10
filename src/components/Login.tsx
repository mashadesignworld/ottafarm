"use client";
import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc"; // Import Google icon from react-icons

const Login = () => {
  return (
   <div
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center p-4 sm:p-6"
      style={{ backgroundImage: 'url("/bg.jpg")' }} // Use your background image
    >
      {/* Overlay to dim the background and make text readable */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Login Card Container */}
      <div className="relative z-10 w-full max-w-md p-8 bg-white rounded-xl shadow-2xl transform transition-all duration-500 hover:scale-105">
        <div className="text-center mb-8">
          {/* Your Logo */}
          <Image
            src="/logo.png" // Adjust based on your logo file name if it's .pg or .jpg
            alt="Otta Farm Logo"
            width={80}
            height={80}
            className="mx-auto mb-4"
            priority
          />
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back!</h2>
          <p className="text-gray-500">Sign in to manage your farm activities.</p>
        </div>

        {/* Google SSO Button */}
        <div className="mb-6">
          <button
            onClick={() => {
              // Handle Google SSO login here.
              // If using NextAuth.js: signIn('google');
              console.log('Attempting Google SSO Login...');
            }}
            className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-lg font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-300"
          >
            <FcGoogle className="mr-3 text-2xl" /> {/* Google Icon */}
            Sign in with Google
          </button>
        </div>

        <div className="relative flex items-center justify-center my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative bg-white px-4 text-sm text-gray-500">Or continue with</div>
        </div>

        {/* Traditional Login Form (Optional - add your input fields here) */}
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
              placeholder="you@example.com"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Login
          </button>
        </form>

        {/* Forgot Password / Sign Up Links */}
        <p className="mt-6 text-center text-gray-500 text-sm">
          Dont have an account?{' '}
          <Link href="/signup" className="text-green-600 hover:underline">
            Sign Up
          </Link>
        </p>
        <p className="mt-2 text-center text-gray-500 text-sm">
          <Link href="/forgot-password" className="text-gray-500 hover:underline">
            Forgot password?
          </Link>
        </p>
      </div>
    </div>
  );
}
export default Login;