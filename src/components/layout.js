import * as React from "react";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
          description
          twitterUsername
          image
          siteUrl
        }
      }
    }
  `);
  return (
    <div>
      <header>
        {/* Step 3: Use the data in your component */}
        <h1>{data.site.siteMetadata.title}</h1>
      </header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
