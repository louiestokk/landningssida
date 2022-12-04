import React from "react";
import {
  internallinks,
  popularLinks,
  fleromrodenLinks
} from "../utils/links/internalLinks";
import { Link } from "react-router-dom";
const Links = () => {
  return (
    <section>
      <div className="links-footer-container">
        <section style={{ margin: "1rem 1rem" }}>
          <h4>Andra har även sökt</h4>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {internallinks?.map((link, i) => (
              <Link
                id={i}
                to={link.path}
                style={{
                  margin: "0.1rem 0",
                  fontSize: "0.9rem",
                  color: "black",
                  opacity: 0.8
                }}
                className="footer-links"
              >
                <p className="footer-links">{link.title}</p>
              </Link>
            ))}
          </div>
        </section>
        <section style={{ margin: "1rem 1rem" }}>
          <h4>Fler områden</h4>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {popularLinks?.map((link, i) => (
              <Link
                id={i}
                to={link.path}
                style={{
                  margin: "0.1rem 0",
                  fontSize: "0.9rem",
                  color: "black",
                  opacity: 0.8
                }}
                className="footer-links"
              >
                <p className="footer-links">{link.title}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
      <div className="links-footer-container">
        <section style={{ margin: "1rem 1rem" }}>
          <h4>Populära sökningar</h4>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {fleromrodenLinks?.map((link, i) => (
              <Link
                id={i}
                to={link.path}
                style={{
                  margin: "0.1rem 0",
                  fontSize: "0.9rem",
                  color: "black",
                  opacity: 0.8
                }}
              >
                <p className="footer-links">{link.title}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Links;