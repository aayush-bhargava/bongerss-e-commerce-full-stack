import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Signup(): JSX.Element {
  return (
    <div>
      <Navbar />

      <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Already have an account?
            <a
              href="/login"
              className="font-medium text-pink-600 hover:text-pink-500 ml-1"
            >
              Login
            </a>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-6 shadow rounded-lg">
            <form className="space-y-5">

              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Aayush Bhargava"
                  className="mt-1 w-full rounded-md border px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 9XXXXXXXXX"
                  className="mt-1 w-full rounded-md border px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="mt-1 w-full rounded-md border px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  required
                  placeholder="********"
                  className="mt-1 w-full rounded-md border px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <input
                  type="password"
                  required
                  placeholder="********"
                  className="mt-1 w-full rounded-md border px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-pink-600 text-white py-2 rounded-md font-medium hover:bg-pink-700 transition"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
