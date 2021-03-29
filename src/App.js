import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AdHeader from "./components/admin/layouts/navbar/AdminNavbar";
import AdLeft from "./components/admin/layouts/sidebar/AdminSidebar";
import Overview from "./components/admin/product/overview/Overview";
import AddProduct from "./components/admin/product/update/AddProduct";
import EditProduct from "./components/admin/product/update/EditProduct";
import AdFooter from "./components/admin/layouts/footer/AdminFooter";
import Header from "./components/user/layouts/header/Header";
import Footer from "./components/user/layouts/footer/Footer";
import { UserProvider } from "./components/user/contexts/UserContext";
import { CartProvider } from "./components/user/contexts/CartContext";
import Home from "./components/user/homePage/Home";
import Login from "./components/user/navigationPage/login/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin/">
          <AdHeader />
          <div className="container-fluid row">
            <div className="col-md-2">
              <AdLeft />
            </div>
            <div className="col-md-10">
              <Switch>
                <Route exact path="/admin/" component={Overview} />
                <Route path="/admin/products" component={Overview} />
                <Route path="/admin/product/add" component={AddProduct} />
                <Route path="/admin/product/edit/:id" component={EditProduct} />
              </Switch>
            </div>
          </div>
          <AdFooter />
        </Route>
        <Route path="/">
          <UserProvider>
            <CartProvider>
              <Header />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
              </Switch>
              <Footer />
            </CartProvider>
          </UserProvider>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
