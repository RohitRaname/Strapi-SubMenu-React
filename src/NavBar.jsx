import React from "react";
import sublinks from "./data";
import { useAppContext } from "./context";

export function NavBar() {
  const { pageId,setPageId} = useAppContext();

  const handleMouseOver = (e) => {
    const navLink = e.target.closest(".nav-link");

    if (!navLink) {
      if (pageId) setPageId(null);
      return;
    }
  };

  return (
    <nav className="nav" onMouseOver={handleMouseOver}>
      <div className="logo">strapi</div>
      <ul className="nav-links">
        {sublinks.map(({ pageId, page }) => (
          <li className="nav-link" key={pageId} onMouseEnter={()=>setPageId(pageId)}>
            <span>{page}</span>
          </li>
        ))}
      </ul>
      <div></div>
    </nav>
  );
}
