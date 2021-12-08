import './App.css';
import './Components/HomePg'
import HomePg from './Components/HomePg';
import ItemPage from './Components/ItemPage';
import UserLogin from './Components/UserLogin';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductList from './Components/ProductList';
import Cart from './Components/Cart'
import Admin from './Components/Admin';
import AdminPg from './Components/AdminPg';
import AdminCustomer from './Components/AdminCustomer';
import AdminProduct from './Components/AdminProduct';

function App() {
  return (
    <Router>
      <Switch>
       <Route path="/" exact component={HomePg}/>
       <Route path="/home/:uid" exact component={HomePg}/>
       <Route path="/UserLogin" exact component={UserLogin}/>
       <Route exact path="/ItemPage" component={ItemPage} />
       <Route exact path="/ItemPage/:uid" component={ItemPage} />
       <Route exact path="/ProductList" component={ProductList} />
       <Route exact path="/Cart" component={Cart} />
       <Route exact path="/Cart/:uid" component={Cart} />
       <Route exact path="/Admin" component={Admin} />
       <Route exact path="/AdminPg" component={AdminPg} />
       <Route exact path="/AdminCustomer" component={AdminCustomer} />
       <Route exact path="/AdminProduct" component={AdminProduct} />
      </Switch>
    </Router>
  );
}

export default App;
