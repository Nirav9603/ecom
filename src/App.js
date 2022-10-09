import './App.css';
import { Route, Switch } from 'react-router-dom'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './containers/home/Home';
import Shop from './containers/shop/Shop';
import About from './containers/about/About';
import Services from './containers/services/Services';
import Blog from './containers/blog/Blog';
import Contact from './containers/contact/Contact';
import Cart from './containers/cart/Cart';
import Auth from './containers/auth/Auth';
import Layout from './admin/components/Layout';
import Product from './admin/containers/Product';

function App() {
  return (
    <>
      {/* <Header />
      <Switch>
        <Route path={'/'} exact component={Home} />
        <Route path={'/shop'} exact component={Shop} />
        <Route path={'/about'} exact component={About} />
        <Route path={'/services'} exact component={Services} />
        <Route path={'/blog'} exact component={Blog} />
        <Route path={'/contact'} exact component={Contact} />
        <Route path={'/auth'} exact component={Auth} />
        <Route path={'/cart'} exact component={Cart} />
      </Switch>
      <Footer /> */}
      <Layout>
        <Switch>
          <Route path={'/product'} exact component={Product} />
        </Switch>
      </Layout>

    </>
  );
}

export default App;
