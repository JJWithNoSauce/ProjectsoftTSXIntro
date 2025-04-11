import { useState } from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <main className="layout">
      <div className="layout-header">
        <div className="header-fixed">
          <div className="header-inner">
            {/* <span className="hamburger">header ☰</span> */}
            <button
              className="menu-hamburger"
              onClick={() => {
                setOpenMenu((prev) => !prev);
              }}
            >
              &#x2630;
            </button>
            {/* <span>&#x2630;</span> */}
            <div className="button-group">
              <button>b1</button>
              <button>b2</button>
              <button>b3</button>
              <button>b4</button>
              <button>b5</button>
              <button>b6</button>
              <button>b7</button>
              <button>b8</button>
              <button>b9</button>
              <button>b10</button>
            </div>
          </div>
        </div>
      </div>
      <div className="layout-container">
        <div className="layout-nav">
          <nav
            className={`layout-menu ${openMenu ? "layout-menu-active" : ""}`}
          >
            <ul className="layout-list">
              <li className="layout-item">
                <a href="/">Home</a>
              </li>
              <li className="layout-item">
                <a href="/animal">Animal</a>
              </li>
              <li className="layout-item">
                <a href="/user">User</a>
              </li>
              <li className="layout-item">
                <a href="/pokemon">Pokemon</a>
              </li>
              <li className="layout-item">
                <a href="/pokemon">Pokemon</a>
              </li>
              <li className="layout-item">
                <a href="/pokemon">Pokemon</a>
              </li>
              <li className="layout-item">
                <a href="/pokemon">Pokemon</a>
              </li>
              <li className="layout-item">
                <a href="/pokemon">Pokemon</a>
              </li>
              <li className="layout-item">
                <a href="/pokemon">Pokemon</a>
              </li>
              <li className="layout-item">
                <a href="/pokemon">Pokemon</a>
              </li>
              <li className="layout-item">
                <a href="/pokemon">Pokemon</a>
              </li>
              <li className="layout-item">
                <a href="/pokemon">Pokemon</a>
              </li>
              <li className="layout-item">
                <a href="/pokemon">Pokemon</a>
              </li>
              <li className="layout-item">
                <a href="/pokemon">Pokemon</a>
              </li>
              <li className="layout-item">
                <a href="/pokemon">Pokemon</a>
              </li>
              <li className="layout-item">
                <a href="/pokemon">Pokemon</a>
              </li>
              <li className="layout-item">
                <a href="/pokemon">Pokemon</a>
              </li>
              <li className="layout-item">
                <a href="/pokemon">Pokemon</a>
              </li>
              <li className="layout-item">
                <a href="/pokemon">Pokemon</a>
              </li>
              <li className="layout-item">
                <a href="/pokemon">Pokemon</a>
              </li>
              <li className="layout-item">
                <a href="/pokemon">Pokemon</a>
              </li>
              <li className="layout-item">
                <a href="/pokemon">Pokemon</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="layout-body">
          <div>
            <Outlet />
          </div>
        </div>
      </div>
      <div className="layout-footer">this is a footer</div>
    </main>
  );
}

export default Layout;
