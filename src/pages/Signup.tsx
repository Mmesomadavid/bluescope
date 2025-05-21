import cryptoGlass from '../assets/Futuristic_Glass_Cube.png';
import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center relative px-4">
      {/* Logo - top left */}
      <div className="absolute top-4 left-4">
        {/* <img src={bluescopeLogo} alt="BlueScope Logo" className="h-8" /> */}
      </div>

      {/* Signup Card */}
      <div className="w-full max-w-md p-8">
        <h2 className="text-center text-2xl font-semibold mb-6">Create your account</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Username or Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-2xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-2xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="flex items-center justify-between text-sm text-gray-600">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              I agree to the <Link to="#" className="text-blue-600 underline">Terms</Link>
            </label>
            <Link to="#" className="text-blue-600 hover:underline">Forgot password?</Link>
          </div>

          <button
            type="submit"
            className="w-full h-12 py-2 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition Poppins"
          >
            Create Account
          </button>

          <p className="text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-600 hover:underline">Log in</Link>
          </p>
        </form>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} BlueScope™. All rights reserved.
      </div>

      {/* Floating illustration */}
      <div className="absolute bottom-4 right-4 w-48 opacity-70 pointer-events-none">
        <motion.img
            src={cryptoGlass}
            alt="crypto illustration"
            className="w-full h-auto"
            animate={{ y: [0, -30, 0] }}
            transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        />
      </div>
    </div>
  );
};

export default Signup;
