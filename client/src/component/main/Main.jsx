import { useEffect, useState, useContext } from "react";
import deleteBtn from "../../assets/delete.png";
import { UserContext } from "../../contexts/userContext.jsx";
import M from "materialize-css";
import "./main.css";

function Main() {
  const [data, setData] = useState();
  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    fetch("http://localhost:8000/api/post/allpost", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  });

  const deletePost = (id) => {
    fetch(`http://localhost:8000/api/post/delete/${id}`, {
      method: "delete",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        // const newData = data.filter(item => {
        //   return item._id !== result._id
        // })
        // setData(newData)
        if (result.error) {
          return M.toast({
            html: result.error,
            classes: "#c62828 red darken-3 toast",
          });
        } else {
          M.toast({
            html: result.message,
            classes: "#388e3c green darken-2 toast1",
          });
        }
      });
  };

  return (
    <div className="main-container">
      {data?.map((item) => {
        return (
          <div key={item._id} className="card">
            <img src={item.photo} key={item._id} />
            <div className="container-1">
              <h4>
                {`Posted by: ${item.postedBy.username}`}

                <img
                  src={deleteBtn}
                  onClick={() => deletePost(item._id)}
                  style={{
                    width: "25px",
                    position: "relative",
                    top: "2px",
                    left: "220px",
                  }}
                />
              </h4>
              <p>{`Content: ${item.body}`}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Main;
