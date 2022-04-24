import { Cart } from "./pages/Cart";
import Home from "./pages/Home";
import { Login } from "./pages/Login";
import { Product } from "./pages/Product";
import { ProductList } from "./pages/ProductList";
import { Register } from "./pages/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom"
import { useSelector } from "react-redux";
import { Userprofile } from "./pages/Userprofile";
import { Myorders } from "./pages/Myorders";
import GetFunding from "./pages/GetFunding";

const App = () => {
  const user = useSelector((state)=>state.user.currentUser);
  return (
    <Router>
      <Switch>
      <Route exact path='/'>
        <Home/>
      </Route>
      <Route path='/products/:category'>
        <ProductList/>
      </Route>
      <Route path='/product/:id'>
        <Product/>
      </Route>
      <Route path='/cart'>
        <Cart/>
      </Route>
      <Route path='/login'>
        {user ? <Redirect to="/"/> : <Login/>}
      </Route>
      <Route path='/register'>
        {/* {user ? <Redirect to="/"/> : <Register/>} */}
        <Register/>
      </Route>
      <Route path='/profile'>
        <Userprofile/>
      </Route>
      <Route path='/order'>
        <Myorders/>
      </Route>
      <Route path='/getfunding'>
        <GetFunding/>
      </Route>
      </Switch>
    </Router>
  );
};

export default App;