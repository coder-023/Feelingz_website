import logo from './logo.svg';
import './css/App.css';

import NavigationBar from './Components/NavigationBar';
import Footer from './Components/Footer';
import LandingBody from './Components/LandingBody';


function App() {
  return (<div>
    <NavigationBar/>
    <LandingBody/>
    <Footer/>

    </div>
  );
}

export default App;
