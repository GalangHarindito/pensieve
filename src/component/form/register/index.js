import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../base/button";
import InputPassword from "../../base/input/password";
import InputText from "../../base/input/text";
import "./style.scss";
import { registerValidator } from "../../../helpers/validator";

const FormRegister = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

  const handleSubmit = (name, email, password) => {
    const value = {
      name:name,
      email:email,
      password:password,
    };

    setError(registerValidator(value));
    if (!Object.keys(error).length) {
      onSubmit(value);
    }
  };
  return (
    <div className="wrapper-login">
      <div className="wrapper-box">
        <div className="title">Register</div>
        <InputText
          placeholder="Name"
          type={"text"}
          onChange={(e) => setName(e.target.value)}
          error={error.name}
        />
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
          label="Register"
          variant="default"
          onClick={() => handleSubmit(name, email, password)}
        />
        <Link to="/">
          <div className="bottom-register">I already have account</div>
        </Link>
      </div>
    </div>
  );
};

export default FormRegister;
