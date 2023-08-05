import { UseContext, useContext } from "react";
import { UserContext } from "../../contexts/userContext.jsx";
import Default from "../../component/default/Default.jsx";
import Main from "../../component/main/main";
import "./home.styles.css";

function Home() {
  const { currentUser } = useContext(UserContext);
  return (
    <div className="container">{currentUser ? <Main /> : <Default />}</div>
  );
}

export default Home;
