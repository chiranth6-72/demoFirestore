import { React, useRef, useState, useEffect } from "react";
import {
  getFirestore,
  doc,
  setDoc,
  collection,
  getDocs,
  addDoc,
} from "firebase/firestore";

import { auth } from "../src/Firebase.jsx";

import "./signup.css";
import {
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { async } from "@firebase/util";

// Firestore
const db = getFirestore();

// Collection Reference
const colRef = collection(db, "Participant");

// Get collection data
// getDocs(colRef)
//   .then((snapshot) => {
//     let deets = [];
//     snapshot.docs.forEach((doc) => {
//       deets.push({ ...doc.data(), id: doc.id });
//     });
//     console.log(deets);
//   })
//   .catch((err) => console.log(err.message));

const Signup = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [college, setCollege] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [stay, setStay] = useState("");
  const [password, setPassword] = useState("");
  // const [count, setCount] = useState(2000);

  const formRef = useRef(null);
  const nameRef = useRef(null);
  const contactRef = useRef(null);
  const emailRef = useRef(null);
  const collegeRef = useRef(null);
  const cityRef = useRef(null);
  const stateRef = useRef(null);
  const stayRef = useRef(null);


  const handleSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("User registered");

        addDoc(colRef, {
          Name: name,
          Contact: contact,
          Email: email,
          College: college,
          City: city,
          State: state,
          Stay: stay,
        }).then(() => {
          setCity("");
          setCollege("");
          setContact("");
          setEmail("");
          setName("");
          setState("");
          setStay("");
        });

        console.log("Pushed to firestore");
      })
      .catch((error) => {
        console.log(error.message);
      });

     
    // setCount(count + 1);
      
  };

  return (
    <section id="#register" className="register">
      <div className="main-container">
        <h5 className="heading">REGISTER</h5>
        <div className="title-head">
          <div className="title-individual">INDIVIDUAL</div>
          {/* <div className="title-team">Team</div> */}
        </div>
        <div className="form-container">
          <form action="#" className="individual" ref={formRef}>
            <div>
              <input
                id="name"
                type="text"
                placeholder="Name"
                className="field"
                value={name}
                ref={nameRef}
                // onChange={(e) => handleInputChange(e)}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                id="contact"
                type="text"
                placeholder="Contact Number"
                className="field"
                value={contact}
                ref={contactRef}
                // onChange={(e) => handleInputChange(e)}
                onChange={(e) => setContact(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                id="email"
                type="text"
                placeholder="Mail ID"
                className="field"
                value={email}
                ref={emailRef}
                // onChange={(e) => handleInputChange(e)}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                id="college"
                type="text"
                placeholder="School/College"
                className="field"
                value={college}
                ref={collegeRef}
                // onChange={(e) => handleInputChange(e)}
                onChange={(e) => setCollege(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                id="city"
                type="text"
                placeholder="City"
                className="field"
                value={city}
                ref={cityRef}
                // onChange={(e) => handleInputChange(e)}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                id="state"
                type="text"
                placeholder="State"
                className="field"
                value={state}
                ref={stateRef}
                // onChange={(e) => handleInputChange(e)}
                onChange={(e) => setState(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                id="stay"
                type="text"
                placeholder="Mode of stay"
                className="field"
                value={stay}
                ref={stayRef}
                // onChange={(e) => handleInputChange(e)}
                onChange={(e) => setStay(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Event details"
                className="field"
                // required
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
                onClick={(e) => handleSubmit(e)}
                type="button"
                className="button"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
