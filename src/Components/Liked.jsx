import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

const Liked = () => {
  const [likedVideos, setLikedVideos] = useState([]);
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  useEffect(() => {
    const likedData = JSON.parse(localStorage.getItem('users')) || {};
    setLikedVideos(likedData[currentUser]?.liked || []);
  }, [currentUser]);

  const handleRemove = (id) => {
    const users = JSON.parse(localStorage.getItem('users')) || {};
    const userLikes = users[currentUser]?.liked || [];

    const updatedLikes = userLikes.filter((movie) => movie.id !== id);
    users[currentUser].liked = updatedLikes;
    localStorage.setItem('users', JSON.stringify(users));
    setLikedVideos(updatedLikes);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 py-8 px-6">
      <Navbar />
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Your Liked Movies</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {likedVideos.length > 0 ? (
            likedVideos.map((item, ind) => (
              <div
                key={ind}
                className="bg-white shadow-lg rounded-2xl overflow-hidden p-6 flex flex-col items-center text-center hover:scale-105 transform transition duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover rounded-lg mb-4 shadow-md"
                />
                <h4 className="text-xl font-semibold text-gray-800">{item.title}</h4>
                <p className="text-yellow-500 font-semibold mt-1 text-lg">⭐ {item.rate}</p>
                <p className="text-gray-600 mt-3 text-sm">{item.description}</p>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="mt-5 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full font-semibold transition duration-200"
                >
                  Remove from Liked
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600 col-span-full text-lg">
              No liked videos found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Liked;
