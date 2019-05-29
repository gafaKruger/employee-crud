import React from "react";
import "./navegacao.css";

import { Link } from "react-router-dom";

const links = [
  { route: "/", label: "Home" },
  { route: "/funcionarios", label: "Funcionários" }
];

export default props => (
  <aside className="menu-area">
    <nav className="menu">
      {links.map(link => (
        <Link key={link.route} className="nav-link" to={link.route}>
          {link.label}
        </Link>
      ))}
    </nav>
  </aside>
);
