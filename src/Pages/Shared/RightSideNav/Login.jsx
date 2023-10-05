import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  // ======================USing context (Destructuring the objects)===========================================
  const { signInUser, signInWithGoogle, signInWithGitHub } =
    useContext(AuthContext);

  //   ======================getting the value from user===========================================================================
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    // ========================Calling the sign in user=========================================
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        // navigate after login
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  // =======================Sign in With Google ==========================================
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  // =======================Sign in With GitHub ==========================================
  const handleGitHubSignIn = () => {
    signInWithGitHub()
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <>
      <Navbar></Navbar>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="enter your email address"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="enter your password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
              <p>
                New here? Please
                <Link to="/register">
                  <button className="btn btn-link">Register</button>
                </Link>
              </p>
              <p>
                <button onClick={handleGoogleSignIn} className="btn btn-ghost">
                  Google
                </button>
                <button onClick={handleGitHubSignIn} className="btn btn-ghost">
                  GitHub
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
