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
        <footer>
            <p>
                {footerItems.map(footerItem => <FooterItem text={footerItem.text} url={footerItem.url} />)}
            </p>
            <p> © 2021 INSTAGRAM DO FACEBOOK </p>
        </footer>
    );
}

export default Footer;
