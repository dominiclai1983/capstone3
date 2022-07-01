// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

// home.jsx
import React from "react";
import ReactDOM from "react-dom";
import Layout from "./layout";
import { Button } from "semantic-ui-react";

const Home = () => (
  <Layout>
    <h1>Home page</h1>
    <Button primary>Click Me Pls</Button>
  </Layout>
);

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Home />,
    document.body.appendChild(document.createElement("div"))
  );
});
