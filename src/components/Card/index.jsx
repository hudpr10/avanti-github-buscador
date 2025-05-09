import { useState } from "react";
import Input from "../Input";
import Logo from "../Logo";
import Perfil from "../Perfil";
import Loading from "../Loading";
import "./style.css"

const Card = () => {
  // Variáveis para manipução dos dados
  const [inputValue, setInputValue] = useState("");
  const [githubResponse, setGithubResponse] = useState({
    name: "",
    image: "", 
    description: "", 
    status: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  // Função para capturar o click do usuário
  const handleClick = () => {
    updateComponentsAndSearch();
  }

  // Função que busca ao pressionar Enter
  const handlePressEnter = (key) => {
    if(key === "Enter"){
      updateComponentsAndSearch();
    } 
  }

  function updateComponentsAndSearch() {
    if(inputValue !== "") {
      getGithubData(inputValue);

      // Adicionando carregamento
      setIsLoading(true);
      
      // Tirando perfil ao clicar para buscar
      setGithubResponse({status: "", message: ""});
    } else {
      setGithubResponse({message: "Digite algo antes de realizar a busca!"});
    }

    setInputValue("");
  }

  // Conexão com a API
  async function getGithubData(user) {
    try {
      const conection = await fetch(`https://api.github.com/users/${user}`);
      const response = await conection.json();

      if(response.status === "404") {
        setGithubResponse({
          status: 404,
          message: ""
        })
      } else {
        setGithubResponse({
          image: response.avatar_url,
          name: response.name,
          description: response.bio,
          status: 100
        });
      }
    } catch {
      alert("Houve um erro durante a consulta, tente novamente.");
    } finally {
      setIsLoading(false);
    }
  }

  return <div className="card">
    <Logo />
    <Input 
      value={inputValue}
      setValue={setInputValue}
      handleClick={() => handleClick()}
      handlePressEnter={(e) => handlePressEnter(e)}
    />
    {githubResponse.status != "" 
    ?
      <Perfil 
        image={githubResponse.image}
        name={githubResponse.name}
        description={githubResponse.description}
        status={githubResponse.status}
        message={githubResponse.message}
      />
    : 
      null
    }
    {isLoading ? <Loading /> : null}
  </div>
}

export default Card;
