import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import About from './component/About/About';
import Services from './component/Services/Services';

import Contact from './component/Contact/Contact';
import NotFound from './component/NotFound/NotFound';
import Footer from './component/Footer/Footer';
import Books from './component/Books/Books';









function App() {
  return (
    <div className="App">

      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>

          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>

          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/books">
            <Books></Books>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>


        </Switch>
        <Footer></Footer>
      </Router>

    </div>


  );
}

export default App;