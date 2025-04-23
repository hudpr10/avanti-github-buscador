import "./style.css"
import logoGithub from "../../assets/icons/github-icon.svg";
import textGithub from "../../assets/icons/github-text.svg";

const Logo = () => {
  return <div className="logo-container">
    <img src={logoGithub} alt="Logo Github" />
    <h1>Pefil</h1>
    <img src={textGithub} alt="Github" />
  </div>
}

export default Logo;