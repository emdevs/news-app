import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import './App.css';
import Navbar from './components/Navbar.js';
import Article from "./components/Article.js";
import Section from "./components/Section.js"

function App() {

  const [bookmarks, setBookmarks] = useState([]);

  //store categoryList (if navbar unchangin, grab articles wont be called)
  const [categoryList, setCategoryList] = useState([]);
  const [categories, setCategories] = useState([]);

  //first mounted, do:
  useEffect(() => {
    grabArticles();
  }, [])

  const url = "https://today.line.me/id/portaljson";
  const path = "/id/portaljson";

  //this func passed as prop to nav. will changed based on id probably
  const grabArticles = () => {

    fetch(path)
    .then((response) => response.text())
    .then((data) => {

      data = JSON.parse(data);
      //have to set categories first before category list or else render will throw an error when reloading on /category
      setCategories(data["result"]["categories"]);
      setCategoryList(data["result"]["categoryList"]);
      

      console.log(data["result"]["categories"]);
    })
    .catch((error) => console.log(error));
  };

  

  //create bookmark for article
  const createBookmark = () => {
    setBookmarks([...bookmarks, "new_article"]);
  }

  //takes in book marked article id or smth?
  const removeBookmark = () => {

  }

  const clearBookmarks = () => {
    setBookmarks([]);
  }

  // dynmially set exact path for each route to render section
  return (
    <Router>
      <div className="App">
        <Navbar categories={categoryList} />
        
        <div id="page-content">
          <Switch>
            {
              categoryList.map((tab) => {

                let route = `/${tab["name"]}`;
                //search for category articles in categories with matching ID
                let data = categories.find(item => item["id"] === tab["id"]);
                
                //filter out ads
                data = data["templates"].filter(i => i["title"] !== undefined);

                return(
                  <Route exact path={route} key={tab["id"]}
                  render={(props) => (
                    <Section {...props} category={tab["name"]} data={data} />
                  )}
                  />
                )
              })
            }
          </Switch>   
        </div>
      </div>  
    </Router>
  );
}

export default App;

