import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Home from './Home';
import Login from './Login';
import CreatePost from './CreatePost';
import About from './About';
import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase-config';

function Header() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"))
 
  const signUserOut = () =>{
    signOut(auth).then(()=>{
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = '/'
    })
  }
  return (
    <Router>
     
        <div className="sticky top-0 z-50 text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
     <div className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
      <span className="ml-3 text-xl">DEV'S</span>
      <span className="ml-3 text-xl text-primary">BLOG</span>
    </div>
        
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link className="mr-5 hover:text-primary" to="/"> Home </Link>
        {!isAuth ? (
          <>
          <Link className="mr-5 hover:text-primary" to="/about" > About </Link>
          <Link className="bg-primary inline-flex items-center border-0 py-1 px-5 
                            hover:bg-transparent text-white font-semibold 
                            hover:text-white py-1 px-5 border border-transparent 
                            hover:border-primary rounded mt-4 md:mt-0" 
                to="/login"> Login </Link>
          </>
        ) : (
          <>
            <Link className="mr-5 hover:text-primary" to="/createpost"> Create Post </Link>
            <button className="bg-primary inline-flex items-center border-0 py-1 px-5 
                                hover:bg-transparent text-white font-semibold 
                                hover:text-white py-1 px-5 border border-transparent 
                                hover:border-primary rounded mt-4 md:mt-0" 
                   onClick={signUserOut}> Log Out</button>
          </>
        )}
        </nav>
      </div>
      </div>

      <Routes>
        <Route path="/" element={<Home isAuth={isAuth}/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth}/>} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth}/>} />
      </Routes>
    </Router>
  );
}

export default Header;
