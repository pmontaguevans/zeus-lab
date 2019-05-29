import React from "react";
import { Link } from "gatsby";

import "./layout.scss";

const Header = () => (
  <nav>
    <Link to="/blog" partiallyActive={true}>
      blog
    </Link>
  </nav>
);

export default Header;
