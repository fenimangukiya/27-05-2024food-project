import React from 'react'
import Slider from "react-slick";
import slide1 from '../../FackData/images/ava-1.jpg'
import slide2 from '../../FackData/images/ava-2.jpg'
import slide3 from '../../FackData/images/ava-3.jpg'
import slide4 from '../../FackData/images/ava-4.jpg'

export default function TestimonialSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
  return (
    <Slider {...settings}>
      <div>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
          <div className='align-items-center gap-3 d-flex'>
                <img src={slide1} alt='' className='img-fluid w-25'></img>
                <h6>Jone Doe</h6>
          </div>
      </div>
      <div>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
          <div className='align-items-center gap-3 d-flex'>
                <img src={slide2} alt='' className='img-fluid w-25'></img>
                <h6>Jone Doe</h6>
          </div>
      </div>
      <div>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
          <div className='align-items-center gap-3 d-flex'>
                <img src={slide3} alt='' className='img-fluid w-25'></img>
                <h6>Jone Doe</h6>
          </div>
      </div>
      <div>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
          <div className='align-items-center gap-3 d-flex'>
                <img src={slide4} alt='' className='img-fluid w-25'></img>
                <h6>Jone Doe</h6>
          </div>
      </div>
    </Slider>
  )
}
