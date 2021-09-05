import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Service from "./Components/Service";
import Portfolio from "./Components/Portfolio";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import 'font-awesome/css/font-awesome.min.css';
import 'react-toastify/dist/ReactToastify.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";


function App() {
  return (
    <div>
      <Router>
            <Navbar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/About" component={About} />
              <Route path="/Service" component={Service} />
              <Route path="/Portfolio" component={Portfolio} />
              <Route path="/Contact" component={Contact} />
              <Redirect to="/" />
            </Switch>
            <Footer />
      </Router>
    </div>
  );
}

export default App;
