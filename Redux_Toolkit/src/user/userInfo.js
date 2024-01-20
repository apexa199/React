import React, { useEffect } from 'react'
import userSlice, { getUserAction } from './userSlice';
import { useDispatch, useSelector } from 'react-redux';
import {user} from '../user/userSlice'

export default function UserInfo() {

    const data = useSelector((state) => state.user);


    console.log(data);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getUserAction(1));
      });


  return (
    <div>UserInfo
      <table>
        <tbody>
          {
            data.data.map((v)=> {
              <tr><td>{v.id}</td>
              <td>{v.name}</td></tr>
            })
          }
        </tbody>
      </table>
    </div>
  )
}
