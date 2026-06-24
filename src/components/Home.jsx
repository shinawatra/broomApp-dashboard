import React from 'react';

function Home() {
  return (
    <section className="w-full md:w-1/2 m-0 md:m-auto -mt-33 md:-mt-25">
      <form
        action=""
        className="bg-[#fafafa] shadow-2xl rounded-lg  p-5 m-5 md:m-0"
      >
        <h1 className="text-[#02488f] mb-2.5">Sign in to your account</h1>
        <div className="mb-2.5">
          <label htmlFor="firstName" className="block mb-1.5">
            Email Address
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="w-full p-2.5 border border-gray-300"
          />
        </div>

        <div className="mb-2">
          <label htmlFor="password" className="block mb-1.5">
            Password
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Enter your last name"
            className="w-full p-2.5 border border-gray-300"
          />
        </div>
        <a href="#" className="text-[#02488f] underline">
          forgot password?
        </a>

        <button className="bg-[#02488f] text-white p-2.5 w-full mt-5 rounded-lg cursor-pointer">
          Continue
        </button>
      </form>

      <span className="flex justify-center mt-10 gap-1">
        <p className="text-gray-600">Didn't have an account? </p>
        <a href="#" className="text-[#02488f] underline">
          Sign up
        </a>
      </span>
    </section>
  );
}

export default Home;

/*
 <section className="w-1/2 m-auto -mt-33">
      <form action="" className="bg-[#fafafa] shadow-2xl rounded-lg w-full p-5">
        <h1 className="text-[#02488f] mb-2.5">Let's get you started!</h1>
        <span>
          <label htmlFor="firstName" className="block mb-1">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Enter your first name"
            className="w-full p-2.5 border border-gray-300"
          />
        </span>

        <span>
          <label htmlFor="lastName" className="block mb-1">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Enter your last name"
            className="w-full p-2.5 border border-gray-300"
          />
        </span>

        <span>
          <label htmlFor="email" className="block mb-1">
            Email Address
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="w-full p-2.5 border border-gray-300"
          />
        </span>

        <button className="bg-[#02488f] text-white p-2.5 w-full mt-5 rounded-lg cursor-pointer">
          Continue
        </button>
      </form>

      <span className="flex justify-center mt-10 gap-1">
        <p className="text-gray-600">I already have an account? </p>
        <a href="#" className="text-[#02488f] underline">
          sign in
        </a>
      </span>
    </section>

*/
