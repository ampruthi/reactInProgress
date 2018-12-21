"use strict";

console.log("App.js is runing!");

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h3",
    null,
    "Test App"
  ),
  React.createElement(
    "p",
    null,
    " Hello How Are you........... "
  )
);
var rootElement = document.getElementById('app');
ReactDOM.render(template, rootElement);
