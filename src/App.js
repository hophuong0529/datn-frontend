import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import AdHeader from "./components/admin/layouts/navbar/AdminNavbar";
import AdLeft from "./components/admin/layouts/sidebar/AdminSidebar";
import Overview from "./components/admin/product/overview/Overview";
import AddProduct from "./components/admin/product/add/AddProduct";
import EditProduct from "./components/admin/product/EditProduct";
import AdFooter from "./components/admin/footer/AdminFooter";

export default function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/admin/">
                    <AdHeader/>
                    <div className="container-fluid row">
                        <div className="col-md-2">
                            <AdLeft/>
                        </div>
                        <div className="col-md-10">
                            <Switch>
                                <Route exact path='/admin/' component={Overview}/>
                                <Route path='/admin/products' component={Overview}/>
                                <Route path='/admin/product/add' component={AddProduct}/>
                                <Route path='/admin/product/edit/:id' component={EditProduct}/>
                            </Switch>
                        </div>
                    </div>
                    <AdFooter/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
