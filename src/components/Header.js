const Header = () => {
    return (
     <header class="desktop">
            <div class="bar-top-content">
                <div class="flex items-center">
                    <img src="images/icons/logo-img.png" alt="Logo" />
                    <div class="divisor-topbar" />
                    <img src="images/icons/logo-text.png" class="logo-txt" alt="Logo"/>
                </div>

                <input class="input-search border-main" placeholder="Pesquisar" type="text" />
                
                <div class="flex items-center container-margin-m-r">
                    <ion-icon name="paper-plane-outline" />
                    <ion-icon name="compass-outline" />
                    <ion-icon name="heart-outline" />
                    <ion-icon name="person-outline" />
                </div>
            </div>
        </header>
    )
}

export default Header;