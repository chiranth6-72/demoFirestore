import { React, useRef, useState } from "react";
import "./login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../src/Firebase";
import { Link } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("User Logged in successfully");
        setEmail("");
        setPassword("");
      })
      .catch((e) => {
        console.log(e.message);
        setError("Unable To Login");
      });
  };

  return (
    <section id="#register" className="register">
      <div className="main-container">
        <h5 className="heading">REGISTER</h5>
        <div className="title-head">
          <div className="title-individual">INDIVIDUAL</div>
          {/* <div className="title-team">Team</div> */}
        </div>
        {error != "" && <div>{error}</div>}
        <div className="form-container">
          <form action="#" className="individual">
            <div>
              <input
                type="email"
                placeholder="Mail ID"
                className="field"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Enter password"
                className="field"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="button-container">
              <button
                type="submit"
                placeholder="Submit"
                className="button"
                onClick={(e) => handleSubmit(e)}
                required
              >
                Submit
              </button>
            </div>
            <div>
              Not registered yet?<Link to="/">Register here</Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
