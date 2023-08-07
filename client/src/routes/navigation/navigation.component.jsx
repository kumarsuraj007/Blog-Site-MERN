import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../contexts/userContext.jsx";
import "./navigation.styles.css";

function Navigation() {
  const { setCurrentUser } = useContext(UserContext);
  const logoutUser = () => {
    localStorage.clear();
    setCurrentUser(null);
  };

  return (
    <>
      <div className="nav">
        <Link to="/">
          <h1>BLOG PIX</h1>
        </Link>
        <ul>
          {localStorage.getItem("jwt") !== null ? (
            <Link to="/createpost">
              <li>CREATE POST</li>
            </Link>
          ) : (
            <li></li>
          )}
          {localStorage.getItem("jwt") !== null ? (
            <Link to="/login">
              <li onClick={logoutUser}>LOGOUT</li>
            </Link>
          ) : (
            <Link to="/login">
              <li>LOGIN</li>
            </Link>
          )}
        </ul>
      </div>
      <Outlet />
    </>
  );
}

export default Navigation;
