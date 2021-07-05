import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./UI/Navbar";
import Home from "./pages/Home";
import Lists from "./components/Lists";
import ShopList from "./components/ShopsList";
import CategoryList from "./components/CategoryList";
import NewListForm from "./components/NewListForm";
import NewShopForm from "./components/NewShopForm";
import NewCategoryForm from "./components/NewCategoryForm";
import CategoryDetails from "./components/CategoryDetails";
import "./App.css";

function App() {
  const [lists, setLists] = useState([]);
  const [shops, setShops] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch("http://localhost:8080/api/lists"),
      fetch("http://localhost:8080/api/shops"),
      fetch("http://localhost:8080/api/categories"),
    ])
      .then(([listsData, shopsData, categoriesData]) => {
        return Promise.all([
          listsData.json(),
          shopsData.json(),
          categoriesData.json(),
        ]);
      })
      .then(([listsData, shopsData, categoriesData]) => {
        setLists(listsData);
        setShops(shopsData);
        setCategories(categoriesData);
        setIsLoaded(false);
      })
      .catch((err) => {
        setIsLoaded(false);
        console.log(err);
      });
  }, []);

  const data = {
    lists,
    shops,
    categories,
  };

  return (
    <div className='App'>
      <Navbar />
      {isLoaded && <p>Loading...</p>}
      {!isLoaded && (
        <div>
          <Switch>
            <Route path='/' exact>
              <Home {...data} />
            </Route>
            <Route path='/lists' exact>
              <Lists lists={lists} />
            </Route>
            <Route path='/lists/new'>
              <NewListForm />
            </Route>
            <Route path='/shops' exact>
              <ShopList shops={shops} />
            </Route>
            <Route path='/shops/new'>
              <NewShopForm />
            </Route>
            <Route path='/categories' exact>
              <CategoryList categories={categories} />
            </Route>
            <Route path='/categories/new'>
              <NewCategoryForm />
            </Route>
            <Route path='/categories/:id'>
              <CategoryDetails />
            </Route>
          </Switch>
        </div>
      )}
    </div>
  );
}

export default App;
