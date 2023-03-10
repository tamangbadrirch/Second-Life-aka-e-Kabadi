import Link from "next/link";

const ForgetPass = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-green-500 flex justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-white mb-8">Second Life</h1>
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
            <h2 className="text-2xl font-bold mb-8 text-center items-center justify-center">
              Forgot Password
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Enter email address you registered with to receive password reset
              instructions
            </p>
            <form className="flex flex-col" action="#" method="POST">
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                  id="email"
                  type="email"
                  placeholder="Email Address"
                />
              </div>
              <div className="flex justify-end">
                <button
                  className="bg-blue-500 hover:bg-red-500 active:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-24"
                  type="button"
                >
                  Send
                </button>
              </div>
              <div className="text-center mt-4 flex justify-end font-bold">
                <Link href="/login" passHref>
                  <button className="text-blue-500 hover:text-red-600 hover:underline border-none bg-transparent py-2 px-4 rounded-md transition-colors duration-300">
                    Go back to login
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPass;
