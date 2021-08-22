import IonIcon from '../IonIcon';

const HeaderDesktop = () => {
    return (
        <div class="header-desktop">
            <div class="row">
                <img src="images/icons/logo-img.png" alt="Logo" />
                <div class="divisor-topbar" />
                <img src="images/icons/logo-text.png" class="logo-txt" alt="Logo" />
            </div>
            <input class="input-search border-main" placeholder="Pesquisar" type="text" />
            <div class="row medium-gap">
                <IonIcon name="paper-plane-outline" title="Compartilhar" />
                <IonIcon name="compass-outline" title="Explorar" />
                <IonIcon name="heart-outline" title="Curtidas" />
                <IonIcon name="person-outline" title="Perfil" />
            </div>
        </div>
    )
}

export default HeaderDesktop;