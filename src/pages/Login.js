import React from "react";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login({ setIsAuth }) {
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };

  return (
    <div class=" mt-4 mx-0 md:mt-24 md:mx-40 ">
      <div class="p-4  " >
        <div class="h-full bg-gray-800  px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <h1 class="title-font font-['roboto-slab-seirf'] sm:text-2xl text-xl font-medium text-white mb-5">Sign In With Google to Continue</h1>
          <button onClick={signInWithGoogle} class="login-with-google-btn">Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;