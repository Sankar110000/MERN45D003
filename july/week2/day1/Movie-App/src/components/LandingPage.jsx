import React from 'react';
import { NavLink } from 'react-router';

function Landing() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-5xl sm:text-6xl font-extrabold text-center mb-6">
        🎬 Welcome to <span className="text-red-600">Movie Hub</span>
      </h1>
      <p className="text-lg sm:text-xl text-center max-w-xl mb-8">
        Dive into a world of movies. Discover, search, and explore your favorite films all in one place.
      </p>
      <NavLink to={'/movies'}><button className='bg-red-600 px-5 py-3 rounded text-amber-50 cursor-pointer'>Explore Movies</button></NavLink>
    </div>
  );
}

export default Landing;
