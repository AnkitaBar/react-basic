import React from 'react'
import { Link } from 'react-router-dom'

const Params = () => {
  return (
    <>
        <Link to='/params/1'>Hello1</Link>
        <br/>
        <Link to='/params/2'>Hello2</Link>
        <br/>
        <Link to='/params/3'>Hello3</Link>
    </>
  )
}

export default Params;