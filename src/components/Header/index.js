import MediaQuery from 'react-responsive'
import HeaderDesktop from './Desktop';
import HeaderMobile from './Mobile';

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