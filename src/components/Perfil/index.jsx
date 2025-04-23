import "./style.css";

const Perfil = ({image, name, description, status, message}) => {
  return <div className="perfil-container">
    {status === 100 
    ? 
      <>
        <img className="img" src={image} alt={`Foto de perfil do usuário ${name}`} />
        <div>
          <h2 className="name">{name === null ? "Usuário sem nome" : name}</h2>
          <p className="desc">{description === null ? "Usuário sem descrição" : description}</p>
        </div>
      </>
    :
      <p className="error">
        {message !== "" ? message : <>Nenhum perfil foi encontrado com esse nome de usuário.<br/>Tente novamente</>}

      </p>
    }
  </div>
}

export default Perfil;