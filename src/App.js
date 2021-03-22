import logo from './logo.svg';
import './css/App.css';

import NavigationBar from './Components/NavigationBar';
import Footer from './Components/Footer';
import LandingBody from './Components/LandingBody';
import Login from './Components/Login';
import SignUp from './Components/SignUp';


function App() {
  return (<div>
    {/* //For testing purpose,I have commented out the below components */}
     <NavigationBar/>
    <LandingBody/>
    <Footer/> 

    </div>
  );
}

export default App;
