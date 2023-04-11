import React from "react";
import sublinks from "./data";
import { useAppContext } from "./context";

export function SubMenu({}) {
  const { pageId, setPageId } = useAppContext();

  console.log(useAppContext());

  const handleMouseLeave = () => setPageId(null);
  // topPageLink > sublinks

  const pageLink = pageId && sublinks.find((el) => el.pageId === pageId);

  return (
    <div
      className="sub-menu"
      data-active={pageId ? true : false}
      onMouseLeave={handleMouseLeave}
    >
      {
        <article key={pageLink?.pageId}>
          <h6>{pageLink?.page}</h6>
          <ul>
            {pageLink?.links?.map((link) => (
              <li href={link.url} key={link.id}>
                {link.icon}
                <span>{link.label}</span>
              </li>
            ))}
          </ul>
        </article>
      }
    </div>
  );
}
