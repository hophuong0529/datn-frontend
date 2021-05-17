import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/user/layouts/header/Header";
import Footer from "./components/user/layouts/footer";
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
import OrderList from "./components/admin/order/list";
import UserList from "./components/admin/user/list";
import ProducerList from "./components/admin/product/producer/list";
import ColorList from "./components/admin/product/color/list";
import ProductList from "./components/admin/product/info/list";
import CategoryList from "./components/admin/product/category/list";
import AddProduct from "./components/admin/product/info/create/AddProduct";
import EditProduct from "./components/admin/product/info/create/EditProduct";
import { General } from "./components/admin/statistic/general";
import { AdminLogin } from "./components/admin/login";
import {
  AdminProvider,
  PrivateAdminRoute,
} from "./components/admin/contexts/AdminContext";
import { StoreList } from "./components/user/store";
import { Introduce } from "./components/user/introduce";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin/">
          <AdminProvider>
            <Switch>
              <Route exact path="/admin/login" component={AdminLogin} />
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
                            <PrivateAdminRoute
                              exact
                              path="/admin/"
                              component={General}
                            />
                            <PrivateAdminRoute
                              exact
                              path="/admin/statistic"
                              component={General}
                            />
                            <PrivateAdminRoute
                              exact
                              path="/admin/products"
                              component={ProductList}
                            />
                            <PrivateAdminRoute
                              exact
                              path="/admin/categories"
                              component={CategoryList}
                            />
                            <PrivateAdminRoute
                              exact
                              path="/admin/producers"
                              component={ProducerList}
                            />
                            <PrivateAdminRoute
                              exact
                              path="/admin/colors"
                              component={ColorList}
                            />
                            <PrivateAdminRoute
                              exact
                              path="/admin/users"
                              component={UserList}
                            />
                            <PrivateAdminRoute
                              exact
                              path="/admin/orders"
                              component={OrderList}
                            />
                            <PrivateAdminRoute
                              path="/admin/product/create"
                              component={AddProduct}
                            />
                            <PrivateAdminRoute
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
            </Switch>
          </AdminProvider>
        </Route>
        <Route path="/">
          <UserProvider>
            <CartProvider>
              <Header />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/stores" component={StoreList} />
                <Route exact path="/introduce" component={Introduce} />
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
