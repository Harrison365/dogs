import React from "react";
import "./Navbar.css";
import SignInButtons from "./SignInButtons.jsx";

export default function Navbar({ dogOrHome, setDogOrHome }) {
  return (
    <div>
      <div className="titleBar">
        <h1 id="messagesIcon">✉️</h1>
        <h1 className="title">Dog's Home 🏡</h1>
        <div id="signInButtons">
          <SignInButtons />
        </div>
      </div>
      <div className="subNavbarContainer">
        <div
          className="subNavbarLeft"
          onClick={() => {
            setDogOrHome("Dog");
          }}
          style={
            dogOrHome === "Dog"
              ? { backgroundColor: "#207fd3" }
              : { backgroundColor: "#1864a6" }
          }
        >
          <h2 className="subTitle">Find a Dog</h2>
        </div>
        <div
          className="subNavbarRight"
          onClick={() => {
            setDogOrHome("Home");
          }}
          style={
            dogOrHome === "Home"
              ? { backgroundColor: "#207fd3" }
              : { backgroundColor: "#1864a6" }
          }
        >
          <h2 className="subTitle">Find a Home</h2>
        </div>
      </div>
    </div>
  );
}
