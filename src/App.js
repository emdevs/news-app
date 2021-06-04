import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import './App.css';
import Navbar from './components/Navbar.js';
import Article from "./components/Article.js";
import Section from "./components/Section.js";
import Bookmarked from "./components/Bookmarked";

function App(props) {
  const [bookmarks, setBookmarks] = useState([]);

  const [categoryList, setCategoryList] = useState([]);
  const [categories, setCategories] = useState([]);

  // const [apiData, setApiData] = useState([]);

  //first mounted, do:
  useEffect(() => {
    // loadStorage();
    const fetchData = async () => {
      let data = await fetch("/id/portaljson"
      ).then((res) => res.json());

      console.log(data);
      console.log([data["result"]["categoryList"]]);

      setCategories(data["result"]["categories"]);
      setCategoryList(data["result"]["categoryList"]);
      // setApiData(data);
      // return data;
    };
    fetchData();
  }, [])

  // useEffect(() => {

  // }, [category])

  //set category and category list from apiData
  // useEffect(() => {
  //   // console.log(apiData);
  //   // console.log(apiData["result"]["categoryList"]);
  //   if (apiData !== [] && apiData["result"] !== undefined) {
  //     // setCategories(apiData["result"]["categories"]);
  //     // setCategoryList(apiData["result"]["categoryList"]);
  //     setCategoryList([{id: 0, name: "TOP"}]);
  //   }
  //   // setCategoryList([{id: 0, name: "TOP"}]);
    
  // }, [apiData]);

  useEffect(() => {
    // console.log(categoryList);
  }, [categoryList]);

  // useEffect(() => {
  //   console.log(bookmarks);
  //   // saveStorage();
  //   // console.log(localStorage);
  //   //after bookmarks change, save to localstorage or firebase db
  // }, [bookmarks])


  //load localstorage

  const loadStorage = () => {
    //check if line-bookmarks exists. if not, set 
    //unless undefined, set bookmarks to data from db
    let bookmarks = localStorage.getItem("line-bookmarks");

    if (bookmarks) {
      console.log("loaded from storage");
      setBookmarks(JSON.parse(bookmarks));
    }
  };

  const saveStorage = () => {
    localStorage.setItem("line-bookmarks", JSON.stringify(bookmarks));
  };


  //filter out all ads subsections from a category
  const filterAds = (category) => {
    return category["templates"].filter(i => i["title"] !== undefined);
  }
  

  const toggleBookmark = (article) => {
    //based on if isBookmarked or not. 
    if (isBookmarked(article.id)) {
      setBookmarks(bookmarks.filter(b => b.id !== article.id));
    } else {
      setBookmarks([...bookmarks, article]);
    }
  };

  //check if article is already bookmarked
  const isBookmarked = (id) => {
    return bookmarks.some(item => item.id === id);
  };

  //takes in book marked article id or smth?
  const removeBookmark = (id) => {
    setBookmarks(bookmarks.filter(b => b.id !== id));
  }

  //clear all bookmarks
  const clearBookmarks = () => {
    setBookmarks([]);
  }

  // dynamically set exact path for each route to render section
  return (
    <Router>
      <div className="App">
        <Navbar categories={categoryList} />
        
        <div id="page-content">
  
          <Switch>
            {
              categoryList.map((tab) => {

                //unless tab name is MAIN category

                let route = `/${tab["name"]}`;
                //search for category articles in categories with matching ID
                let category = categories.find(item => item["id"] === tab["id"]);
                //filter out ads
                // data = data["templates"].filter(i => i["title"] !== undefined);

                return(
                  <Route exact path={route} key={tab["id"]}
                  render={(props) => (
                    <Section {...props}
                    title={tab["name"]}
                    data={filterAds(category)}
                    toggle={toggleBookmark}
                    isBookmarked={isBookmarked}
                    />
                  )}
                  />
                )
              })
            }

            <Route exact path="/bookmark"
            render={props => (
              <Bookmarked {...props}
              bookmarks={bookmarks}
              clearAll={clearBookmarks}
              clearOne={removeBookmark}
              />
            )}
            />
          </Switch>   
        </div>
      </div>  
    </Router>
  );
}

export default App;





// const url = "https://today.line.me/id/portaljson";


  //get fetch data api func from props
  // const path = "/id/portaljson";
  // const { fetchData } = props;

  //fixthis tun it back to normal promise
