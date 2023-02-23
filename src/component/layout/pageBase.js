import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./style.css";

export default function PageBase({ children }) {
  const accessToken = useSelector((s) => s.accessToken);
  const navigate = useNavigate();

  useEffect(() => {
    const app = document.getElementById("root");
    app.className = "pagebase";
  }, []);

  useEffect(() => {
    if (!accessToken) {
      navigate("/");
    }
  },[accessToken,]);

  return (
    <>
      <main className="main">{children}</main>
    </>
  );
}
