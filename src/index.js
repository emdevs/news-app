import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


//function to grab data from line API, pass in as prop to App.
// const grabLineData = (path, setCategories, setCategoryList) => {
//   fetch(path)
//   .then((response) => response.text())
//   .then((data) => {

//     data = JSON.parse(data);
//     //have to set categories first before category list or else render will throw an error when reloading on /category
//     setCategories(data["result"]["categories"]);
//     setCategoryList(data["result"]["categoryList"]);

//     console.log(data["result"]["categories"]);
//   })
//   .catch((error) => console.log(error));
// };

// const grabLineData =  async (path) => {

//   let response = await fetch(path);
//   let data = await response.text();

//   data = JSON.parse(data);

//   return [data["result"]["categories"], data["result"]["categoryList"]];
// };


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
