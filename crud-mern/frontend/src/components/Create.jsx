import React, { useEffect, useState } from 'react';

function Create() {
  const [post,  setPost]=useState({});
  const handleSubmit=()=>{
  axios.get("",post).then().catch()
    }
  useEffect=(e)=>{
    console.log(e)
  }
  return (
    <div>
      <input type='text' name='email' value={post.value}></input>
      <input type='text' name='pass'value={post.value}></input>
      <button onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default Create;