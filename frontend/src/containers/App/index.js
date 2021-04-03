import React from "react";
import Article from "../Article";
import Category from "../Category";
import ProductList from "../../components/ProductList/ProductList";
import Cart from "../../components/Cart";
import Modal from "../../components/Modal/Modal";
import PageNotFound from "../../components/PageNotFound/PageNotFound";
import { Switch, Route } from "react-router-dom";
import TempDetails from "../../components/Details/tempDetails";
import ProfilePage from "../../components/LoginRegister/ProfilePage";
import SignUp from "../../components/LoginRegister/signup";
import Login from "../../components/LoginRegister/login";
import Test from "../../components/Tests/test";
import { AuthenticationConsumer } from "../../components/LoginRegister/autheticationapi";
import NavbarCoolLoggedIn from "../../components/Navbar/NavbarCoolLoggedIn";
import Checkout from "../../components/LoginRegister/Checkout";
import ShippingForm from "../../components/Cart/Checkout/shippingForm";
import About from "../../components/About/about";
import NavbarCool from "../../components/Navbar/NavbarCool";
import Footer from "../../components/footer/Footer";
import BlogMain from "../../components/Blog/blogMain";
import Home from "../../components/Home/home";
import Contact from "../../components/ContactUs/contact";
function App() {
  return (
    <div className="App">
      <AuthenticationConsumer>
        {value => {
          if (value.isLogged || value.isSignedUp) {
            return <NavbarCoolLoggedIn />;
          } else if (!value.isLogged || !value.isSignedUp) {
            return <NavbarCool />;
          }
        }}
      </AuthenticationConsumer>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/blog" component={BlogMain} exact />
        <Route path="/article/:id" component={Article} exact />
        <Route path="/category/:id" component={Category} exact />
        <Route path="/details/:id" component={TempDetails} exact />
        <Route path="/userprofile" component={ProfilePage} exact />
        <Route path="/signup" component={SignUp} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/test" component={Test} exact />

        <Route path="/shop" component={ProductList} exact></Route>
        <Route path="/cart" component={Cart} exact></Route>
        <Route path="/checkout" component={Checkout} exact></Route>
        <Route path="/shippingaddress" component={ShippingForm} exact></Route>

        <Route component={PageNotFound} exact></Route>
      </Switch>

      <Modal />
      <Footer />
    </div>
  );
}

export default App;
