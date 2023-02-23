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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[accessToken,]);

  return (
    <>
      <main className="main">{children}</main>
    </>
  );
}
