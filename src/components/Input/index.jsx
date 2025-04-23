import "./style.css";

const Input = ({value, setValue, handleClick, handlePressEnter}) => {
  return <div className="input-container">
    <input 
      type="text" 
      placeholder="Digite um usuário do Github" 
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onKeyDown={(e) => handlePressEnter(e.key)}
    />
    <img 
      src="/src/assets/icons/search-icon.svg"
      onClick={() => handleClick()}
    />
  </div>
}

export default Input;