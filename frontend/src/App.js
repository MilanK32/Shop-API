import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./UI/Navbar";
import Lists from "./components/lists/Lists";
import ListDetails from "./components/lists/ListDetails";
import ShopList from "./components/shops/ShopsList";
import CategoryList from "./components/categories/CategoryList";
import CreateList from "./components/lists/CreateList";
import CreateShop from "./components/shops/CreateShop";
import CreateCategory from "./components/categories/CreateCategory";
import EditList from "./components/lists/EditList";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/lists' />
          </Route>
          <Route path='/lists' exact>
            <Lists />
          </Route>
          <Route path='/lists/new'>
            <CreateList />
          </Route>
          <Route path='/lists/:listId' exact>
            <ListDetails />
          </Route>
          <Route path='/lists/:id/update'>
            <EditList />
          </Route>
          <Route path='/shops' exact>
            <ShopList />
          </Route>
          <Route path='/shops/new'>
            <CreateShop />
          </Route>
          <Route path='/categories' exact>
            <CategoryList />
          </Route>
          <Route path='/categories/new'>
            <CreateCategory />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
