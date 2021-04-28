import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProductList from "./components/admin/product/list";
import CategoryList from "./components/admin/category/list";
import AddProduct from "./components/admin/product/create/AddProduct";
import EditProduct from "./components/admin/product/create/EditProduct";
import Header from "./components/user/layouts/header/Header";
import Footer from "./components/user/layouts/footer/Footer";
import {
  PrivateRoute,
  UserProvider,
} from "./components/user/contexts/UserContext";
import { CartProvider } from "./components/user/contexts/CartContext";
import Home from "./components/user/homePage/Home";
import Login from "./components/user/loginPage/login/Login";
import AdminHeader from "./components/admin/layouts/navbar/AdminHeader";
import AdminSidebar from "./components/admin/layouts/sidebar/AdminSidebar";
import Detail from "./components/user/detailPage/Detail";
import AllProduct from "./components/user/filterCatProduct/AllProduct";
import CatProduct from "./components/user/filterCatProduct/CatProduct";
import SubCatProduct from "./components/user/filterCatProduct/SubCatProduct";
import SearchProduct from "./components/user/filterCatProduct/SearchProduct";
import Register from "./components/user/loginPage/register/Register";
import Cart from "./components/user/cartPage/Cart";
import Checkout from "./components/user/checkoutPage/Checkout";
import Profile from "./components/user/profile/infomation";
import ChangePassword from "./components/user/profile/changePassword";
import Alert from "./components/user/checkoutPage/alert/Alert";
import Order from "./components/user/profile/order";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin/">
          <AdminHeader />
          <div className="container-fluid main-admin">
            <div className="row">
              <div className="col-md-2">
                <AdminSidebar />
              </div>
              <div className="col-md-10">
                <section className="wrapper">
                  <div className="card card-content">
                    <Switch>
                      <Route exact path="/admin/" component={ProductList} />
                      <Route
                        exact
                        path="/admin/products"
                        component={ProductList}
                      />
                      <Route
                        exact
                        path="/admin/categories"
                        component={CategoryList}
                      />
                      <Route
                        path="/admin/product/create"
                        component={AddProduct}
                      />
                      <Route
                        path="/admin/product/edit/:id"
                        component={EditProduct}
                      />
                    </Switch>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </Route>
        <Route path="/">
          <UserProvider>
            <CartProvider>
              <Header />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/category/:id" component={CatProduct} />
                <Route
                  exact
                  path="/sub-category/:id"
                  component={SubCatProduct}
                />
                <Route path="/search" component={SearchProduct} />
                <PrivateRoute path="/cart" component={Cart} />
                <PrivateRoute path="/checkout/:code" component={Alert} />
                <PrivateRoute path="/checkout" component={Checkout} />
                <Route path="/order/index" component={Order} />
                <Route
                  path="/profile/change-password"
                  component={ChangePassword}
                />
                <Route path="/profile" component={Profile} />
                <Route exact path="/product" component={AllProduct} />
                <Route exact path="/:id" component={Detail} />
              </Switch>
              <Footer />
            </CartProvider>
          </UserProvider>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
