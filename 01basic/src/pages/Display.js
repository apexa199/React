import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import authfetch from '../axioshandler/interseptor';

export default function Dispplay() {

  const [data,setData] =  useState([]);

  const [isloadded,setIsLoadded] = useState(false);

    useEffect(()=>{

        setIsLoadded(true);

        authfetch.get("/accounts").then(y=>{

            setData(y.data);
            setIsLoadded(false)
        });

    },[])

  return (
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
      </tr>
    </thead>
    <tbody>

        {
            data.map((value,index)=>{

                return (<tr><td>{value.title}</td></tr>)
            })
        }
     
    </tbody>
  </Table>
  )
}
