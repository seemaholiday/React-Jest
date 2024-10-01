import React, { useState} from 'react'
import { useDispatch} from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import "../App.css";
function User() {
  const [data, setData] = useState({username: "", email: "", phone: "" })
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const handleSubmit = (e: any) => {
    e.preventDefault()
    dispatch({ type: "POST_USER_DETAIL", payload: data })
    console.log("post api data", data)
    alert("Record Created Successfully")
    navigate("/")
  }
  return (
    <div className='wrapper'>
      <h1>Add User Form</h1>
      <Link to="/"><button>User List</button></Link>
      <form onSubmit={handleSubmit}>
        <div className='flex'>
          <input required name="username" placeholder='username' value={data.username} onChange={(e) => setData({ ...data, username: e.target.value })} />
          <input required name="email" type='email' placeholder='email' value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
          <input required name="phone" placeholder='phone' value={data.phone} onChange={(e) => setData({ ...data, phone: e.target.value })} />
        </div>
        <button disabled={data.username && data.email && data.phone ? false : true} type='submit'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default User