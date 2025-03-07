//import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import list from "../../public/list.json";
import Slider from "react-slick";
import Cards from './Cards';
import axios from "axios";
import React, { useEffect, useState } from 'react';
function Freebook() {
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        setBook(res.data.filter((data)=> data.category==='Free'));
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getBook();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  // const filterData=list.filter((data)=> data.category==='Free');
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
  <>
  <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
    <div>
    <h1 className='font-bold text-x1 pb-2'>
      Free Offered Courses
    </h1>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. 
    </p>
    </div>

  <div className='mt-2'>
  <Slider {...settings}>
      {book.map((item)=>(
           <Cards item={item} key={item.id}/>
      ))}
      </Slider>

  </div>
  </div>
  </>
  );
}

export default Freebook
