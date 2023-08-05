import Default from "../../component/default/Default.jsx";
import Main from "../../component/main/main";
import "./home.styles.css";

function Home() {
  return (
    <div className="container">
      {
        localStorage.getItem('jwt') !== null ? (
          <Main />
        ) : (
          <Default />
        )
      }
    </div>
  );
}

export default Home;
