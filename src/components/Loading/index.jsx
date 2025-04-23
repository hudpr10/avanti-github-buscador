import "./style.css";
import loadingGif from "../../assets/imgs/loading.gif"

const Loading = () => {
  return <>
    <img className="loading" src={loadingGif} alt="carregando..."/>
  </>
}

export default Loading;
