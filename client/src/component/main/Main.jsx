import { useEffect, useState } from "react";
import "./main.css";

function Main() {
  const [data, setData] = useState();
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

  return (
    <div className="main-container">
     {
        data?.map((item) => {
            return (
                <div className="card">
      <img src={item.photo} />
      <div className="container-1">
        <h4>
          <b>{`Posted by: ${item.postedBy.username}`}</b>
        </h4>
        <p>{`Content: ${item.body}`}</p>
      </div>
    </div>
            )
        })
     }
    
    </div>

  );
}

export default Main;
