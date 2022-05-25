import React, { useEffect, useState } from 'react'
import { getDocs, collection, doc, deleteDoc } from 'firebase/firestore';
import { db, auth } from '../firebase-config';

const Home = ({isAuth}) => {
  const [postLists, setPostLists] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };

    useEffect(() => {
      
      const getPosts = async () => {
        const data = await getDocs(postsCollectionRef)
        setPostLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
      };

      getPosts();
    }, [deletePost]);


  return (
    <div className='homePage'>{postLists.map((post)=>{
      return    <div className="text-gray-600 body-font overflow-hidden m-6 md:m-0 -mt-4 -mb-4 md:-mb-0 sm:m-14 md:ml-64 md:mr-64  "  key={post.id}>
      <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap md -m-12 bg-gray-100  shadow-lg  rounded-3xl ">
              <div className="px-12 py-5 w-full sm:py-12  flex flex-col items-start  ">
                  <h2 className="sm:text-3xl text-xl title-font font-medium text-gray-900 overflow-hidden mt-4 mb-4">{post.title}</h2>
                  <p className="leading-relaxed mb-8 max-h-48 overflow-y-auto">{post.postText}</p>
                  <div className="flex items-center flex-wrap pb-4 mb-4 mt-auto w-full">
                      <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-primary mt-auto w-full"> </div>
                      <span className="title-font font-medium text-gray-900 inline-flex items-center text-base sm:text-2xl">@{post.author.name}
                      </span>
                      
                      <div className="mr-3 items-center ml-auto text-sm sm:text-2xl">
                        {isAuth && post.author.id === auth.currentUser.uid && (<button  onClick={() => {
                        deletePost(post.id);
                        }} >
                         &#128465;&#65039; 
                                    </button> )} 
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
    })}</div>
  )
}

export default Home;