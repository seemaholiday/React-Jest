import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import "../App.css";

function Userlist() {
    const userListData = useSelector((state: any) => state.users.userList)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    useEffect(() => {
        dispatch({ type: 'FETCH_USER' })
    }, [])
    const detailEventCall = (item: any) => {
        navigate(`/userDetail/${item.id}`)
    }
    return (
        <div className='tableOuter'>
            <div className='flex App'>
                <Link to="/addUser"><button>Add User</button></Link>
                <table>
                    <tr>
                        <th>
                            Username
                        </th>
                        <th>
                            Email
                        </th>
                        <th>
                            Phone
                        </th>
                        <th>Detail</th>
                    </tr>
                    {
                        userListData ? userListData.map((item: any) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td><button onClick={() => detailEventCall(item)} style={{ marginRight: '10px' }}>Detail</button>
                                    </td>
                                </tr>
                            )
                        }) : 'No data'
                    }
                </table>
            </div>
        </div>
    )
}

export default Userlist