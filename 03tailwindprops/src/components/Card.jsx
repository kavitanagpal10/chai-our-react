import React from 'react'

function Card({username, btn="visit me"}) {

  return (
    <div>
       <div className="w-60 flex flex-col rounded-xl bg-black min-h-[19rem] ">
        <div>
          <img
            src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
            alt="test"
            className="object-cover object-center rounded-t-xl"
          />
          <p className='bg-white text-lg fon' >{username}</p>
           <button className='bg-white mt-2 inline-flex cursor-pointer items-center text-sm font-semibold '>{btn}</button>

        </div>
        <div className="flex flex-col py-3 px-3 pb-10">
          <div className="flex justify-between ">
            <h1 className="font-bold ">Bored ape nft accidental</h1>
            <h1>Price</h1>
          </div>
          <div className="flex  justify-between">
            <p>#345</p>
            <p>0.01</p>
           
          </div>
        </div>
      </div>
      
      
    </div>
  )
}

export default Card
