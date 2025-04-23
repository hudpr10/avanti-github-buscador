import "./style.css";

const Input = ({value, setValue, handleClick}) => {
  return <div className="input-container">
    <input 
      type="text" 
      placeholder="Digite um usuário do Github" 
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
    <img 
      src="/src/assets/icons/search-icon.svg"
      onClick={() => handleClick()}
    />
  </div>
}

export default Input;