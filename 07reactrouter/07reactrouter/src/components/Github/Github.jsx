import React, { useEffect, useState } from 'react'

export default function Github() {
  const [data , setData] = useState([])
  useEffect(() =>{
    fetch('https://api.github.com/users/kavitanagpal10/Musicstation')
    .then(response => response.json())
    .then( data => {
      console.log(data)
      setData(data)
    })

  }, [])

  return (
    <div className='text-center m-4 bg-gray-300 text-3xl p-10'>Github: {data.followers} 
    <img src="data.avatar_url" width={300} alt="" /></div>
  )
}
