import React, { useState, useEffect } from 'react'
import { addDoc, collection }from "firebase/firestore"
import {db, auth} from "../firebase-config"
import { useNavigate } from 'react-router-dom';

const CreatePost = ({isAuth}) => {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  const postCollectionRef = collection(db, "posts")
  let navigate = useNavigate();

  const createPost = async() => {
    await addDoc(postCollectionRef, {
      title, 
      postText, 
      author: {name: auth.currentUser.displayName, id: auth.currentUser.uid}
    });
    navigate("/");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);
  
  return (



    <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
    <div className="bg-gray-900 rounded-lg p-8 flex flex-col w-full  lg:ml-60 lg:mr-60">
        <h2 className="text-white text-center text-2xl font-['koulen'] font-medium title-font mb-5">Create A Post</h2>
        <div className="relative mb-4">
            <label  className="leading-7 text-md text-gray-400">Title:</label>
            <input placeholder='Title...'
            className="w-full bg-white focus:ring-2 focus:ring-primary rounded border border-gray-600 focus:border-red-500 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            onChange={(event) => {
                      setTitle(event.target.value)}} />
        </div>
        <div className="relative mb-4">
            <label  className="leading-7 text-md text-gray-400">Post:</label>
            <textarea  placeholder='Post...' 
            className="w-full bg-white rounded border border-gray-700  focus:ring-primary focus:ring-2 focus:ring-primary h-32   focus:border-primary text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(event) => {
                        setPostText(event.target.value)}}></textarea>
        </div>
            <button 
              className="text-white bg-red-500 border-0 py-2 px-8 focus:outline-none font-['koulen'] hover:bg-primary rounded text-lg"
              onClick={createPost} >
                SUBMIT POST
            </button>
    </div>
</div>




  )
}

export default CreatePost