import { useEffect, useState } from "react";
import './style.scss'

const InputPassword = ({ type, placeholder, onChange, error }) => {
  const [typeInput, setType] = useState("");
  const hide = () => {
    setType("password");
  };
  const show = () => {
    setType("text");
  };

  useEffect(() => {
    setType(type);
  }, []);
  return (
    <div className="input-password">
      <input
        type={typeInput}
        placeholder={placeholder}
        onChange={(e) => onChange(e)}
        className={`item-input-password ${error?'border-error' : ''}`}
      />
      <div className="ic-password">
        {typeInput === "password" && (
          <img src="/icon/ic_eye_hide.svg" alt="ic_hide" onClick={show} />
        )}
        {typeInput === "text" && (
          <img src="/icon/ic_eye_unhide.svg" alt="ic_unhide" onClick={hide} />
        )}
      </div>
      {error && 
      <p className="error-input">{error}</p>
      }
    </div>
  );
};

export default InputPassword;
