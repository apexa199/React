import React, { useEffect } from 'react';
import { getPosts } from './postsSlice';
import { useDispatch, useSelector } from 'react-redux';


export default function Post() {

    const { list, status } = useSelector((state) => state.post);
  
    const dispatch= useDispatch();

    useEffect(() => {

        dispatch(getPosts({ userId: 1 }));

      }, [dispatch]);


      console.log(list);
  
    return (
      <div>Id</div>

    // <table>
    //   <tbody>
        
    //     {
    //     list.map((v) => {
    //         <tr><td>{v.userId}</td>
    //         <td>{v.id}</td>
    //         <td>{v.title}</td></tr>
    //       })
    //     }
    //   </tbody>
    // </table>
  )
}