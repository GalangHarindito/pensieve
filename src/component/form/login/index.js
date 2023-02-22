import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../base/button";
import InputPassword from "../../base/input/password";
import InputText from "../../base/input/text";
import "./style.scss";
import { loginValidator } from "../../../helpers/validator";

const FormLogin = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

  const handleSubmit = (email, password) => {
    const value = {
      user_name: email,
      password: password,
    };

    setError(loginValidator(value));
    if (!Object.keys(error).length) {
      onSubmit(value);
    }
  };
  return (
    <div className="wrapper-login">
      <div className="wrapper-box">
        <div className="title">Login</div>
        <InputText
          placeholder="Email"
          type={"email"}
          onChange={(e) => setEmail(e.target.value)}
          error={error.user_name}
        />
        <InputPassword
          placeholder="Password"
          type={"password"}
          onChange={(e) => setPassword(e.target.value)}
          error={error.password}
        />
        <Button
          label="Submit"
          variant="default"
          onClick={() => handleSubmit(email, password)}
        />
        <Link to="/register">
          <div className="bottom-register">I want to Register</div>
        </Link>
      </div>
    </div>
  );
};

export default FormLogin;
