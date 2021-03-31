import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
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
import AdminNavbar from "./components/admin/layouts/navbar/AdminNavbar";
import AdminSidebar from "./components/admin/layouts/sidebar/AdminSidebar";
import Detail from "./components/user/detailPage/Detail";
import AllProduct from "./components/user/filterCatProduct/AllProduct";
import CatProduct from "./components/user/filterCatProduct/CatProduct";
import SubCatProduct from "./components/user/filterCatProduct/SubCatProduct";
import SearchProduct from "./components/user/filterCatProduct/SearchProduct";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin/">
          <AdminNavbar />
          <div className="container-fluid row">
            <div className="col-md-2">
              <AdminSidebar />
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
                <Route exact path="/category/:id" component={CatProduct} />
                <Route
                  exact
                  path="/sub-category/:id"
                  component={SubCatProduct}
                />
                <Route path="/search" component={SearchProduct} />
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
