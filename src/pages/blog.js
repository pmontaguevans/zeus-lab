import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const BlogPage = () => (
  <div>
    <Layout />
    <h1>Here's the blog page!</h1>
    <Link to="/">back to startpage</Link>
  </div>
);

export default BlogPage;
