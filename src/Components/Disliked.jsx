import React from 'react'
import Navbar from './Navbar'

const DisLiked = () => {
  let likedData = JSON.parse(localStorage.getItem("users"))
  let currentUser = JSON.parse(localStorage.getItem("currentUser"))
  const likedVideos = likedData[currentUser]?.disliked || []

  return (
    <div className="min-h-screen bg-gray-100 py-6 px-4">
      <Navbar></Navbar>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {likedVideos.length > 0 ? (
          likedVideos.map((item, ind) => (
            <div
              key={ind}
              className="bg-white shadow-lg rounded-xl overflow-hidden p-4 text-center"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover mb-4 rounded-md"
              />
              <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
              <p className="text-yellow-500 font-medium mt-1">⭐ {item.rate}</p>
              <p className="text-sm text-gray-600 mt-2">{item.description}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 col-span-full">No liked videos found.</p>
        )}
      </div>
    </div>
  )
}

export default DisLiked
