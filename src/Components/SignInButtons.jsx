import React from "react";
import "./SignInButtons.css";
import { Link } from "react-router-dom";

export default function signInButtons() {
  return (
    <div>
      <Link to="/user">
        <h3>User</h3>
      </Link>
    </div>
  );
}
