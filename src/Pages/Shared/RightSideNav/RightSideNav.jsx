import {
  FaGofore,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const RightSideNav = () => {
  const { signInWithGoogle, signInWithGitHub } = useContext(AuthContext);
  // =================================Handle Google Sign In================================================================
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  // =================================================================================================
  // =================================Handle GitHub Sign In================================================================
  const handleGithubSignIn = () => {
    signInWithGitHub()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  // =================================================================================================
  return (
    <div className="p-4">
      <div className="p-4 space-y-3">
        <h2 className="text-2xl font-bold">Login with</h2>
        <button onClick={handleGoogleSignIn} className="btn outline w-full ">
          <FaGofore></FaGofore>Login with Google
        </button>
        <button onClick={handleGithubSignIn} className="btn outline w-full ">
          <FaGithub></FaGithub>Login with GitHub
        </button>
      </div>

      {/* next section */}
      <h2 className=" text-2xl">Find us On</h2>
      <div className="mb-4">
        <a
          href=""
          className="p-4 flex text-lg items-center border rounded-t-lg"
        >
          <FaFacebook></FaFacebook>
          <span className="ml-3">Facebook</span>
        </a>
        <a
          href=""
          className="p-4 flex text-lg items-center border-x rounded-t-lg"
        >
          <FaTwitter></FaTwitter>
          <span className="ml-3">Twiter</span>
        </a>
        <a
          href=""
          className="p-4 flex text-lg items-center border rounded-t-lg"
        >
          <FaInstagram></FaInstagram>
          <span className="ml-3">Instagram</span>
        </a>
      </div>

      {/* q zone */}
      <div className="p-4 space-y-3">
        <h2 className="text-2xl font-bold">Q-Zone</h2>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
