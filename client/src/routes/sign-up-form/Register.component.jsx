import {useState} from "react";
import {Link, useNavigate} from 'react-router-dom'
import "./register.styles.css";
import M from 'materialize-css'

function Register() {
  const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  

    const registerUser = async () => {
        if (
          !/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(
            email
          )
        ) {
          M.toast({ html: "Invalid Email", classes: "#c62828 red darken-3" });
          return;
        }
        try {
          const fetchData = await fetch("http://localhost:8000/api/auth/register", {
            method: "post",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              username,
              email,
              password,
            }),
          });
          const response = await fetchData.json();
          if (response.error) {
            return M.toast({ html: response.error, classes: "toast" });
          } else {
            M.toast({ html: response.message, classes: "toast1" });
            navigate('/login')
          }
        } catch (error) {
          console.log(error);
        }
      };

  return (
    <div>
      <div className="my-card">
        <h1>BLOG PIX</h1>
        <div className="input-fields">
          <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
          <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          <div className="btn-container">
          <button type="submit" onClick={registerUser}>Register</button>
          <Link to='/login'>
          <p>Already have an account?</p>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
