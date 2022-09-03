import { React, useRef, useState, useEffect } from "react";
import {
  getFirestore,
  doc,
  setDoc,
  collection,
  getDocs,
  addDoc,
} from "firebase/firestore";

import app from "../src/Firebase.jsx";

import "./signup.css";

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
  // const [count, setCount] = useState(2000);

  const nameRef = useRef(null);
  const contactRef = useRef(null);
  const emailRef = useRef(null);
  const collegeRef = useRef(null);
  const cityRef = useRef(null);
  const stateRef = useRef(null);
  const stayRef = useRef(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    switch (id) {
      case "name":
        setName(value);
        break;
      case "contact":
        setContact(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "college":
        setCollege(value);
        break;
      case "city":
        setCity(value);
        break;
      case "state":
        setState(value);
        break;
      case "stay":
        setStay(value);
        break;
    }
  };
  const reg = useRef(null);

  const handleSubmit = () => {
    console.log("Pushed to firestore");
    setCount(count + 1);
    addDoc(colRef, {
      
      Name: name,
      Contact: contact,
      Email: email,
      College: college,
      City: city,
      State: state,
      Stay: stay,
    },)
    .then(() => {
      setCity("");
      setCollege("");
      setContact("");
      setEmail("");
      setName("");
      setState("");
      setStay("");
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
        <div className="form-container">
          <form action="#" className="individual" ref={reg}>
            <div>
              <input
                id="name"
                type="text"
                placeholder="Name"
                className="field"
                value={name}
                ref={nameRef}
                onChange={(e) => handleInputChange(e)}
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
                onChange={(e) => handleInputChange(e)}
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
                onChange={(e) => handleInputChange(e)}
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
                onChange={(e) => handleInputChange(e)}
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
                onChange={(e) => handleInputChange(e)}
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
                onChange={(e) => handleInputChange(e)}
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
                onChange={(e) => handleInputChange(e)}
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
            <div className="button-container">
              <button
                onClick={() => handleSubmit()}
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
