import React from 'react';
import Data from './Data';
import Navbar from '../Components/Navbar';

const Movies = () => {
  let currentUser = JSON.parse(localStorage.getItem("currentUser"));
  let users = JSON.parse(localStorage.getItem("users")) || {};

  const likedMovies = users[currentUser]?.liked || [];
  const dislikedMovies = users[currentUser]?.disliked || [];

  const handleLiked = (id) => {
    const movie = Data.find((m) => m.id === id);
    if (dislikedMovies.find((m) => m.id === id)) {
      alert("You already disliked this movie. Remove it from Disliked first.");
      return;
    }
    if (!likedMovies.find((m) => m.id === id)) {
      likedMovies.push(movie);
      users[currentUser].liked = likedMovies;
      localStorage.setItem("users", JSON.stringify(users));
      alert("Added to liked videos");
    } else {
      alert("This movie is already liked.");
    }
  };

  const handleDisliked = (id) => {
    const movie = Data.find((m) => m.id === id);
    if (likedMovies.find((m) => m.id === id)) {
      alert("You already liked this movie. Remove it from Liked first.");
      return;
    }
    if (!dislikedMovies.find((m) => m.id === id)) {
      dislikedMovies.push(movie);
      users[currentUser].disliked = dislikedMovies;
      localStorage.setItem("users", JSON.stringify(users));
      alert("Added to disliked videos");
    } else {
      alert("This movie is already disliked.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200">
      <Navbar />
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {Data.map((item, ind) => {
          const isLiked = likedMovies.some((m) => m.id === item.id);
          const isDisliked = dislikedMovies.some((m) => m.id === item.id);

          return (
            <div
              key={ind}
              className="relative bg-white/60 backdrop-blur-xl border border-white/30 rounded-2xl shadow-xl p-5 flex flex-col items-center text-center transition-all hover:scale-105"
            >
              {isLiked && (
                <span className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                  👍 Liked
                </span>
              )}
              {isDisliked && (
                <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                  👎 Disliked
                </span>
              )}

              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover rounded-xl shadow-md mb-4"
              />
              <h4 className="text-xl font-bold text-gray-800 mb-1">{item.title}</h4>
              <p className="text-yellow-500 font-semibold text-md mb-1">⭐ {item.rate}</p>
              <p className="text-gray-700 text-sm mb-3">{item.description}</p>
              <div className="flex space-x-4">
                <button
                  onClick={() => handleLiked(item.id)}
                  className="bg-green-100 hover:bg-green-200 text-green-700 font-semibold px-4 py-2 rounded-full transition duration-200 shadow-md"
                >
                  👍 Like
                </button>
                <button
                  onClick={() => handleDisliked(item.id)}
                  className="bg-red-100 hover:bg-red-200 text-red-700 font-semibold px-4 py-2 rounded-full transition duration-200 shadow-md"
                >
                  👎 Dislike
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Movies;
