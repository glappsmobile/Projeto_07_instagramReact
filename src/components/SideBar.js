import { render } from "react-dom";

const Suggestion = (props) => {
  return (
    <li class="suggestion">
      <div>
        <img
          src={`images/profile/${props.name}.png`}
          class="img-small"
          alt=""
        />
        <div class="status">
          <strong>{props.name}</strong>
          <span>Segue você</span>
        </div>
      </div>
      <span class="follow fake-pointer"> Seguir </span>
    </li>
  );
};

const FooterItem = (props) => {
  return (
    <span>
      <a href={props.url}>{props.text}</a>
      <span class="separator"> • </span>
    </span>
  )
}

const Footer = () => {

  const footerItems = [
    { text: "Sobre", url: "https://glappsmobile.github.io/Projeto_07_instagramReact/" },
    { text: "Ajuda", url: "https://glappsmobile.github.io/Projeto_07_instagramReact/" },
    { text: "Imprensa", url: "https://glappsmobile.github.io/Projeto_07_instagramReact/" },
    { text: "API", url: "https://glappsmobile.github.io/Projeto_07_instagramReact/" },
    { text: "Carreiras", url: "https://glappsmobile.github.io/Projeto_07_instagramReact/" },
    { text: "Privacidade", url: "https://glappsmobile.github.io/Projeto_07_instagramReact/" },
    { text: "Termos", url: "https://glappsmobile.github.io/Projeto_07_instagramReact/" },
    { text: "Localizações", url: "https://glappsmobile.github.io/Projeto_07_instagramReact/" },
    { text: "Contas mais relevantes", url: "https://glappsmobile.github.io/Projeto_07_instagramReact/" },
    { text: "Hashtags", url: "https://glappsmobile.github.io/Projeto_07_instagramReact/" },
    { text: "Idioma", url: "https://glappsmobile.github.io/Projeto_07_instagramReact/" },
    { text: "Sobre", url: "https://glappsmobile.github.io/Projeto_07_instagramReact/" },
    { text: "Sobre", url: "https://glappsmobile.github.io/Projeto_07_instagramReact/" },
    { text: "Sobre", url: "https://glappsmobile.github.io/Projeto_07_instagramReact/" },
  ];
  
    return (
      <div class="footer">
        <p>
          {footerItems.map(footerItem => <FooterItem text={footerItem.text} url={footerItem.url} />)}
        </p>
        <p> © 2021 INSTAGRAM DO FACEBOOK </p>
      </div>
    );
}

const Header = (props) => {
  return (
    <div class="header flex">
      <img
        src={`images/profile/${props.user.id}.png`}
        class="img-medium"
        alt={`Foto de ${props.user.id}`}
      />
      <div class="flex column content-center margin-medium-left">
        <strong>{props.user.id}</strong>
        <p class="txt-gray name">{props.user.name}</p>
      </div>
    </div>
  )
}

const SiderBar = (props) => {
  return (
    <aside class="bar-side">
      <Header user={props.user} />
      <div class="suggestions-labels">
        <span class="txt-gray"> Sugestões para você </span>
        <span class="fake-pointer"> Ver tudo </span>
      </div>
      <ul class="suggestions">
        {props.suggestions.map((suggestion) => <Suggestion name={suggestion} />)}
      </ul>
      <Footer />
    </aside>
  );
};

export default SiderBar;
