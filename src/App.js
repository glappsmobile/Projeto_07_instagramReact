import MediaQuery from 'react-responsive'
import Header from './components/Header/';
import Main from './components/Main';
import Footer from './components/Footer';

const App = () => {
    return (
      <div>
        <Header />
        <Main />
        <MediaQuery maxWidth={614}>
          <Footer />
        </MediaQuery>
      </div>
    );
}

export default App;