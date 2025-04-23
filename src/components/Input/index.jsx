import "./style.css";
import searchIcon from "../../assets/icons/search-icon.svg"

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
      src={searchIcon}
      onClick={() => handleClick()}
    />
  </div>
}

export default Input;