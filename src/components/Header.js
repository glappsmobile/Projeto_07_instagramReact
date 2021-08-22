import MediaQuery from 'react-responsive'
import IonIcon from './IonIcon';


const HeaderDesktop = () => {
    return (
            <div class="header-desktop">
                <div class="flex items-center">
                    <img src="images/icons/logo-img.png" alt="Logo" />
                    <div class="divisor-topbar" />
                    <img src="images/icons/logo-text.png" class="logo-txt" alt="Logo" />
                </div>

                <input class="input-search border-main" placeholder="Pesquisar" type="text" />

                <div class="flex items-center container-margin-m-r">
                    <ion-icon name="paper-plane-outline" />
                    <ion-icon name="compass-outline" />
                    <ion-icon name="heart-outline" />
                    <ion-icon name="person-outline" />
                </div>
            </div>
    )
}

const HeaderMobile = () => {
    return (
            <div class="header-mobile">
                <img src="images/icons/logo-img.png" alt="Logo"/>
                <img src="images/icons/logo-text.png" class="logo-txt" alt="Logo"/>
                <IonIcon name="paper-plane-outline" title="Compartilhar" />
            </div>
    )
}

const Header = () => {
    return (
        <header>
            <MediaQuery minWidth={615}>
                <HeaderDesktop />
            </MediaQuery>

            <MediaQuery maxWidth={614}>
                <HeaderMobile />
            </MediaQuery>
        </header>
    )
}

export default Header;