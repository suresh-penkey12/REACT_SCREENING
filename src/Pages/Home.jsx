import React from 'react'
import Data from "./Data"
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'

const Movies = () => {
  let currentUser = JSON.parse(localStorage.getItem("currentUser"))
  let res=JSON.parse(localStorage.getItem("users")) || [];

  const dup1=res[currentUser].liked
  const handleLiked = (id) => {
    for (let i of Data) {
      if(i.id==id){
        if(!dup1.includes(i)){
        dup1.push(i)
        }
      }
    }
    let data = JSON.parse(localStorage.getItem("users"))
    data[currentUser].liked = dup1
    localStorage.setItem("users", JSON.stringify(data))
    alert("Added to liked videos")
  }

  const dup2 = res[currentUser].disliked
  const handleDisliked = (id) => {
    for (let i of Data) {
      if(i.id==id){
        if(!dup2.includes(i)){
        dup2.push(i)
        }
      }
    }
    let data = JSON.parse(localStorage.getItem("users"))
    data[currentUser].disliked = dup2
    localStorage.setItem("users", JSON.stringify(data))
    alert("Added to disliked videos")
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto px-4 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Data.map((item, ind) => (
          <div
            key={ind}
            className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-48 h-64 object-cover rounded-lg mb-4"
            />
            <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
            <p className="text-yellow-500 font-bold mb-1">⭐ {item.rate}</p>
            <p className="text-gray-600 text-sm mb-3">{item.description}</p>
            <div className="flex space-x-4">
              <button
                onClick={() => handleLiked(item.id)}
                className="bg-green-100 text-green-700 px-4 py-1 rounded hover:bg-green-200 transition"
              >
                👍 Like
              </button>
              <button
                onClick={() => handleDisliked(item.id)}
                className="bg-red-100 text-red-700 px-4 py-1 rounded hover:bg-red-200 transition"
              >
                👎 Dislike
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Movies
