import React from 'react'
import { useParams } from 'react-router-dom'

const Detail:React.FC=()=> {
    let {id}=useParams()
  return (
    <div className='Detail'>
        {id}
    </div>
  )
}

export default Detail
