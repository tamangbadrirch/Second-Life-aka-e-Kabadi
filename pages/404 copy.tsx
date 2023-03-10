import React from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Link from "next/link";
const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#e2e8f0",
      }}
    >
      <h1 style={{ fontSize: "96px", color: "#2d3748", fontWeight: "bold" }}>
        404
      </h1>
      <h2 style={{ fontSize: "32px", color: "#2d3748", marginBottom: "24px" }}>
        {" "}
        We are sorry, Page not found!{" "}
      </h2>
      <p style={{ color: "#2d3748" }}>
        The page you are looking for might have been removed, shifted, changed
        its name or is temporarily unavailable.
      </p>

      <a
        style={{
          color: "#4299e1",
          textDecoration: "none",
          border: "2px solid #4299e1",
          padding: "8px 16px",
          borderRadius: "8px",
          fontSize: "16px",
          fontWeight: "bold",
          transition: "all 0.2s",
        }}
        href="/dashboard"
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#4299e1";
          e.currentTarget.style.color = "#fff";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "";
          e.currentTarget.style.color = "#4299e1";
        }}
      >
        Back to Homepage
      </a>
    </div>
  );
};

export default NotFound;
