import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <main className="layout">
      <nav className="layout-menu">
        <ul className="layout-list">
          <li className="layout-item">
            <a href="/">Home</a>
          </li>
          <li className="layout-item">
            <a href="/animal">Animal</a>
          </li>
        </ul>
      </nav>
      <div>
        <Outlet />
      </div>
    </main>
  );
}

export default Layout;
