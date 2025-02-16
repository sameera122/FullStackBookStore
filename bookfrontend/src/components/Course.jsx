import React from 'react';
import list from '../../public/list.json'
import Cards from './Cards';
import { Link } from 'react-router-dom';

function Course() {
  return (
 <>
 <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
  <div className='mt-40 justify-center text-center'>
    <h1 className='text-2x1 md:text-4xl font-bold'>
        We are delighted to have you {" "}
        <span className='text-pink-500 text-6x1'>
        Here! :)
        </span>
    </h1>
    <p className='text-x1 space mt-3'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Nulla vitae massa at metus cursus tincidunt. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Nulla eu purus vitae sapien cursus commodo. Morbi tempus, felis nec dignissim gravida, orci lectus ultricies magna, eget aliquet metus orci vel turpis.
      </p>
      <Link to="/">
      <button className='text-white bg-pink-500 mt-3 px-5 py-2  rounded hover:bg-pink-700 duration-300'>
        Back
      </button>
      </Link>
  </div>
   <div className='mt-12 grid grid-cols-1 md:grid-cols-4 gap-60'>
    {
      list.map((item)=>(
        <Cards item={item} key={item.id}/>
      ))
    }



   </div>
 </div>
 </>
  )
}

export default Course
