import logo from './logo.svg';
import './App.css';
import HeaderComponent from './component/HeaderComponent';
import FooterComponent from './component/FooterComponent';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; //path
import ListComponent from './component/ListComponent';
import CreateComponent from './component/CreateComponent';
import ViewComponent from './component/ViewComponent';

//router: 
function App() {
  return (
    <>
      <Router>
          <HeaderComponent/>
          <div className="container">
            <Switch>
              <Route path="/" exact component={ListComponent} ></Route>
              <Route path="/employees"  component={ListComponent} ></Route>
              <Route path="/add-employee/:id"  component={CreateComponent} ></Route>
              <Route path="/view-employee/:id"  component={ViewComponent} ></Route>
              <ListComponent/>
            </Switch>
          </div>
          <FooterComponent/>
      </Router>
    </>
  );
}

export default App;
