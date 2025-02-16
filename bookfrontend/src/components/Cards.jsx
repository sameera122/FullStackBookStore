import React from 'react'

function Cards({item}){
  console.log(item.image);
  return (
    <>
    <div className=''>
    <div className="card bg-base-100 w-96 shadow-xl hover:scale-105 duration-300 dark:bg-slate-800 dark:text-white dark:border">
  <figure>
    {/* <img
      src={item.image}
      alt="" /> */}
         <img
  src={item.image || 'https://via.placeholder.com/150'}
  alt={item.name}
 //lassName="w-96 h-60 object-cover" // Set fixed width and height to test visibility
/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="badge badge-outline hover:bg-pink-600 hover:text-white duration-200">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards
