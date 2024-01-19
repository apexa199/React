import React, { useEffect, useState } from 'react';
import { Button } from 'bootstrap';

export const ListTutorial = () => {

   const[data,setData] =  useState([]);

   useEffect(() => {

    fetch("http://localhost:8080/api/tutorials")
    .then(y => y.json())
    .then(y => 
      setData(y))
      
      .catch(y => {

        console.log(y)
      })
   },[])
  return (
    <>
      <table>
        {
          data.map((v,index) => {

            return(<tr>
                <td>{v.id}</td>
                <td>{v.title}</td>
              <td>{v.description}</td>
              <td> <Button >Edit</Button></td>
              <td><Button >Delete</Button></td>
             </tr>)

          })
        }
         
        
        </table>
    </>
  )
}
