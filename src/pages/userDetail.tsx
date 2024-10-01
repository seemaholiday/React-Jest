import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

function Userdetail() {
    const userDetail = useSelector((state: any) => state.users)
    const [data, setData] = useState({ name: "", username: "", email: "", phone: "" })
    const { id } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({ type: 'DETAIL_USER', payload: id })
    }, [])
    useEffect(() => {
        if (userDetail && userDetail.userDetailRes) {
            setData({
                name: userDetail.userDetailRes.name, username: userDetail.userDetailRes.username,
                email: userDetail.userDetailRes.email, phone: userDetail.userDetailRes.phone
            })
        }

    }, [userDetail])
    const handleSubmit = (e:any) => {
        e.preventDefault()
        alert("Updated Successfully")
    }
    return (
        <div className='wrapper'>
            <h1>User Detail</h1>
            <Link to={"/"}><button>User List</button></Link>
            <Link to="/addUser" style={{marginLeft:"10px"}}><button>Add User</button></Link>
            <form onSubmit={handleSubmit}>
                <div className='flex'>
                    <input required placeholder='Username' value={data.username} onChange={(e) => setData({ ...data, username: e.target.value })} />
                    <input required placeholder='Email' value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
                    <input required placeholder='Phone' value={data.phone} onChange={(e) => setData({ ...data, phone: e.target.value })} />
                    <button type='submit'>Update</button>
                </div>
            </form>
        </div>
    )
}

export default Userdetail