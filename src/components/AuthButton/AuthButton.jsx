import React from "react";
import "./AuthButton.css";

function AuthButton({onClick, text}) {
  return (
    <button className="login-button" onClick={onClick}>
      <span className="login-button__text">{text}</span>
      <svg className="login-button__svg" viewBox="-5 -5 110 110" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,0 C0,0 100,0 100,0 C100,0 100,100 100,100 C100,100 0,100 0,100 C0,100 0,0 0,0" />
      </svg>
    </button>
  );
}

export default AuthButton;
