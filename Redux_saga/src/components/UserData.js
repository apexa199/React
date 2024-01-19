import React, { useEffect } from 'react'

import  {useDispatch,useSelector} from 'react-redux'

export default function UserData() {

    const data = useSelector(y=>y.user);

    const dis = useDispatch();

    useEffect(()=>{

        dis({type: 'GET_USERS_REQUESTED'})

    },[])

    console.log(data);

  return (
   <>
    <table>
      <tbody>
        {
        data.data.map((v) => 
          <tr><td>{v.id}</td>
          <td>{v.name}</td>
          </tr>)
        }
      </tbody>
    </table>
    </>
  )
}