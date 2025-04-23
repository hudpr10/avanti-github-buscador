import "./style.css";
import dots from "../../assets/imgs/background-dots.png"
import circle1 from "../../assets/imgs/background-circle01.png"
import circle2 from "../../assets/imgs/background-circle02.png"

const Background = () => {
  return <div className="background">
    <img className="background-dots" src={dots} />
    <img className="background-circle01" src={circle1} />
    <img className="background-circle02" src={circle2} />
  </div>
}

export default Background;
