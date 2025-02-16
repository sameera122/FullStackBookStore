import React from 'react';
//port Banner  from '../../public/Banner.jpg'


function Banner() {
  return (
    <>
     <div className='w-full container mx-auto md:px-20 px-4 flex flex-col md:flex-row'>
      <div className='w-full order-2  md:order1 md:w-1/2 mt-12 md:mt-32 '>
      <div className='space y-50'>
      <h1 className='mt-3 text-4xl font-bold'>
      hello,welcome here to learn <span className='text-pink-500' > something new!!!! </span></h1>
      <p className='text-x1 space mt-3'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Nulla vitae massa at metus cursus tincidunt. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Nulla eu purus vitae sapien cursus commodo. Morbi tempus, felis nec dignissim gravida, orci lectus ultricies magna, eget aliquet metus orci vel turpis.
      </p>
      <label className="mt-3 input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="text" className="grow" placeholder="Email" />
</label>
<button className="mt-3 btn btn-active btn-secondary">Secondary</button>
      </div>
      </div>
      <div className='order-2  w-full md:w-1/2 m-5 mt-4 p-3 dark:bg-slate-700 dark: text-white'>
      <img src="/Banner.jpg" alt=""/>
      </div>
    </div>
    </>
  )
}

export default Banner
