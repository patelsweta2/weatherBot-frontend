import React from "react";
import { toast } from "react-toastify";
import fetchServer from "../api";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
// import { useNavigate } from "react-router-dom";

function Login() {
  //   const navigate = useNavigate();
  const [signingIn, setSigningIn] = React.useState(false);

  const handleSignIn = async () => {
    try {
      setSigningIn(true);

      const { user } = await signInWithPopup(auth, provider);

      if (!user) {
        setSigningIn(false);
        return;
      }

      const { data } = await fetchServer("/admin/login", "post", {
        email: user.email,
      });
      console.log("Response from backend:", response.data);
      toast.success(data.message);

      setSigningIn(false);
    } catch (error) {
      console.error("Error connecting to backend:", error);
      toast.error(error?.response?.data?.error || "Internal server error!");

      setSigningIn(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-full min-w-full">
      <div className="bg-amber-400 shadow-lg rounded-lg p-8 max-w-xs w-full text-center md:mb-24 mt-4">
        <h2 className="text-2xl font-semibold mb-8 text-white">Welcome</h2>
        <button
          onClick={handleSignIn}
          disabled={signingIn}
          className="w-full flex items-center justify-center py-2 bg-green-500 font-semibold text-white rounded-md hover:bg-green-600 transition duration-300"
        >
          <div className="flex items-center">
            <img
              src="https://img.icons8.com/ios-filled/50/FFFFFF/google-logo.png"
              alt="Google Icon"
              className="w-6 h-6 mr-3"
            />
            <span>{signingIn ? "Signing In..." : "Sign In with Google"}</span>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Login;
