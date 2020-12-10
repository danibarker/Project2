import React, { useEffect } from "react";
import "../css/App.css";

export default function Thanks({ setCurrentPage }) {
  useEffect(() => {
    setTimeout(() => {
      setCurrentPage("Navigation");
    }, 1500);
  });
  return (
    <div
      style={{
        margin: "100px 10px",
        textAlign: "center",
      }}
    >
          <h1>Thank you for your contribution</h1>
          <h2>Loading...</h2>
    </div>
  );
}
