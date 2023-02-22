const InputText = ({ type, placeholder, onChange, onClick, error }) => {
  return (
    <div className="input-text">
      <input
        className={`item-input ${error?'border-error' : ''}`}
        type={type ? type : "text"}
        placeholder={placeholder}
        onChange={(e) => onChange(e)}
      />
      <div className="icon">
        {type === "search" &&  <img src="/icon/ic_search.svg" alt="ic_search" onClick={onClick} />}
      </div>
      {error && 
      <p className="error-input">{error}</p>
      }
      
    </div>
  );
};

export default InputText;
