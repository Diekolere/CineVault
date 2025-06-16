import React from 'react';
import { FaSearch, FaUserCircle, FaHome, FaPlus, FaHeart, FaPlay } from 'react-icons/fa';

const movies = {
  new: [
    { title: 'The Gray Man', img: '/images/Rectangle 12.svg' },
    { title: 'Red Notice', img: '/images/Rectangle 15.svg' },
    { title: 'Top Gun', img: '/images/topgun.jpg' },
  ],
  upcoming: [
    { title: 'Doctor Strange', img: '/images/strange.jpg' },
    { title: 'Adam Project', img: '/images/adamproject.jpg' },
    { title: 'Venom', img: '/images/venom.jpg' },
  ],
};

const Home = () => {
  return (
    <div className="min-h-screen bg-[#171719] text-white p-4 md:p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl md:text-3xl font-semibold">What would you like to watch?</h1>
        <FaUserCircle className="text-3xl text-gray-400" />
      </div>

      {/* Search */}
      <div className="flex items-center bg-[#1f1f1f] rounded-full px-4 py-2 mb-8">
        <FaSearch className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search Movies, Shows, etc"
          className="bg-transparent text-white placeholder-gray-400 w-full outline-none"
        />
      </div>

      {/* New Movies */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold">New movies</h2>
          <span className="text-gray-400 text-xl">→</span>
        </div>
        <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
          {movies.new.map((movie, index) => (
            <img
              key={index}
              src={movie.img}
              alt={movie.title}
              className="w-32 md:w-44 rounded-lg object-cover flex-shrink-0"
            />
          ))}
        </div>
      </div>

      {/* Upcoming Movies */}
      <div className="mb-20 md:mb-10">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold">Upcoming movies</h2>
          <span className="text-gray-400 text-xl">→</span>
        </div>
        <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
          {movies.upcoming.map((movie, index) => (
            <img
              key={index}
              src={movie.img}
              alt={movie.title}
              className="w-32 md:w-44 rounded-lg object-cover flex-shrink-0"
            />
          ))}
        </div>
      </div>

      {/* Bottom Nav (Mobile) */}
      <div className="fixed bottom-0 left-0 w-full bg-[#1f1f1f] flex justify-around items-center py-2 md:hidden">
        <FaHome className="text-white text-xl" />
        <FaPlus className="text-white text-xl bg-purple-600 p-3 rounded-full" />
        <FaHeart className="text-white text-xl" />
        <FaPlay className="text-white text-xl" />
      </div>
    </div>
  );
};

export default Home;
