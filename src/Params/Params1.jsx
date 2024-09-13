import React from 'react'
import { Link, useParams } from 'react-router-dom';

const Params1 = () => {
    const params = useParams();
    console.log(params);
  return (
    <>
       {params.id == 1 ? "Hello" : ""}
       {params.id == 2 ? "Hello" : ""}
       {params.id == 3 ? "Hello" : ""}
    </>
  );
}

export default Params1;
