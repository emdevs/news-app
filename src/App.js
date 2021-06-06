import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import './App.css';
import Navbar from './components/Navbar.js';
import Section from "./components/Section.js";
import Bookmarked from "./components/Bookmarked";
import Loading from "./components/Loading";
import ScrollToTop from "./components/ScrollToTop";

import menuIcon from "./imgs/icons8-menu-96.png";

function App(props) {
  const [bookmarks, setBookmarks] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [categories, setCategories] = useState([]);

  //first mounted, do:
  useEffect(() => {
    loadStorage();
    const fetchData = async () => {
      try {
        let data = await fetch("/id/portaljson"
        ).then((res) => res.json());

        setCategories(data["result"]["categories"]);
        setCategoryList(data["result"]["categoryList"]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [])

  useEffect(() => {
    console.log(bookmarks.length);
    saveStorage();
  }, [bookmarks])

  //Storage functions

  const loadStorage = () => {
    let bookmarks = localStorage.getItem("line-bookmarks");
    if (bookmarks) {
      setBookmarks(JSON.parse(bookmarks));
    }
  };

  const saveStorage = () => {
    localStorage.setItem("line-bookmarks", JSON.stringify(bookmarks));
  };

  //Bookmark functions

  const toggleBookmark = (article) => {
    if (isBookmarked(article.id)) {
      setBookmarks(bookmarks.filter(b => b.id !== article.id));
    } else {
      setBookmarks([...bookmarks, article]);
    }
  };

  const isBookmarked = (id) => {
    return bookmarks.some(item => item.id === id);
  };

  const removeBookmark = (id) => {
    setBookmarks(bookmarks.filter(b => b.id !== id));
  }

  const clearBookmarks = () => {
    setBookmarks([]);
  }

  //Navbar toggle functions
  const closeNavbar = () => {
    document.getElementById("navbar").style.width = "0";
  };

  const openNavbar = () => {
    document.getElementById("navbar").style.width = "300px";
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar categories={categoryList} close = {closeNavbar}/>
        
        <div id="page-content">
          <div id="header">
            <h1>LINE <span>News</span></h1>
            <img src={menuIcon} onClick={openNavbar}/>
          </div>

          {(categoryList.length === 0) && <Loading />}   
          
          <Switch>
            {
              categoryList.map((tab) => {
                let route = `/${tab["name"]}`;
                let category = categories.find(item => item["id"] === tab["id"]);
                //filter out ads
                let data = category["templates"].filter(i => i["title"] !== undefined);

                //set TOP news category to homepage
                if (tab["name"] === "TOP") {
                  route = ["/", `/${tab["name"]}`]
                };
                return(
                  <Route exact path={route} key={tab["id"]}
                  render={(props) => (
                    <Section {...props}
                    title={tab["name"]}
                    data={data}
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