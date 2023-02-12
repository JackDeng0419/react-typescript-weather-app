import React from 'react'
import Slider from 'react-slick'
import { CityCardSmall } from '../CityCardSmall/index';
import './index.css'
import { AddCityCard } from '../AddCityCard/index';


export const HomePageSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
  return (
    <Slider {...settings} className="slider">
      <div>
        <CityCardSmall />
      </div>
      <div>
        <CityCardSmall />
      </div>
      <div>
        <CityCardSmall />
      </div>
      <div>
        <CityCardSmall />
      </div>
      <div>
        <CityCardSmall />
      </div>
      <div>
        <AddCityCard />
      </div>
    </Slider>
  )
}
