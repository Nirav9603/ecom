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

function App() {
  return (
    <>
    <Header/>
    <Switch>
     <Route path={'/home'} exact component={Home}/>
     <Route path={'/shop'} exact component={Shop}/>
     <Route path={'/about'} exact component={About}/>
     <Route path={'/services'} exact component={Services} />
     <Route path={'/blog'} exact component={Blog}/>
     <Route path={'/contact'} exact component={Contact}/>
     <Route path={'/cart'} exact component={Cart}/>
    </Switch>
    <Footer/>
    </>
  );
}

export default App;
