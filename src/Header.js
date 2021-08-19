import logo from './images/icons/logo-img.png';
import logoText from './images/icons/logo-text.png';

const Header = () => {
    return (
     <div class="bar-top desktop">
            <div class="bar-top-content">
                <div class="flex items-center">
                    <img src={logo} alt="Logo"/>
                    <div class="divisor-topbar"></div>
                    <img src={logoText} class="logo-txt" alt="Logo"/>
                </div>

                <input class="input-search border-main" placeholder="Pesquisar" type="text"/>
                
                <div class="flex items-center container-margin-m-r">
                    <ion-icon name="paper-plane-outline"/>
                    <ion-icon name="compass-outline"/>
                    <ion-icon name="heart-outline"/>
                    <ion-icon name="person-outline"/>
                </div>
            </div>
        </div>
    )
}

export default Header;