import {useState} from 'react';
import folder from '../../assets/folder.png'
import './post.css'
import {useNavigate} from 'react-router-dom';

function Post() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [photo, setPhoto] = useState("");
  const [url, setUrl] = useState("")

  const postData = async () => {
    const fileData = new FormData();
    fileData.append("file",photo);
    fileData.append("upload_preset",'socialmediapp');
    fileData.append("cloud_name",'vlt');
    const fetchData = await fetch('https://api.cloudinary.com/v1_1/vlt/image/upload', {
      method: "post",
      body: fileData
    });
    const response = await fetchData.json();
    setUrl(response.url);

    try {
      const fetchPostData = await fetch('http://localhost:8000/api/post/create', {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "Authorization":"Bearer " + localStorage.getItem("jwt")
        },
        body:JSON.stringify({
          title,
          body,
          pic:url
        })
      })
      const Response = await fetchPostData.json();
      const Data = Response;
      if (Data.error) {
        return M.toast({html: Data.error, classes: "#c62828 red darken-3"})
      } else {
        M.toast({html: Data.Message, classes: "#388e3c green darken-2"});
        navigate('/');
      }
    } catch (error) {
      console.log(error)
    }  
  } 

  return (
    <div className='post-container'>
      <h1>CREATE YOUR POST...</h1>
      <input className='title' type="text" placeholder='Title' onChange={(e) => setTitle(e.target.value)} />
      <div className='post-input-fields'>
      <textarea type="text" placeholder='Write content....' onChange={(e) => setBody(e.target.value)}/><br />
      <label htmlFor="file" className='post-label'>
        <img className='folder' src={folder} alt="" /><h5>choose an image !</h5>
      </label>
      <input type="file" id='file' style={{display: 'none'}} onChange={(e) => setPhoto(e.target.files[0])}/>
      </div>
      <div className='upload-btn'>
        <button type='submit' onClick={(e) => postData(e)}>Upload</button>
      </div>
    </div>
  )
}

export default Post
