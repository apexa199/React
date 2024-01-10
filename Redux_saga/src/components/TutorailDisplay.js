import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const TutorailDisplay = () => {

    const data = useSelector(y => y. tutorial)

    const dis = useDispatch();

    useEffect(() => {

        dis({type : 'GET_TUTORIAL_REQUESTED'})
        
    },[])

    console.log(data)

  return (
    <div>TutorailDisplay</div>
  )
}
