import { Link, Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Users from "../pages/User";

const NAV_ITEM = [
  {
    path: "/",
    title: "Home",
    element: <Home />,
  },
  {
    path: "/users",
    title: "Users",
    element: <Users />,
  },
];

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <>
      <div className="navbar">
        <div className="navbar-start">
          <a className="navbar-item">Ripple UI</a>
        </div>
        <div className="navbar-center">
          {NAV_ITEM.map((item) => {
            return (
              <Link
                key={item.path}
                className={`navbar-item ${
                  pathname === item.path ? "navbar-active" : ""
                }`}
                to={item.path}
                end
              >
                {item.title}
              </Link>
            );
          })}
        </div>
      </div>
      <Routes>
        {NAV_ITEM.map((item) => {
          return (
            <Route key={item.path} path={item.path} element={item.element} />
          );
        })}
      </Routes>
    </>
  );
};

export default Navbar;
