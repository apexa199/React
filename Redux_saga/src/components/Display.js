import React from 'react'
import { useFetch } from './custom/useFetch'

export default function Display() {

 const {loading, data} =   useFetch("https://jsonplaceholder.typicode.com/users");
  
 
 console.log(loading);
 console.log(data);
 
 return (
    <div>Display</div>
  )
}