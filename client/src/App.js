import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Doghome from './container/Home/Doghome';
import DogDetails from './container/Detail/Dogdetail.jsx';
import Landingpage from "./container/LandingPage/Landingpage.jsx"
import DogCreate from "./container/Create/DogCreate.jsx"
import Footer from './container/footer/footer';


function App() {
  return (
    <div className="App">
      <Router>

      <Switch>
      <Route path="/" exact component={Landingpage}/>
      <Route path="/dogs" exact component={Doghome}/>
      <Route path="/dogs/create" exact component={DogCreate}/>
      <Route path="/dogs/:id"  component={DogDetails}/>

      </Switch>
{<Footer/>}
      </Router>
      
    </div>
  );
}

export default App;
