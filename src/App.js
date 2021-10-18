import './App.css';
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { actionData } from './redux/action/action';
import { Body } from './Body';
import { Header } from './Header';
import { ProductInfo } from './ProductInfo';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = async () => {
      const product = await axios
        .get('https://fakestoreapi.com/products')
        .catch(err => console.log(err));
      dispatch(actionData(product.data));
    }
    getProducts();
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path='/Fake-store-Api' exact>
            <Body />
          </Route>
          <Route path='/Fake-store-Api/product/:productId' >
            <ProductInfo />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
