import { Link, Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Users from "../pages/User";
import { IoLogoJavascript } from "react-icons/io";
import UserAlbums from "../Button/UserAlbums/UserAlbums";

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
    nestedRoutes: [
      {
        path: "/:userId/albums",
        element: <UserAlbums />,
      },
    ],
  },
];

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <>
      <div className="navbar">
        <div className="navbar-start">
          <Link to="/">
            <IoLogoJavascript className="text-4xl hover:text-blue-600 transition-all" />
          </Link>
        </div>
        <div className="navbar-center">
          {NAV_ITEM.map((item) => (
            <Link
              key={item.path}
              className={`navbar-item ${
                pathname === item.path ? "navbar-active" : ""
              }`}
              to={item.path}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
      <Routes>
        {NAV_ITEM.map((item) => (
          <Route key={item.path} path={item.path} element={item.element} />
        ))}
        {NAV_ITEM.flatMap((item) =>
          item.nestedRoutes
            ? item.nestedRoutes.map((nestedItem) => (
                <Route
                  key={`${item.path}${nestedItem.path}`}
                  path={`${item.path}${nestedItem.path}`}
                  element={nestedItem.element}
                />
              ))
            : []
        )}
      </Routes>
    </>
  );
};

export default Navbar;
