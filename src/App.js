import logo from './logo.svg';
import './App.css';
import Signin from './components/Signin.js';
import Signup from './components/Signup.js';
import Appbar from './components/Appbar.js';
import Homepage from './components/Home.js'
import Show from './components/Show.js';
import AboutUs from './components/Aboutus.js';


function App({store}) {
  function Page(){
    switch(store.getState()){
      case "Signin":
        return(<div><Signin/></div>);
      case "Signup":
        return(<div><Signup/></div>);
      case "Home":
        return(<div><Homepage/></div>);
      case "Show":
        return(<div><Show/></div>);
        case "AboutUs":
          return(<div><AboutUs/></div>);
      default:
        return(<div><Homepage/></div>);
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>INDIAN   ART   GALLERY </p>  
      </header>
      <div className='App-body'>
        <Appbar store={store}/>
        <Page />
      </div>
    </div>
  );
}

export default App;
