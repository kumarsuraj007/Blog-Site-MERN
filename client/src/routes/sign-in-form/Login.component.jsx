import {useState, useContext} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {UserContext} from '../../contexts/userContext.jsx'
import './login.styles.css';

function Login () {
  const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const { setCurrentUser } = useContext(UserContext)

    const loginUser = async () => {
      if (
        !/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(
          email
        )
      ) {
        M.toast({ html: "Invalid Email", classes: "#c62828 red darken-3" });
        return;
      }
      try {
        const fetchData = await fetch("http://localhost:8000/api/auth/login", {
          method: "post",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        });
        const response = await fetchData.json();
        const {user} = response;
        setCurrentUser({user});
        
        if (response.error) {
          return M.toast({ html: response.error, classes: "toast" });
        } else {
          localStorage.setItem("jwt", response.token);
          localStorage.setItem("user", JSON.stringify(response.user));
          M.toast({ html: response.message, classes: "toast1" });
          navigate("/");
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
          <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          <div className="btn-container">
          <button type="submit" onClick={loginUser}>Login</button>
          <Link to='/register'>
          <p>Don't have an account?</p>
          </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login; 
